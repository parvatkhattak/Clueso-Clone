import { Response } from 'express';
import prisma from '../config/database';
import { AuthRequest } from '../middleware/auth.middleware';

// Get all projects for user
export const getProjects = async (req: AuthRequest, res: Response) => {
    try {
        const projects = await prisma.project.findMany({
            where: { ownerId: req.user!.id },
            include: {
                videos: {
                    select: {
                        id: true,
                        title: true,
                        thumbnailUrl: true,
                        status: true,
                    },
                },
                folder: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
            orderBy: { updatedAt: 'desc' },
        });

        res.json({ projects });
    } catch (error) {
        console.error('Get projects error:', error);
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
};

// Get single project
export const getProject = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;

        const project = await prisma.project.findFirst({
            where: {
                id,
                ownerId: req.user!.id,
            },
            include: {
                videos: true,
                folder: true,
                team: {
                    include: {
                        members: {
                            include: {
                                user: {
                                    select: {
                                        id: true,
                                        name: true,
                                        email: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        });

        if (!project) {
            return res.status(404).json({ error: 'Project not found' });
        }

        res.json({ project });
    } catch (error) {
        console.error('Get project error:', error);
        res.status(500).json({ error: 'Failed to fetch project' });
    }
};

// Create project
export const createProject = async (req: AuthRequest, res: Response) => {
    try {
        const { name, description, folderId } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Project name is required' });
        }

        const project = await prisma.project.create({
            data: {
                name,
                description,
                ownerId: req.user!.id,
                folderId: folderId || null,
            },
            include: {
                folder: true,
            },
        });

        // Log activity
        await prisma.activityLog.create({
            data: {
                userId: req.user!.id,
                action: 'created_project',
                metadata: { projectId: project.id, projectName: name },
            },
        });

        res.status(201).json({ project });
    } catch (error) {
        console.error('Create project error:', error);
        res.status(500).json({ error: 'Failed to create project' });
    }
};

// Update project
export const updateProject = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;
        const { name, description, folderId } = req.body;

        // Check ownership
        const existing = await prisma.project.findFirst({
            where: { id, ownerId: req.user!.id },
        });

        if (!existing) {
            return res.status(404).json({ error: 'Project not found' });
        }

        const project = await prisma.project.update({
            where: { id },
            data: {
                ...(name && { name }),
                ...(description !== undefined && { description }),
                ...(folderId !== undefined && { folderId }),
            },
            include: {
                folder: true,
            },
        });

        res.json({ project });
    } catch (error) {
        console.error('Update project error:', error);
        res.status(500).json({ error: 'Failed to update project' });
    }
};

// Delete project
export const deleteProject = async (req: AuthRequest, res: Response) => {
    try {
        const { id } = req.params;

        // Check ownership
        const existing = await prisma.project.findFirst({
            where: { id, ownerId: req.user!.id },
        });

        if (!existing) {
            return res.status(404).json({ error: 'Project not found' });
        }

        await prisma.project.delete({ where: { id } });

        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Delete project error:', error);
        res.status(500).json({ error: 'Failed to delete project' });
    }
};

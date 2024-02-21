// user.service.ts

import User from '../models/user';

export const createUser = async (userData: any): Promise<any> => {
    try {
        return await User.create(userData);
    } catch (error) {
        throw new Error('Could not create user');
    }
};

export const getUsers = async (): Promise<any[]> => {
    try {
        return await User.findAll();
    } catch (error) {
        throw new Error('Could not fetch users');
    }
};

export const getUserById = async (userId: number): Promise<any> => {
    try {
        return await User.findByPk(userId);
    } catch (error) {
        throw new Error('Could not fetch user');
    }
};

export const updateUser = async (userId: number, userData: any): Promise<any> => {
    try {
        const user = await User.findByPk(userId);
        if (!user) throw new Error('User not found');
        return await user.update(userData);
    } catch (error) {
        throw new Error('Could not update user');
    }
};

export const deleteUser = async (userId: number): Promise<void> => {
    try {
        const user = await User.findByPk(userId);
        if (!user) throw new Error('User not found');
        await user.destroy();
    } catch (error) {
        throw new Error('Could not delete user');
    }
};
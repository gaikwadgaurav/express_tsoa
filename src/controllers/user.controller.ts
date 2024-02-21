// user.controller.ts

import { Route, Controller, Tags, Post, Get, Path, Put, Delete, Body } from 'tsoa';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../services/user.service';

@Route('users')
@Tags('Users')
export class UserController extends Controller {
    @Post()
    public async createUser(@Body() requestBody: any): Promise<any> {
        return await createUser(requestBody);
    }

    @Get()
    public async getUsers(): Promise<any[]> {
        return await getUsers();
    }

    @Get('{id}')
    public async getUserById(@Path() id: number): Promise<any> {
        return await getUserById(id);
    }

    @Put('{id}')
    public async updateUser(@Path() id: number, @Body() requestBody: any): Promise<any> {
        return await updateUser(id, requestBody);
    }

    @Delete('{id}')
    public async deleteUser(@Path() id: number): Promise<void> {
        await deleteUser(id);
    }
}

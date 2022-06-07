import { HttpException, HttpStatus, Injectable, Request } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserDocument } from "./user.schema";


@Injectable()
export class UserService{

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        // const role = await this.roleService.getRoleByValue('ADMIN')
        // await user.$set('roles', [role.id]) //set добавляет данные в таблицу
        // user.roles = [role]
        return user;
    }

    async getAllUsers() {
        const users = await this.userModel.find({});
        return users;
    }

    async getUserByEmail(email: string) {
        const user = await this.userModel.findOne({email})
        return user
    }

    async getUserId(req:any) { 
        const { id } = req.params;
        const user = await this.userModel.findById(id)
        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND)
        }
        return user
    }

    async getUser(req:any) { 
        const { _id } = req.user;
        const user = await (await this.userModel.findById({_id}))
        if (!user) {
            throw new HttpException('Пользователь не найден', HttpStatus.NOT_FOUND)
        }
        return user
    }
}
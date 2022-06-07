//import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    //@ApiProperty({example: 'Павел', description:'Имя'})
    readonly name:string;
   // @ApiProperty({example: 'pavel@yandex.ru', description:'Почтовый адрес'})
    readonly email:string;
    //@ApiProperty({example: '123456', description:'Пароль'})
    readonly password:string;
}

export class LoginUserDto {
    //@ApiProperty({example: 'pavel@yandex.ru', description:'Почтовый адрес'})
    readonly email:string;
    //@ApiProperty({example: '123456', description:'Пароль'})
    readonly password:string;
}
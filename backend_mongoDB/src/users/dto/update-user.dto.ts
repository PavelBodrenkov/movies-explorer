export class UpdateUserDto {
  //@ApiProperty({example: 'Павел', description:'Имя'})
  readonly name: string;
  //@ApiProperty({example: 'pavel@yandex.ru', description:'Почтовый адрес'})
  readonly email: string;
}

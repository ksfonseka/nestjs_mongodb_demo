import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Db, Document, WithId } from 'mongodb';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db
  ) {
  }

  create(createUserDto: CreateUserDto) {
    return this.db.collection('Users').insertOne(createUserDto)
  }

  findAll(): Promise<WithId<Document>[]> {
    return this.db.collection('Users').find().toArray();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

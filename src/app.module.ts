import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todos } from './todo/todo.entity'
import { AttractionModule } from './attraction/attraction.module';
import { Attractions } from './attraction/attraction.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'todo_db',
      entities: [Todos ,Attractions],
      synchronize: true,

    }),
    TodoModule,
    AttractionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  getTurma(): string {
    return '<h1>A Turma JavaScript Fullstack 04 é TOP!</h1>';
  }

}

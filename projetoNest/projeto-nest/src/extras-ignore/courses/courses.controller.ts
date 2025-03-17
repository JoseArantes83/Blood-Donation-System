import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) {}

  @Get() // apenas pegam dados
  async getCourses() {
    const courses = await this.coursesService.getCourses();

    return courses;
  }

  @Get(':courseId') // significa adionar /courseId na rota
  async getCourse(@Param('courseId') courseId: any) {
    const course = await this.coursesService.getCourse(courseId);

    return course;
  }
}

// POST => envia dados pra servidor
// PATCH => atualizar
// DELETE => deletar

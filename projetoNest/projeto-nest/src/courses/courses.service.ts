import { HttpException, Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CoursesService {
    courses = COURSES; // criei a propriedade courses que recebe o JSON dos 7 cursos

    getCourses(): Promise<any> { // criei um método que retorna os dados de todos os cursos do meu arquivo courses.mock.ts
        return new Promise(resolve => {
            resolve(this.courses);
        })
    }
    
    getCourse(courseId): Promise<any> {
        let id = Number(courseId);

        return new Promise(resolve => {
            const course = this.courses.find(course => course.id === id); // parâmetro => corpo da função

            if(!course){
                throw new HttpException('Não há nenhum curso com esse id!', 404); // 404 é o código de erro http que significa que não foi encontrado. É um erro do lado do usuário.
            }

            resolve(course);
        });
    }
}

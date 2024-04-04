import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CoursesModule } from './extras-ignore/courses/courses.module';

@Module({
  // imports: [CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

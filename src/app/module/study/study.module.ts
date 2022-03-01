import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StudyComponent } from './components/study/study.component';

@NgModule({
  declarations: [StudyComponent],
  imports: [CommonModule],
  exports: [StudyComponent],
})
export class StudyModule {}

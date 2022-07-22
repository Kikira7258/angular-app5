import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'students', component: StudentsComponent},
  {path: 'add-student', component: AddStudentComponent},
  {path: 'edit-student/:id', component: EditStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

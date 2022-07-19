import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: any[] = [];
  
  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(data => this.students = data);
  }

}

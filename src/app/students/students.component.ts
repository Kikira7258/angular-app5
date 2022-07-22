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

  // get all students from service
  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(data => this.students = data);
    // Helps to ensure that your data is current
    setTimeout(() => {
      this.ngOnInit()
    }, 1000 * 5 )
  }

  // delete student
  delStudent(data:any){
    this.studentService.deleteStudent(data._id).subscribe(() => {
      // >> filter array and sets it back to the new filter array, this filted array won't have what was removed
      // this.students = this.students.filter((val) => data._id !== val._id )
      // console.log('You have recieved $80 for deleting')
      // this.students = this.students.filter((val:any) => val !== data )
    })
  }
  
}

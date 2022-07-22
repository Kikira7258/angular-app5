import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
API_URL = 'http://localhost:3000/students';
  constructor(private http: HttpClient) {}
  
  // Get all students
  getAllStudents() {
    return this.http.get<any>(this.API_URL);
  }

  // Add a student
  addStudent(student:any){
    return this.http.post(this.API_URL, student)
  }

  // Delete a student by ID
  deleteStudent(id:any){
    return this.http.delete(`${this.API_URL}/${id}`)
  }

  // Select single student
  singleStudent(id:any){
    return this.http.get(`${this.API_URL}/${id}`);
  }

  // Update student
  updateStudent(id:any, student: any) {
    return this.http.put(`${this.API_URL}/${id}`, student);
  }
}


  
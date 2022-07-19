import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) {}
  
  getAllStudents() {
    return this.http.get<any>('http://localhost:8080/students');
  }
}

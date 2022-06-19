import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl:String='http://localhost:8080/Student-Server/student';

  constructor(private http:HttpClient) { }

  public getStudents( startIndex:number, endIndex:number):Observable<any>{
    return this.http.get<any>(this.baseUrl+"/"+"students?startIndex="+startIndex+"&lastIndex="+endIndex);
  }
}

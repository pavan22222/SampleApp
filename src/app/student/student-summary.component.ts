import { Component, OnInit } from '@angular/core';
import {StudentDTO} from 'src/app/dto/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-summary',
  templateUrl: './student-summary.component.html',
  styleUrls: ['./student-summary.component.css']
})
export class StudentSummaryComponent implements OnInit {

  students:Array<StudentDTO>=new Array<StudentDTO>();
  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.service.getStudents(1,3).subscribe(data=>{
      this.students=data;
    });
  }

}

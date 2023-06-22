import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { studmodel } from './stud.model';
import { Api1Service } from '../api1.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  studform!: FormGroup;
  data!: studmodel[];
  constructor(private formbuilder: FormBuilder, private api: Api1Service) { }

  ngOnInit(): void {
    this.studform = this.formbuilder.group({
      studname: ['', Validators.required],
      semester: ['', Validators.required],
      usn: ['', Validators.required],
    })
    this.getStud();
  }

  addstud(data: studmodel) {
    this.api.addStud(data).subscribe((res => {
      this.studform.reset();
    }))
    this.getStud();
  }

  getStud() {
    this.api.getStud().subscribe(((res) => {
      this.data = res;
    }))
  }
  // searchStud(event: any) {
  //   console.log(event.target.value);

  //   if (event.target.value) {
  //     this.api.searchStud(event.target.value).subscribe((res: studmodel[]) => {
  //       this.data = res;
  //     })
  //   } else {
  //     this.getStud();
  //   }

  // }
  searchStud(event: any) {
    console.log(event.target.value);

    if (event.target.value) {
      this.api.searchStud(event.target.value).subscribe(res => {
        this.data = res;
      })
    } else {
      this.getStud();
    }

  }

  deleteStud(id:number) {
    this.api.deleteStud(id).subscribe(res => {
      this.getStud();
    })
  }

}



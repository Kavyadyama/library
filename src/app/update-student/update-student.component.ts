import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
// import { Api1Service } from '../api.service';
import { studmodel } from '../student/stud.model';
import { Api1Service } from '../api1.service';
import { bookmodel } from '../books/model';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {
  public dataid!: number;
  public stud!: studmodel;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private api: Api1Service) {
  }
  ngOnInit(): void {
    
    this.activatedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      console.log("data id is", this.dataid)
    })
    this.api.fetchData(this.dataid).subscribe((data: studmodel) => {
      this.stud = data;
    })
}

  update() {
    this.api.updateStud(this.stud, this.dataid).subscribe((res: studmodel) => {
      this.router.navigate(["/student"])
    })
  }

}



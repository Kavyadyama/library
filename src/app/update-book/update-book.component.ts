import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { bookmodel } from '../books/model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent {
  public dataid!: number;
  public book!:bookmodel;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private api: ApiService) {

  }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");

    })
    this.api.fetchData(this.dataid).subscribe((data: bookmodel) => {
      this.book = data;
      console.log(this.book);
    })
  }
  update() {
    this.api.updateBook(this.book, this.dataid).subscribe((res: bookmodel) => {
      this.router.navigate(["/"])
    })
  }

}

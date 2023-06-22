import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { bookmodel } from '../books/model';

@Component({
  selector: 'app-searchbook',
  templateUrl: './searchbook.component.html',
  styleUrls: ['./searchbook.component.css']
})
export class SearchbookComponent implements OnInit{

  data!:bookmodel[];
  //  imgPath:string="../../assets/";

  constructor(private api:ApiService){}

  ngOnInit() {
    this.getBook();
    
  }
  getBook() {
    this.api.getBook().subscribe(res => {
      this.data = res;
    })
  }
  searchBook(event: any) {
    console.log(event.target.value);

    if (event.target.value) {
      this.api.searchBooks(event.target.value).subscribe(res => {
        this.data = res;
      })
    } else {
      this.getBook();
    }

  }
}


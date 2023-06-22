import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { bookmodel } from './model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public bookform!: FormGroup;
  public data!: bookmodel[];

  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.bookform = this.formbuilder.group({
      bookid:['',Validators.required],
      name: ['', Validators.required],
      author: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
    })
    this.getBook();
  }

  addBook(data: bookmodel) {
    console.log(data)
    this.api.addBook(data).subscribe((res => {
      this.bookform.reset();
    }))
    this.getBook();
  }

  getBook() {
    this.api.getBook().subscribe(res => {
      this.data = res;
    })
  }

  
  deleteBook(id: number) {
    this.api.deleteBook(id).subscribe(res => {
      this.getBook();
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
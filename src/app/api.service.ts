import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { bookmodel } from './books/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl:string="http://localhost:3000/books/";
  constructor(private http:HttpClient){ }

  //add book
addBook(data: bookmodel){
  return this.http.post<bookmodel>(this.baseurl,data)
}
//get book
getBook(){
  return this.http.get<bookmodel[]>(this.baseurl);
}
//delete
deleteBook(id:number){
  return this.http.delete<bookmodel>(this.baseurl+id);
}

//fetch book
fetchData(id:number){
  return this.http.get<bookmodel>(this.baseurl+'/'+id);
}

// update
updateBook(data:bookmodel,id:number){
return this.http.put<bookmodel>(this.baseurl+id,data);
}
searchBooks(name:string){
  return this.http.get<any>(`${this.baseurl}?name=${name}`);
}
}

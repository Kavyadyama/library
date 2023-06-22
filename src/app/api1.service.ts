import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { studmodel } from './student/stud.model';


@Injectable({
  providedIn: 'root'
})
export class Api1Service {
  baseurl:string="http://localhost:3000/students/";
  // searchstud: 

  constructor(private http:HttpClient){ }
  //add stud
addStud(data: studmodel){
  return this.http.post<studmodel>(this.baseurl,data)
}
//get stud
getStud(){
  return this.http.get<studmodel[]>(this.baseurl);
}
//delete
deleteStud(id:number){
  return this.http.delete<studmodel>(this.baseurl+id);
}

//fetch stud
fetchData(id:number){
  return this.http.get<studmodel>(this.baseurl+"/"+id);
}

// update
updateStud(data:studmodel,id:number){
return this.http.put<studmodel>(this.baseurl+id,data);
}
searchStud(name:string){
  return this.http.get<any>(`${this.baseurl}?name=${name}`);
}
}


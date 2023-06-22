import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { BooksComponent } from './books/books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { SearchbookComponent } from './searchbook/searchbook.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'student',component:StudentComponent},
  {path:'books',component:BooksComponent},
  {path:'update-book/:id',component:UpdateBookComponent},
  {path:'update-student/:id',component:UpdateStudentComponent},
  {path:'searchbook',component:SearchbookComponent},
  {path:'',redirectTo:'books',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

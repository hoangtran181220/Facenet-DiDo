import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './routes/content/content.component';
import { EducationComponent } from './routes/field-category/education/education.component';

const routes: Routes = [
  { path : '', component : ContentComponent},
  { path : 'product', component : EducationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

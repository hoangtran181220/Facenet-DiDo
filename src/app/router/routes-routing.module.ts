import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './field-category/education/education.component';
import { ContentComponent } from './content/content.component';
import { MedicalComponent } from './field-category/medical/medical.component';
import { TrafficComponent } from './field-category/traffic/traffic.component';
import { EvaluateComponent } from '../layout/evaluate/evaluate.component'
const routes: Routes = [
  { path : '', component : ContentComponent},
  { path : 'education', component : EducationComponent},
  { path : 'medical', component : MedicalComponent},
  { path : 'traffic', component : TrafficComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
export const routingComponents = [ContentComponent, EducationComponent, MedicalComponent, TrafficComponent, ]

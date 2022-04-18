import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './router/content/content.component';
import { FieldCategoryComponent } from './router/field-category/field-category.component';
import { EducationComponent } from './router/field-category/education/education.component';
import { MedicalComponent } from './router/field-category/medical/medical.component';
import { TrafficComponent } from './router/field-category/traffic/traffic.component';
import { ButtonLoginComponent } from './router/component/button-login/button-login.component';
import { ButtonRegisterComponent } from './router/component/button-register/button-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    FieldCategoryComponent,
    EducationComponent,
    MedicalComponent,
    TrafficComponent,
    ButtonLoginComponent,
    ButtonRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

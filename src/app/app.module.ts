import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './routes/content/content.component';
import { FieldCategoryComponent } from './routes/field-category/field-category.component';
import { EducationComponent } from './routes/field-category/education/education.component';
import { MedicalComponent } from './routes/field-category/medical/medical.component';
import { TrafficComponent } from './routes/field-category/traffic/traffic.component';
import { ButtonLoginComponent } from './routes/component/button-login/button-login.component';
import { ButtonRegisterComponent } from './routes/component/button-register/button-register.component';
import { ButtonStartComponent } from './routes/component/button-start/button-start.component';
import { FormRegisterComponent } from './routes/component/form-register/form-register.component';
import { FormInputComponent } from './routes/component/form-input/form-input.component';
import { CrudProductsComponent } from './admin/crud-products/crud-products.component';
import { GetProductsComponent } from './admin/crud-products/get-products/get-products.component';
import { CreateProductsComponent } from './admin/crud-products/create-products/create-products.component';

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
    ButtonRegisterComponent,
    ButtonStartComponent,
    FormRegisterComponent,
    FormInputComponent,
    CrudProductsComponent,
    GetProductsComponent,
    CreateProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

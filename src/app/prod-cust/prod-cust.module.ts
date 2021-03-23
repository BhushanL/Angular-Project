import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { ProductComponent } from "src/app/product/product.component";
import { CustomerComponent } from "src/app/customer/customer.component";
import { TechnologiesComponent } from '../technologies/technologies.component';
import { JavaComponent } from '../java/java.component';
import { TmpDrivenFormComponent } from '../tmp-driven-form/tmp-driven-form.component';
import { ModelDrivenComponent } from '../model-driven/model-driven.component';
import { CoreJavaComponent } from '../core-java/core-java.component';
import { AdvJavaComponent } from '../adv-java/adv-java.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';


const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: 'app-login', component: LoginComponent },
  { path: 'app-home', component: HomeComponent},
  //{ path: 'customer', component: CustomerComponent },
  //{ path: 'java', component: JavaComponent },
  {
    path: 'technologies', component: TechnologiesComponent,
    children: [
      {
        path: 'app-java', component: JavaComponent,
        children: [

          {
            path: 'app-core-java', component: CoreJavaComponent,
          },

           {
             path: 'app-adv-java', component: AdvJavaComponent,
          }


        ]


      },
      { path: 'customer', component: CustomerComponent },]
  
  },
  { path: 'TmpDrivenForm', component: TmpDrivenFormComponent },
  { path: 'ModelDriven', component: ModelDrivenComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ProdCustModule { }
export const routingComponents = [ProductComponent, CustomerComponent, TechnologiesComponent, JavaComponent, TmpDrivenFormComponent, ModelDrivenComponent, CoreJavaComponent, AdvJavaComponent, LoginComponent, HomeComponent]

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { TechRoutingModule } from './tech-routing/tech-routing.module';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { ProdCustModule } from './prod-cust/prod-cust.module';
import { SortPipe } from './sort.pipe';
import { BhushSearchPipe } from './bhush-search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TmpDrivenFormComponent } from './tmp-driven-form/tmp-driven-form.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CoreJavaComponent } from './core-java/core-java.component';
import { AdvJavaComponent } from './adv-java/adv-java.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { MycolorDirective } from './mycolor.directive';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//import { TranslateLoader, TranslateModule } from '@ngx-translate/core/public_api';
//import { TranslateHttpLoader } from '@ngx-translate/http-loader/lib/http-loader';





//const routes: Routes= [


 
//  { path:'', component: LoginComponent },
//  { path:'home', component: HomeComponent }
//]
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json')
}
@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    JavaComponent,
    ProductComponent,
    CustomerComponent,
    SortPipe,
    BhushSearchPipe,
    TmpDrivenFormComponent,
  
    ModelDrivenComponent,
  
    HeaderComponent,
  
    FooterComponent,
  
    TechnologiesComponent,
  
    CoreJavaComponent,
  
    AdvJavaComponent,
  
    LoginComponent,
  
    HomeComponent,
  
    ProfileComponent,
  
    MycolorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ProdCustModule,
    ReactiveFormsModule,
    TechRoutingModule,
    //RouterModule.forRoot(routes),

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

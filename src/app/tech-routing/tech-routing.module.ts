import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from "src/app/web/web.component";
import { JavaComponent } from "src/app/java/java.component";

const routes: Routes = [
  { path: 'web', component: WebComponent },
  { path: 'java', component: JavaComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent, JavaComponent]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';

const routes: Routes = [
  {
    path:'',
    component :PublicLayoutComponent,
    children :[
      {
        path:'',
        loadChildren :() => import('./modules/home/home.module').then(m => m.HomeModule),
        data : {preload:true}
      }
    ]  
  },
  {
    path:'admin',
    component :PublicLayoutComponent,
    children :[
      {
        path:'',
        loadChildren :() => import('./modules/admin/admin.module').then(m => m.AdminModule),
        data : {preload:true}
      }
    ]  
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

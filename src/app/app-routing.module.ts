import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeadminComponent } from './component/admin/homeadmin/homeadmin.component';
import { LayoutadminComponent } from './component/admin/layoutadmin/layoutadmin.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomestudentComponent } from './component/student/homestudent/homestudent.component';
import { LayoutstudentComponent } from './component/student/layoutstudent/layoutstudent.component';
import { StudentlistComponent } from './component/admin/studentlist/studentlist.component';
import { AddteacherComponent } from './component/admin/addteacher/addteacher.component';
import { AddcategorieComponent } from './component/admin/addcategorie/addcategorie.component';
import { CategorieComponent } from './component/admin/categorie/categorie.component';
import { CategorielistComponent } from './component/admin/categorielist/categorielist.component';
import { CategorieupdateComponent } from './component/admin/categorieupdate/categorieupdate.component';
import { HomeprofComponent } from './component/prof/homeprof/homeprof.component';
import { LayoutprofComponent } from './component/prof/layoutprof/layoutprof.component';
import { CoursesprofComponent } from './component/prof/coursesprof/coursesprof.component';
import { AddcoursComponent } from './component/prof/addcours/addcours.component';
import { AuthGuard } from './guards/auth.guard';
import { CoursstudentComponent } from './component/student/coursstudent/coursstudent.component';
import { CoursstudentdetailsComponent } from './component/student/coursstudentdetails/coursstudentdetails.component';
import { CoursproflistComponent } from './component/prof/coursproflist/coursproflist.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:HomeComponent,children:[
    
    {path:"",component:LayoutComponent},
    
    
  ]},

  {path:"homeadmin",canActivate: [AuthGuard],component:HomeadminComponent,children:[
    {path:"",component:LayoutadminComponent},
    {path:"liststudent",component:StudentlistComponent},
    {path:"addteacher",component:AddteacherComponent},
    {path:"categories",component:CategorieComponent,children:[
      {path:"addcategorie",component:AddcategorieComponent},
      {path:"listcategorie",component:CategorielistComponent},
      {path:"updatecategorie/:id",component:CategorieupdateComponent}
    ]}
  ]},

  {path:"homeuser",canActivate: [AuthGuard],component:HomestudentComponent,children:[
    {path:"",component:LayoutstudentComponent},
    {path:"coursstudent",component:CoursstudentComponent},
    {path:"coursdetails/:id",component:CoursstudentdetailsComponent}
  ]},

  {path:"hometeacher",canActivate: [AuthGuard],component:HomeprofComponent,children:[
    {path:"",component:LayoutprofComponent},
    {path:"coursesprof",component:CoursesprofComponent,children:[
      {path:"addcoursprof",component:AddcoursComponent},
      {path:"coursproflist",component:CoursproflistComponent}
      
    ]}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { LayoutComponent } from './component/layout/layout.component';
import { HomeadminComponent } from './component/admin/homeadmin/homeadmin.component';
import { LayoutadminComponent } from './component/admin/layoutadmin/layoutadmin.component';
import { FooteradminComponent } from './component/admin/footeradmin/footeradmin.component';
import { HeaderadminComponent } from './component/admin/headeradmin/headeradmin.component';
import { HomestudentComponent } from './component/student/homestudent/homestudent.component';
import { LayoutstudentComponent } from './component/student/layoutstudent/layoutstudent.component';
import { HeaderstudentComponent } from './component/student/headerstudent/headerstudent.component';
import { FooterstudentComponent } from './component/student/footerstudent/footerstudent.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentlistComponent } from './component/admin/studentlist/studentlist.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddteacherComponent } from './component/admin/addteacher/addteacher.component';
import { AddcategorieComponent } from './component/admin/addcategorie/addcategorie.component';
import { CategorieComponent } from './component/admin/categorie/categorie.component';
import { CategorielistComponent } from './component/admin/categorielist/categorielist.component';
import { HomeprofComponent } from './component/prof/homeprof/homeprof.component';
import { FooterprofComponent } from './component/prof/footerprof/footerprof.component';
import { HeaderprofComponent } from './component/prof/headerprof/headerprof.component';
import { LayoutprofComponent } from './component/prof/layoutprof/layoutprof.component';
import { CategorieupdateComponent } from './component/admin/categorieupdate/categorieupdate.component';
import { AddcoursComponent } from './component/prof/addcours/addcours.component';
import { CoursesprofComponent } from './component/prof/coursesprof/coursesprof.component';
import { CoursstudentComponent } from './component/student/coursstudent/coursstudent.component';
import { CoursstudentdetailsComponent } from './component/student/coursstudentdetails/coursstudentdetails.component';
import { RecherchePipe } from './pipe/recherche.pipe';
import { CoursproflistComponent } from './component/prof/coursproflist/coursproflist.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    HomeadminComponent,
    LayoutadminComponent,
    FooteradminComponent,
    HeaderadminComponent,
    HomestudentComponent,
    LayoutstudentComponent,
    HeaderstudentComponent,
    FooterstudentComponent,
    LoginComponent,
    RegisterComponent,
    StudentlistComponent,
    AddteacherComponent,
    AddcategorieComponent,
    CategorieComponent,
    CategorielistComponent,
    HomeprofComponent,
    FooterprofComponent,
    HeaderprofComponent,
    LayoutprofComponent,
    CategorieupdateComponent,
    AddcoursComponent,
    CoursesprofComponent,
    CoursstudentComponent,
    CoursstudentdetailsComponent,
    RecherchePipe,
    CoursproflistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

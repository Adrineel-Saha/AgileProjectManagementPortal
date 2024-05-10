import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ViewClientComponent } from './view-client/view-client.component';
// import { ViewProjectComponent } from './view-project/view-project.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { FormsModule } from '@angular/forms';
import { ProjectsComponent } from './update-project/update-project.component';
import { AddResourceComponent } from './add-resource/add-resource.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    // ViewClientComponent,
    // ViewProjectComponent,
    CreateProjectComponent,
    ProjectsComponent,
    AddResourceComponent,
    LoginComponent,
    LogoutComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

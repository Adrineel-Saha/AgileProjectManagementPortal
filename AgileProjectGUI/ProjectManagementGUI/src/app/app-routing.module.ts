import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ProjectsComponent } from './update-project/update-project.component';
// import { ViewClientComponent } from './view-client/view-client.component';
// import { ViewProjectComponent } from './view-project/view-project.component';
import { AddResourceComponent} from './add-resource/add-resource.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardProductOwnerService } from './service/auth-guardproductowner.service';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  //  {path: 'getClients', component: ViewClientComponent,canActivate:[AuthGuardProductOwnerService] },
  //  {path: 'getProjects', component: ViewProjectComponent,canActivate:[AuthGuardProductOwnerService] },
   {path: 'addProject', component: CreateProjectComponent,canActivate:[AuthGuardProductOwnerService] },
   {path: 'updateProject', component: ProjectsComponent,canActivate:[AuthGuardProductOwnerService] },
   {path: 'addResource', component: AddResourceComponent,canActivate:[AuthGuardProductOwnerService] },
   {path: 'login', component: LoginComponent},
   {path: 'logout', component: LogoutComponent },
   {path: 'navigation',component: NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

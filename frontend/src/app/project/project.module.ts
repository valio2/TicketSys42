import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialSharedModule } from '../shared/material-shared.module';
import { SharedModule } from '../shared/shared.module';
import { CreateProjectComponent } from './create-project/create-project.component';
import { ROUTES } from './project-routes';
import { ProjectService } from './project.service';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CompanyProjectsComponent } from './company-projects/company-projects.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialSharedModule,
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [CreateProjectComponent, ProjectDetailsComponent, CompanyProjectsComponent],
  providers: [ProjectService],

})
export class ProjectModule { }

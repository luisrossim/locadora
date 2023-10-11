import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArchiveManagementRoutingModule } from './archive-management-routing.module';
import { ArchiveManagementComponent } from './archive-management.component';
import { AtorComponent } from './ator/ator.component';
import { ClasseComponent } from './classe/classe.component';
import { DiretorComponent } from './diretor/diretor.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ArchiveManagementComponent,
    AtorComponent,
    ClasseComponent,
    DiretorComponent
  ],
  imports: [
    CommonModule,
    ArchiveManagementRoutingModule,
    SharedModule
  ]
})
export class ArchiveManagementModule { }

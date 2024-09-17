import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { provideHttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../../../../lib-workspace/dist/pipe-lib';


@NgModule({
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule, 
    FormsModule,
    PipeModule
  ],
  providers:[provideHttpClient(),UserService]
})
export class UsersModule { }

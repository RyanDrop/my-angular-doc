
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePage } from './home/home.page';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserPage } from './user/user.page';

@NgModule({
  declarations: [UserDetailComponent, UserPage, HomePage],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class UserModule {}

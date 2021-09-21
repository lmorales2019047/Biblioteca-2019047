import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminUserCreateComponent } from './components/admin-users/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './components/admin-users/admin-user-edit/admin-user-edit.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },{
    path: "admin/users",
    component: AdminUsersComponent
  },{
    path: "admin/users/create",
    component: AdminUserCreateComponent
  },{
    path: "admin/users/edit",
    component:AdminUserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBiblioCreateComponent } from './components/admin-biblio/admin-biblio-create/admin-biblio-create.component';
import { AdminCreateBookComponent } from './components/admin-biblio/admin-biblio-create/admin-create-book/admin-create-book.component';
import { AdminCreateMagaComponent } from './components/admin-biblio/admin-biblio-create/admin-create-maga/admin-create-maga.component';
import { AdminEditBookComponent } from './components/admin-biblio/admin-biblio-edit/admin-edit-book/admin-edit-book.component';
import { AdminEditMagaComponent } from './components/admin-biblio/admin-biblio-edit/admin-edit-maga/admin-edit-maga.component';
import { AdminBiblioComponent } from './components/admin-biblio/admin-biblio.component';
import { AdminUserCreateComponent } from './components/admin-users/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './components/admin-users/admin-user-edit/admin-user-edit.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { ClientAskBiblioComponent } from './components/client/client-ask-biblio/client-ask-biblio.component';
import { ClientHistoryComponent } from './components/client/client-history/client-history.component';
import { ClientReturnBiblioComponent } from './components/client/client-return-biblio/client-return-biblio.component';
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
  },{
    path: "admin/biblio",
    component:AdminBiblioComponent
  },{
    path: "admin/biblio/create",
    component: AdminBiblioCreateComponent
  },{
    path: "admin/biblio/create/book",
    component: AdminCreateBookComponent
  },{
    path: "admin/biblio/create/magazine",
    component: AdminCreateMagaComponent
  },{
    path: "admin/biblio/edit/book",
    component: AdminEditBookComponent
  },{
    path: "admin/biblio/edit/maga",
    component: AdminEditMagaComponent
  },{
    path: "search-biblio",
    component:  ClientAskBiblioComponent
  },{
    path: "history",
    component: ClientHistoryComponent
  },{
    path: "my-books",
    component: ClientReturnBiblioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

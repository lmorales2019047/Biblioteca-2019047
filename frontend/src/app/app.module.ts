import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminUserCreateComponent } from './components/admin-users/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './components/admin-users/admin-user-edit/admin-user-edit.component';
import { AdminBiblioComponent } from './components/admin-biblio/admin-biblio.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminUsersComponent,
    AdminUserCreateComponent,
    AdminUserEditComponent,
    AdminBiblioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminUserCreateComponent } from './components/admin-users/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './components/admin-users/admin-user-edit/admin-user-edit.component';
import { AdminBiblioComponent } from './components/admin-biblio/admin-biblio.component';
import { AdminBiblioCreateComponent } from './components/admin-biblio/admin-biblio-create/admin-biblio-create.component';
import { AdminCreateBookComponent } from './components/admin-biblio/admin-biblio-create/admin-create-book/admin-create-book.component';
import { AdminCreateMagaComponent } from './components/admin-biblio/admin-biblio-create/admin-create-maga/admin-create-maga.component';
import { AdminEditBookComponent } from './components/admin-biblio/admin-biblio-edit/admin-edit-book/admin-edit-book.component';
import { AdminEditMagaComponent } from './components/admin-biblio/admin-biblio-edit/admin-edit-maga/admin-edit-maga.component';
import { ClientAskBiblioComponent } from './components/client/client-ask-biblio/client-ask-biblio.component';
import { ClientReturnBiblioComponent } from './components/client/client-return-biblio/client-return-biblio.component';
import { ClientHistoryComponent } from './components/client/client-history/client-history.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminUsersComponent,
    AdminUserCreateComponent,
    AdminUserEditComponent,
    AdminBiblioComponent,
    AdminBiblioCreateComponent,
    AdminCreateBookComponent,
    AdminCreateMagaComponent,
    AdminEditBookComponent,
    AdminEditMagaComponent,
    ClientAskBiblioComponent,
    ClientReturnBiblioComponent,
    ClientHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

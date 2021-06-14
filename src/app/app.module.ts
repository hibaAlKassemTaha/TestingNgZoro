import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { NzButtonModule }   from 'ng-zorro-antd/button';
import { NzFormModule }   from 'ng-zorro-antd/form';
import { NzCardModule }   from 'ng-zorro-antd/card';
import { NzTableModule }   from 'ng-zorro-antd/table';
import { NzDividerModule}   from 'ng-zorro-antd/divider';
import { NzDrawerModule}   from 'ng-zorro-antd/drawer';
import { NzDescriptionsModule}   from 'ng-zorro-antd/descriptions';
import { NzModalModule}   from 'ng-zorro-antd/modal';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersListComponent } from './users-list/users-list.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzButtonModule,
    NzFormModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzCardModule,
    NzTableModule,
    NzDividerModule,
    NzDrawerModule,
    NzDescriptionsModule,
    NzModalModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

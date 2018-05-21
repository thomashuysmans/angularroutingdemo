import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ProductsComponent } from './products/products.component';
import { BooksComponent } from './products/books.component';
import { ComputersComponent } from './products/computers.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth-service.service';

import { LoggedInGuard } from './guards/loggedIn.guard';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: [
    { path: 'books/:id', component: BooksComponent },
    { path: 'computers', component: ComputersComponent },
  ]},
  { path: 'admin', component: AdminComponent, canActivate: [LoggedInGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    BooksComponent,
    ComputersComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoggedInGuard,
    {
      provide: AuthService, useClass: AuthService,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

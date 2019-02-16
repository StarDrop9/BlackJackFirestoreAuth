import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard';
import { UserLoginComponent } from './ui/user-login/user-login.component';
import { HomePageComponent } from './ui/home-page/home-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { UploadPageComponent } from './uploads/upload-page/upload-page.component';
import { DndlistsComponent } from './dndlists/dndlists.component';
import { BlackjackComponent } from './blackjack/blackjack.component';


import { SsrPageComponent } from './ui/ssr-page/ssr-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'uploads',  component: UploadPageComponent,  canActivate: [AuthGuard] },
  { path: 'd&drop',  component: DndlistsComponent,  canActivate: [AuthGuard] },
  { path: 'ssr', component: SsrPageComponent },
  { path: 'blackjack', component: BlackjackComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberListComponent } from './memberList/memberList.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoute: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent, canActivate: [AuthGuard] },
      { path: 'members', component: MemberListComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

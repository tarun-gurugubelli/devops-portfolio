import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'modules',
    loadComponent: () => import('./pages/modules/modules.component').then(m => m.ModulesComponent),
  },
  {
    path: 'questions',
    loadComponent: () => import('./pages/questions/questions.component').then(m => m.QuestionsComponent),
  },
  {
    path: 'installations',
    loadComponent: () => import('./pages/installations/installations.component').then(m => m.InstallationsComponent),
  },
  {
    path: 'cheatsheets',
    loadComponent: () => import('./pages/cheatsheets/cheatsheets.component').then(m => m.CheatsheetsComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];

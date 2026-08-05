import { Routes } from '@angular/router';
import { Login } from './components/pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Login
  }
];


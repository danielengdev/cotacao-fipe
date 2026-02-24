import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'cotacao', pathMatch: 'full'},
    {path: 'cotacao', loadComponent: () => import('./components/cotacao/cotacao').then(m => m.Cotacao)}
];

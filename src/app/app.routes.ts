import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'principal',
    pathMatch: 'full'
  },
  {
    path: 'principal',
    loadComponent: () =>
      import('./page/pagina-principal/pagina-principal')
        .then((m) => m.PaginaPrincipal),
  },
  {
    path: 'comic-on',
    loadComponent: () =>
      import('./page/comic-on/comic-on')
        .then((m) => m.ComicOn),
  },
  {
    path: 'funko-pop',
    loadComponent: () =>
      import('./page/funko-pop/funko-pop')
        .then((m) => m.FunkoPop),
  },
  {
  path: '**',
  redirectTo: 'principal'
}
];

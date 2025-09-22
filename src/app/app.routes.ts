import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./folder/folder.page').then((m) => m.FolderPage)
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then((m) => m.SolutionsComponent)
  },
  {
    path: 'solutions/:id',
    loadComponent: () => import('./pages/solution-details/solution-details.component').then((m) => m.SolutionDetailsComponent)
  },
  {
    path: 'innovation',
    loadComponent: () => import('./pages/innovation/innovation.component').then((m) => m.InnovationComponent)
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.component').then((m) => m.ContactsComponent)
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
];

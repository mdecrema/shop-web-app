import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./folder/folder.page').then((m) => m.FolderPage),
    data: {
      title: 'Loli Solutions' 
    }
  },
  {
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then((m) => m.SolutionsComponent),
    data: {
      title: 'Loli Solutions | Solutions' 
    }
  },
  {
    path: 'solutions/:id',
    loadComponent: () => import('./pages/solution-details/solution-details.component').then((m) => m.SolutionDetailsComponent)
  },
  {
    path: 'innovation',
    loadComponent: () => import('./pages/innovation/innovation.component').then((m) => m.InnovationComponent),
    data: {
      title: 'Loli Solutions | Innovation' 
    }
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us.component').then((m) => m.AboutUsComponent)
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

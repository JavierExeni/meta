import { Routes } from '@angular/router';
import { propertyAgentResolver, propertyResolver, propertyUserResolver } from './property.resolver';

export const routes: Routes = [
  {
    path: 'propiedades',
    loadComponent: () =>
      import('./pages/list-property/list-property.component').then(
        (c) => c.ListPropertyComponent
      ),
  },
  {
    path: 'propiedades/:id/:userId/:agentId',
    loadComponent: () =>
      import('./pages/detail-property/detail-property.component').then(
        (c) => c.DetailPropertyComponent
      ),
    resolve: {
      property: propertyResolver,
      user: propertyUserResolver,
      agent: propertyAgentResolver,
    },
  },
  {
    path: '',
    redirectTo: 'propiedades',
    pathMatch: 'full',
  },
];

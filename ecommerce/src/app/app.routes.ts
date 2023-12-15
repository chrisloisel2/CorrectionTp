import { Routes } from '@angular/router';
import { PageProduitComponent } from './Component/page-produit/page-produit.component';
import { Page2Component } from './Component/page2/page2.component';

export const routes: Routes = [
  { path: 'page1', component: PageProduitComponent },
  { path: 'page2', component: Page2Component },
];

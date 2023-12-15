import { Component } from '@angular/core';
import { DataProviderService } from '../../Services/data-provider.service';
import { SiderComponent } from '../sider/sider.component';
import { ProduitComponent } from '../produit/produit.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-produit',
  standalone: true,
  imports: [SiderComponent, ProduitComponent, CommonModule],
  templateUrl: './page-produit.component.html',
  styleUrl: './page-produit.component.css',
})
export class PageProduitComponent {
  filtre = this.data.filtre;
  constructor(public data: DataProviderService) {}
}

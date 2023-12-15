import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from '../produit/produit.component';
import { DataProviderService } from '../../Services/data-provider.service';
import { SiderComponent } from '../sider/sider.component';

@Component({
  selector: 'app-page-produit',
  standalone: true,
  imports: [ProduitComponent, SiderComponent, CommonModule],
  templateUrl: './page-produit.component.html',
  styleUrl: './page-produit.component.css',
})
export class PageProduitComponent {
  filtre = this.data.filtre;
  constructor(public data: DataProviderService) {}
}

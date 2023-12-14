import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../../Models/Produit.model';
import { ProduitComponent } from '../produit/produit.component';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  lst: Produit[] = this.data.lst;

  constructor(private data: DataProviderService) {}
}

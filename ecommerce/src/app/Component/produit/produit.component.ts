import { Component, Input } from '@angular/core';
import { Produit } from '../../Models/Produit.model';
import { CommonModule } from '@angular/common';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css',
})
export class ProduitComponent {
  constructor(public data: DataProviderService) {}

  @Input()
  produit!: Produit;
}

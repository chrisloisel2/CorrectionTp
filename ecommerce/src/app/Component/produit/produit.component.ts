import { Component, Input } from '@angular/core';
import { Produit } from '../../Models/Produit.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css',
})
export class ProduitComponent {
  @Input()
  produit!: Produit;
}

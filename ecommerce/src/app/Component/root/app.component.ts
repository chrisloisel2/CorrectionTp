import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../../Models/Produit.model';
import { ProduitComponent } from '../produit/produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  lst: Produit[] = [
    {
      id: 1,
      nom: 'Télévision',
      description: 'Une télévision',
      prix: 100,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      nom: 'Ordinateur',
      description: 'Un ordinateur',
      prix: 200,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      nom: 'Téléphone',
      description: 'Un téléphone',
      prix: 300,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      nom: 'Tablette',
      description: 'Une tablette',
      prix: 400,
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      nom: 'Montre',
      description: 'Une montre',
      prix: 500,
      image: 'https://picsum.photos/200/300',
    },
  ];
}

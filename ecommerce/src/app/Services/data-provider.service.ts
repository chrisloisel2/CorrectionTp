import { Injectable } from '@angular/core';
import { Produit } from '../Models/Produit.model';
import { Categorie } from '../Models/Categorie';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor() {}

  lst: Produit[] = [
    {
      id: 1,
      nom: 'Télévision',
      description: 'Une télévision',
      prix: 100,
      image: 'https://picsum.photos/200/300',
      categorie: Categorie.Informatique,
    },
    {
      id: 2,
      nom: 'Ordinateur',
      description: 'Un ordinateur',
      prix: 200,
      image: 'https://picsum.photos/200/300',
      categorie: Categorie.Informatique,
    },
    {
      id: 3,
      nom: 'Téléphone',
      description: 'Un téléphone',
      prix: 300,
      image: 'https://picsum.photos/200/300',
      categorie: Categorie.Informatique,
    },
    {
      id: 4,
      nom: 'Tablette',
      description: 'Une tablette',
      prix: 400,
      image: 'https://picsum.photos/200/300',
      categorie: Categorie.Informatique,
    },
    {
      id: 5,
      nom: 'Montre',
      description: 'Une montre',
      prix: 500,
      image: 'https://picsum.photos/200/300',
      categorie: Categorie.Autre,
    },
    {
      id: 6,
      nom: 'Harry potter',
      description: 'un joli livre',
      prix: 500,
      image: 'https://picsum.photos/200/300',
      categorie: Categorie.Livre,
    },
    {
      id: 7,
      nom: 'Pull rouge',
      description: 'Pull de noel',
      prix: 500,
      image: 'https://picsum.photos/200/300',
      categorie: Categorie.Vetement,
    },
  ];

  lstfiltre: Produit[] = this.lst;

  filtre(categorie: string) {
    this.lstfiltre = this.lst.filter((p) => p.categorie == categorie);
  }

  name: string = 'Christopher';
}

import { Categorie } from './Categorie';
// Produit est une interface car on ne veut pas instancier de Produit
// On veut juste définir la structure d'un produit
// on l'exporte pour pouvoir l'utiliser dans d'autres fichiers

export interface Produit {
  id: number;
  nom: string;
  description: string;
  prix: number;
  image: string;
  categorie: Categorie;
}

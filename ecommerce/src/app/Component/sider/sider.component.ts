import { Component } from '@angular/core';
import { Categorie } from '../../Models/Categorie';
import { CommonModule } from '@angular/common';
import { DataProviderService } from '../../Services/data-provider.service';

@Component({
  selector: 'app-sider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sider.component.html',
  styleUrl: './sider.component.css',
})
export class SiderComponent {
  constructor(private data: DataProviderService) {}

  categorie: string[] = [
    Categorie.Informatique,
    Categorie.Livre,
    Categorie.Autre,
    Categorie.Vetement,
    Categorie.Loisir,
    Categorie.Sport,
  ];

  onClick(categorie: string) {
    console.log(categorie);
    this.data.filtre(categorie);
  }
}

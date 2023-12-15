import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produit } from '../../Models/Produit.model';
import { ProduitComponent } from '../produit/produit.component';
import { DataProviderService } from '../../Services/data-provider.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SiderComponent } from '../sider/sider.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ProduitComponent,
    FooterComponent,
    HeaderComponent,
    SiderComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //   lst: Produit[] = this.data.lst;
}

import { Component } from '@angular/core';
import { OrderService } from '../../Service/order.service';
import { State } from '../../Model/State.enum';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  constructor(private order: OrderService) {}

  filtrerParState(state: string) {
    switch (state) {
      case 'en cours':
        this.order.filterByState(State.enCours);
        break;
      case 'annulé':
        this.order.filterByState(State.annule);
        break;
      case 'terminé':
        this.order.filterByState(State.termine);
        break;
    }
  }

  ordonnerParPrixCroissant() {
    this.order.ordonnerParprixCroissant();
  }

  ordonnerParPrixDecroissant() {
    this.order.ordonnerParprixDecroissant();
  }
}

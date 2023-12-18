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

  filtreOption() {
    this.order.filterByState(State.enCours);
  }

  filtreAnnule() {
    this.order.filterByState(State.annule);
  }

  filtreTermine() {
    this.order.filterByState(State.termine);
  }

  ordonnerParPrixCroissant() {
    this.order.ordonnerParprixCroissant();
  }

  ordonnerParPrixDecroissant() {
    this.order.ordonnerParprixDecroissant();
  }
}

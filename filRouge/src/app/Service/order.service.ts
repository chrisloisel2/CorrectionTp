import { Injectable } from '@angular/core';
import { Order } from '../Model/Order.model';
import { State } from '../Model/State.enum';
// type de prestation, prestataire, nb de jour, total ht, total ttc, state

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  order: Order[] = [
    {
      type: 'Type 1',
      length: 1,
      HtPrice: 100,
      TTCPrice: 120,
      state: State.enCours,
    },
    {
      type: 'Type 2',
      length: 2,
      HtPrice: 200,
      TTCPrice: 240,
      state: State.enCours,
    },
    {
      type: 'Type 3',
      length: 3,
      HtPrice: 300,
      TTCPrice: 360,
      state: State.enCours,
    },
    {
      type: 'Type 4',
      length: 4,
      HtPrice: 400,
      TTCPrice: 480,
      state: State.enCours,
    },
    {
      type: 'Type 5',
      length: 5,
      HtPrice: 500,
      TTCPrice: 600,
      state: State.annule,
    },
    {
      type: 'Type 6',
      length: 6,
      HtPrice: 600,
      TTCPrice: 720,
      state: State.annule,
    },
    {
      type: 'Type 7',
      length: 7,
      HtPrice: 700,
      TTCPrice: 840,
      state: State.termine,
    },
    {
      type: 'Type 8',
      length: 8,
      HtPrice: 800,
      TTCPrice: 960,
      state: State.termine,
    },
    {
      type: 'Type 9',
      length: 9,
      HtPrice: 900,
      TTCPrice: 1080,
      state: State.termine,
    },
    {
      type: 'Type 10',
      length: 10,
      HtPrice: 1000,
      TTCPrice: 1200,
      state: State.termine,
    },
  ];

  orderTrie: Order[] = this.order;

  filterByState(state: State) {
    this.orderTrie = this.order.filter((order) => order.state == state);
  }

  constructor() {}
}

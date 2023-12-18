import { Injectable } from '@angular/core';
import { Order } from '../Model/Order.model';
import { State } from '../Model/State.enum';
import { HttpClient } from '@angular/common/http';
import { FetcherService } from './fetcher.service';
// type de prestation, prestataire, nb de jour, total ht, total ttc, state

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: FetcherService) {
    this.chargeOrders();
  }

  chargeOrders() {
    this.http.getOrders().subscribe((data: Order[]) => {
      this.order = data;
      this.orderTrie = this.order;
    });
  }

  order: Order[] = [];

  orderTrie: Order[] = this.order;

  filterByState(state: State) {
    this.orderTrie = this.order.filter((order) => order.state == state);
  }

  ordonnerParprixCroissant() {
    this.orderTrie = this.orderTrie.sort((a, b) => a.HtPrice - b.HtPrice);
  }

  ordonnerParprixDecroissant() {
    this.orderTrie = this.orderTrie.sort((a, b) => b.HtPrice - a.HtPrice);
  }
}

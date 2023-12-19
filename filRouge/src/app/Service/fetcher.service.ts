import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Model/Order.model';

@Injectable({
  providedIn: 'root',
})
export class FetcherService {
  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get<Order[]>('http://82.165.127.44/api/orders');
  }

  getOrder(id: number) {
    return this.http.get<Order>('http://82.165.127.44/api/order/' + id);
  }

  postOrder(order: Order) {
    return this.http.post('http://82.165.127.44/api/order', order);
  }

  deleteOrder(id: number) {
    return this.http.delete('http://82.165.127.44/api/order/' + id);
  }

  updateOrder(order: Order) {
    return this.http.put('http://82.165.127.44/api/order/' + order.id, order);
  }
}

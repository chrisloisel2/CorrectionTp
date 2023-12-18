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
}

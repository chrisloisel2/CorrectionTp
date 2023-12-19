import { Component } from '@angular/core';
import { OrderService } from '../../Service/order.service';
import { CommonModule } from '@angular/common';
import { FetcherService } from '../../Service/fetcher.service';
import { FormsModule } from '@angular/forms';
import { AddOrderComponent } from '../add-order/add-order.component';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, FormsModule, AddOrderComponent],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class OrderListComponent {
  constructor(public order: OrderService) {}

  modification: boolean = false;

  suppOrder(id: number) {
    this.order.deleteOrder(id).subscribe(() => {
      this.order.chargeOrders();
    });
  }
}

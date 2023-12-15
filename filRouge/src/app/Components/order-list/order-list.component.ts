import { Component } from '@angular/core';
import { OrderService } from '../../Service/order.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class OrderListComponent {
  constructor(private order: OrderService) {}
}

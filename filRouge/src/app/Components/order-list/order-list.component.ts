import { Component } from '@angular/core';
import { OrderService } from '../../Service/order.service';
import { CommonModule } from '@angular/common';
import { FetcherService } from '../../Service/fetcher.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css',
})
export class OrderListComponent {
  constructor(public order: OrderService) {}
}

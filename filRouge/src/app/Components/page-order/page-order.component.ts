import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { OrderListComponent } from '../order-list/order-list.component';

@Component({
  selector: 'app-page-order',
  standalone: true,
  imports: [FilterComponent, OrderListComponent],
  templateUrl: './page-order.component.html',
  styleUrl: './page-order.component.css',
})
export class PageOrderComponent {}

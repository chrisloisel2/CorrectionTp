import { Component } from '@angular/core';
import { OrderService } from '../../Service/order.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  constructor(private order: OrderService) {}
}

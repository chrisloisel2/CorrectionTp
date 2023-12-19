import { Component } from '@angular/core';
import { Order } from '../../Model/Order.model';
import { FormsModule } from '@angular/forms';
import { State } from '../../Model/State.enum';
import { OrderService } from '../../Service/order.service';

@Component({
  selector: 'app-add-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-order.component.html',
  styleUrl: './add-order.component.css',
})
export class AddOrderComponent {
  constructor(private order: OrderService) {}

  inputOrder: Order = {
    id: 0,
    type: '',
    length: 0,
    HtPrice: 0,
    TTCPrice: 0,
    state: State.termine,
  };

  addOrder() {
    console.log(this.inputOrder);
    this.order.postOrder(this.inputOrder).subscribe((rep) => console.log(rep));
  }
}

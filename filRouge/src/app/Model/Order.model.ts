import { State } from './State.enum';

export interface Order {
  id: number;
  type: string;
  length: number;
  HtPrice: number;
  TTCPrice: number;
  state: State;
}

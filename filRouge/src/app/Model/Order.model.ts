import { State } from './State.enum';

export interface Order {
  type: string;
  length: number;
  HtPrice: number;
  TTCPrice: number;
  state: State;
}

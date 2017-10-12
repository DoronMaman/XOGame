/**
 * Created by doron on 9/3/2017.
 */
import {CellState} from '../enums/enums';

export class CellModel {
  public state: CellState;
  public highlight: boolean;

  constructor() {
    this.state = CellState.Clear;
  }
}

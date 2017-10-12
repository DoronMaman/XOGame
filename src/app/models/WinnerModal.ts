/**
 * Created by doron on 9/3/2017.
 */
import {CellState} from '../enums/enums';

export class WinnerModel {
  constructor(
    public readonly winningStrike: [number, number][],
    public readonly winnerIdentity: CellState) {
  }
}

/**
 * Created by doron on 9/3/2017.
 */
export enum CellState {
  X,
  O,
  Clear
}

export namespace CellState {
  export function getRivalState(cellState: CellState): CellState {
    if (cellState === CellState.Clear) {
      throw new Error('There is no rival state for a clear state.');
    }

    return cellState === CellState.X ? CellState.O : CellState.X;
  }
}

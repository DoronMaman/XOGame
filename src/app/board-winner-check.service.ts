/**
 * Created by doron on 9/3/2017.
 */
import { Injectable } from '@angular/core';
import {WinnerModel} from './models/WinnerModal';
import {CellState} from './enums/enums';
import {CellModel} from './models/CellModels';
import {isNull} from 'util';

@Injectable()
export class BoardWinnerCheckService {

  constructor() { }

  public checkForWinner(board: CellModel[][]): WinnerModel {
    const mainDiagonal = this.checkMainDiagonal(board);
    if (!isNull(mainDiagonal)) {
      return mainDiagonal;
    }

    const secondaryDiagonal = this.checkSecondaryDiagonal(board);
    if (!isNull(secondaryDiagonal)) {
      return secondaryDiagonal;
    }

    const rows = this.checkRows(board);
    if (!isNull(rows)) {
      return rows;
    }

    const columns = this.checkColumns(board);
    if (!isNull(columns)) {
      return columns;
    }

    return null;
  }

  private checkMainDiagonal(board: CellModel[][]): WinnerModel {
    const winningStrike: [number, number][] = [];
    const state = board[0][0].state;

    if (state === CellState.Clear) {
      return null;
    }

    winningStrike.push([0, 0]);

    for (let i = 1; i < board.length; i++) {
      if (board[i][i].state !== state) {
        return null;
      }
      winningStrike.push([i, i]);
    }


    return new WinnerModel(winningStrike, state);
  }

  private checkSecondaryDiagonal(board: CellModel[][]): WinnerModel {
    const winningStrike: [number, number][] = [];
    const state = board[board.length - 1][0].state;

    if (state === CellState.Clear) {
      return null;
    }


let j=0;
    for (let i = board.length - 1; i >= 0; i--) {
        if (board[i][j].state !== state) {
          return null;
        }
        winningStrike.push([i, j]);
        j++;

    }

    return new WinnerModel(winningStrike, state);
  }

  private checkRows(board: CellModel[][]): WinnerModel {
    let winningStrike: [number, number][] = [];
    let state: CellState;

    for (let i = 0; i < board.length; i++) {
      winningStrike = [];
      state = board[i][0].state;

      if (state === CellState.Clear) {
        continue;
      }

      for (let j = 0; j < board.length; j++) {
        if (board[i][j].state !== state) {
          break;
        }
        winningStrike.push([i, j]);
      }
      if (winningStrike.length === board.length) {
        return new WinnerModel(winningStrike, state);
      }
    }

    return null;
  }

  private checkColumns(board: CellModel[][]): WinnerModel {
    let winningStrike: [number, number][] = [];
    let state: CellState;

    for (let j = 0; j < board.length; j++) {
      winningStrike = [];
      state = board[0][j].state;

      if (state === CellState.Clear) {
        continue;
      }

      for (let i = 0; i < board.length; i++) {
        if (board[i][j].state !== state) {
          break;
        }
        winningStrike.push([i, j]);
      }
      if (winningStrike.length === board.length) {
        return new WinnerModel(winningStrike, state);
      }
    }

    return null;
  }
}

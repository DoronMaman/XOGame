import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CellModel} from '../models/CellModels';
import {CellState} from '../enums/enums';
import {BoardWinnerCheckService} from '../board-winner-check.service';
import {isNull} from 'util';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() boardSize: number;
  @Input() booleanWin: boolean;
  @Input() restartObservable: Observable<boolean>;

  @Output() errorMessage: EventEmitter<string> = new EventEmitter();
  @Output() winningMessage: EventEmitter<string> = new EventEmitter();

  public board: CellModel[][];
  public currentPlayer: CellState;

  constructor(
    private boardWinnerCheckService: BoardWinnerCheckService
  ) { }

  ngOnInit() {
    // todo pass as input if you like
    this.currentPlayer = CellState.X;
    this.resetBoard();
    this.restartObservable.subscribe(() => {
      this.resetBoard();
    })
  }

  cellClickedHandler(cellIndex: [number, number]) {
    if(this.booleanWin===true){
      return;
    }
    const cell = this.board[cellIndex[0]][cellIndex[1]];
    if (cell.state !== CellState.Clear) {
      this.errorMessage.emit('This cell is already occupied');
      return;
    }

    cell.state = this.currentPlayer;
    this.currentPlayer = CellState.getRivalState(cell.state);

    const winner = this.boardWinnerCheckService.checkForWinner(this.board);
    if (!isNull(winner)) {
      this.booleanWin=true;
      if(winner.winnerIdentity===0)
      {
        this.winningMessage.emit('Winner is X');
      }
      else {
        this.winningMessage.emit('Winner is O');
      }

      winner.winningStrike.forEach((winnigCellIndex: [number,number])=> {
        this.board[winnigCellIndex[0]][winnigCellIndex[1]].highlight = true;
      });
      return;
    }
  }

  private resetBoard() {
    this.booleanWin=false;
    this.board = [];
    for (let i = 0; i < this.boardSize; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.boardSize; j++) {
        const cell = new CellModel();
        cell.state = CellState.Clear;
        this.board[i].push(cell);
      }
    }
  }

}

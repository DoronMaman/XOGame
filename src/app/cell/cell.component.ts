import {Component, Input, OnInit} from '@angular/core';
import {CellState} from '../enums/enums';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class CellComponent implements OnInit {

  @Input() state: CellState;
  @Input() highlight: boolean;

  public cellStateType = CellState;

  constructor() { }

  ngOnInit() {
  }
}

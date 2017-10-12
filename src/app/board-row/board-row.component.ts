import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CellModel} from '../models/CellModels';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.css']
})
export class BoardRowComponent implements OnInit {

  @Input() row: CellModel[];
  @Input() rowIndex: number;

  @Output() cellClicked: EventEmitter<[number, number]> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cellClickedHandler(columnIndex: number) {
    this.cellClicked.emit([this.rowIndex, columnIndex]);
  }

}

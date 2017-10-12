import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA,MdDialog} from '@angular/material';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  constructor(@Inject(MD_DIALOG_DATA) public data: any,public refDialog:MdDialog) {}

  ngOnInit() {
  }
closeClick(){
    this.refDialog.closeAll();
}
}

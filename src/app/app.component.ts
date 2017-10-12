import {Component, Inject} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {MdDialog, MD_DIALOG_DATA} from '@angular/material';
import {MessageDialogComponent} from './message-dialog/message-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public boardSize = 3;
  public resetSubject: Subject<boolean> = new Subject();

  constructor(
    private dialog: MdDialog
  ) { }

  public handleMessage(message) {
    // alert(message);
    this.openDialog(message);
  }

  resetClick() {
    this.resetSubject.next(true);
  }
  private openDialog(message: string) {
    this.dialog.open(MessageDialogComponent, {
      data: {
        message: message
      }
    });
  }
}


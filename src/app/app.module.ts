import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { BoardRowComponent } from './board-row/board-row.component';
import { CellComponent } from './cell/cell.component';
import {BoardWinnerCheckService}from './board-winner-check.service';
/*import {MdDialogModule} from '@angular/material';*/
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import {AngularMaterialModule} from './angular-material/angular-material.module';



@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    BoardRowComponent,
    CellComponent,
    MessageDialogComponent



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule


  ],
  providers: [BoardWinnerCheckService],
  bootstrap: [AppComponent],
  entryComponents: [MessageDialogComponent]
})
export class AppModule { }

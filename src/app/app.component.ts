import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public dialog: MatDialog) {
  }

  async open(): Promise<void> {
    const { MyDialogComponent } = await import('./my-dialog/my-dialog.component');
    this.dialog.open(MyDialogComponent);
  }

}

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from './notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {
  displayingExpiringSessionModal = false;
  constructor(private snackBar: MatSnackBar) { }

  showNotification(displayMessage: string, buttonText: string, messageType: 'danger' | 'success' |'info'|'warning') {
    this.snackBar.openFromComponent(NotifierComponent, {
      data: {
        message: displayMessage,
        buttonText: buttonText,
        type: messageType
      },
      /*duration: 5000,*/
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [messageType]
    });
  }
}

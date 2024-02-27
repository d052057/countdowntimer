import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountdownComponent} from './countdown/countdown.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { ActivityService } from './activity/activity.service';
import { NotifierService} from './notifier/notifier.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'countdowntimer';
  data: any;
  constructor( 
    private _dialog: MatDialog,
    private activityService: ActivityService,
    private notifierService: NotifierService
    ) {
  }
  ngOnInit(): void {
    this.refreshUser();
  }
  @HostListener('window:keydown')
  @HostListener('window:mousedown')
  checkUserActivity() {
    // this.accountService.user$.pipe(take(1)).subscribe({
    //   next: (user: User | null) => {
    //     if (user) {
    //       clearTimeout(this.accountService.timeoutId);
    //       this.accountService.checkUserIdleTimout();
    //     }
    //   }
    // }
    // )
  }
  private refreshUser() {
    // const jwt = this.accountService.getJWT();
    // if (jwt) {
    //   this.accountService.refreshUser(jwt).subscribe({
    //     next: _ => {},
    //     error: error => {
    //       this.accountService.logout();

    //       if (error.status === 401) {
    //         this.sharedService.showNotification(false, 'Account blocked', error.error);
    //       }
    //     }
    //   })
    // } else {
    //   this.accountService.refreshUser(null).subscribe();
    // }
  }
  openCountDown( data: any) {
    data  = '';
    const dialogRef = this._dialog.open(CountdownComponent, {
      data, width: '25%', height: '25%'
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          alert("true");
        } else 
        {
          alert("false");
        }
      },
    });
  }
}

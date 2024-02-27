import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  checkUserIdleTimout() {
    // this.user$.pipe(take(1)).subscribe({
    //   next: (user: User | null) => {
    //     // the user is logged in
    //     if (user) {
    //       // if not currently dipsplaying expiring session modal
    //       if (!this.sharedService.displayingExpiringSessionModal) {
    //         this.timeoutId = setTimeout(() => {
    //           this.sharedService.displayingExpiringSessionModal = true;
    //           this.sharedService.openExpiringSessionCountdown();
    //           // in 10 minutes of user incativity
    //         }, 10 * 60 * 1000);
    //       }
    //     }
    //   }
    // })
  }

}

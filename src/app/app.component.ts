import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-routing-navigation';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const obsTest$ = new Observable((observer) => {
      observer.next('Return from observable 1');
      observer.next('Return from observable 2');
      setTimeout(() => {
        observer.next('Return from observable setTime');
      }, 2000);
      observer.next('Return from observable 3');
    }).subscribe((value) => {
      console.log(value);
    });

    //obsTest$.unsubscribe();

    const obsTest = function () {
      return 'printed from function';
    };
    const returnData = obsTest();
    console.log(returnData);
  }

  onSubmit() {
    //this.router.navigate(['/post']);
    //this.router.navigate(['/post', 1, 'postTitle']);
    this.router.navigate(['/posts'], {
      queryParams: { page: 1, order: 'newest' },
    });
  }
}

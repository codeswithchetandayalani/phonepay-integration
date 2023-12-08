import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css'],
})
export class PaymentsuccessComponent {
  transactionId: any;
  constructor(private route: ActivatedRoute) {}
  // we are using an if condition to check if the id there or not exists in the route url
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const transactionId = params['transactionId'];
      if (transactionId) {
        // Handle the case when the parameter is present
        // You can fetch data or perform actions based on the transactionId
        this.transactionId = params['transactionId'];
        console.log('Transaction ID:', transactionId);
      } else {
        // Handle the case when the parameter is not present
        console.log('No transactionId parameter');
      }
    });
  }
}

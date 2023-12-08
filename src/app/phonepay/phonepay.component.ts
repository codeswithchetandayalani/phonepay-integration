import { Component } from '@angular/core';
import { PhonepayService } from '../services/phonepay.service';

@Component({
  selector: 'app-phonepay',
  templateUrl: './phonepay.component.html',
  styleUrls: ['./phonepay.component.css'],
})
export class PhonepayComponent {
  constructor(private phonePe: PhonepayService) {}
  // on click component
  initiatePayment() {
    const amount = 100; // Replace with the actual amount
    this.phonePe.initiatePayment(amount).subscribe(
      (response) => {
        console.log(
          'PhonePe Initiate Payment Response:',
          response.data.success
        );
        // Handle the response
        // Redirect to the payment success page
        window.location.href = response.redirectUrl;
      },
      (error) => {
        console.error('PhonePe Initiate Payment Error:', error);
        // Handle the error
      }
    );
  }
}

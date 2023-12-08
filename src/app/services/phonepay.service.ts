import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as CryptoJs from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class PhonepayService {
  encodedData: string = '';
  finalXHeader: string = '';
  private apiUrl = 'http://localhost:3001/initiate-payment';
  private callbackUrl = 'http://localhost:3002/payment-success';


  constructor(private  http:HttpClient ) {}
  initiatePayment(amount: number): Observable<any> {
    //  make a payload request
    const payload = {
      merchantId: 'PGTESTPAYUAT',
      merchantTransactionId: 'merchantTransactionId7',
      merchantUserId: 'merchantUserId',
      amount: 160000,
      redirectUrl: 'http://localhost:3002/payment-success',
      redirectMode: 'POST',
      callbackUrl: 'http://localhost:4200/payment-success',
      mobileNumber: '9999999999',
      paymentInstrument: {
        type: 'PAY_PAGE',
      },
    };

    // convert to base 64 encoded
    this.encodedData = btoa(JSON.stringify(payload));
    const requestData = {
      request: this.encodedData,
    };

    const apiEndpoint = '/pg/v1/pay';
    const saltKey = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
    const saltIndex = 1;

    // convert base 64 encoded string to hash
    const stringToHash = `${this.encodedData}${apiEndpoint}${saltKey}`;
    // Calculate SHA256 hash using CryptoJS
    const sha256Hash = CryptoJs.SHA256(stringToHash).toString(CryptoJs.enc.Hex);

    // final output
    this.finalXHeader = `${sha256Hash}###${saltIndex}`;
    // console.log(this.finalXHeader );

    // Set the X-VERIFY header with the calculated value
    const headers = new HttpHeaders({
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VERIFY': this.finalXHeader,
    });

    return this.http.post(this.apiUrl, requestData, { headers }).pipe(
      map((response: any) => {
        console.log('response:',response);
        if (response.success && response.redirectUrl) {
          console.log('Payment initiated successfully.');
          // will redirect to the payment gateway page
          window.location.href = response.redirectUrl;
        } else {
          console.error('Payment failed. PhonePe API response:', response);
          throw new Error('Payment failed');
        }
      }),
      catchError((error) => {
        console.error('Error initiating payment:', error);
        throw new Error('Internal Server Error');
      })
    );
  }

}

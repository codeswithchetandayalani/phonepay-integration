import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhonepayComponent } from './phonepay/phonepay.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';

const routes: Routes = [
  {
    path: 'phonepay',
    component: PhonepayComponent,
  },
  {
    path: 'payment-success',
    component: PaymentsuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

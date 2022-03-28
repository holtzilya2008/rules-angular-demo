import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { IsOrderFieldVisiblePipe } from './pipes/is-order-field-visible.pipe';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderFormComponent } from './components/order-form/order-form.component';



@NgModule({
  declarations: [
    OrderDetailsComponent,
    IsOrderFieldVisiblePipe,
    OrderSummaryComponent,
    OrderFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrderDetailsComponent
  ]
})
export class OrderModule { }

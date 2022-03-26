import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { IsOrderFieldVisiblePipe } from './pipes/is-order-field-visible.pipe';



@NgModule({
  declarations: [
    OrderDetailsComponent,
    IsOrderFieldVisiblePipe
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }

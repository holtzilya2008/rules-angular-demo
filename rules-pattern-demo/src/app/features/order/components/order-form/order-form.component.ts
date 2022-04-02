import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  constructor(private readonly fb: FormBuilder) { }

  orderForm!: FormGroup;

  ngOnInit(): void {
    this.orderForm = this.fb.group({

    });
  }

}

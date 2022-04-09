import { Injectable } from '@angular/core';
import { Rule } from 'src/app/core/rule-engine';
import { rulesFactory } from './rules';
import { OrderVisibilityContext } from './types';
import { allRuleEngine } from 'src/app/core/rule-engine';
import { OrderState } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsVisibilityService {

  private rules: Rule<OrderVisibilityContext, boolean>[] = rulesFactory.getRules();
  private engine = allRuleEngine;

  constructor() {
  }

  isFieldVisible(fieldName: string, state: OrderState) {
    const context: OrderVisibilityContext = {
      orderState: state,
      fieldName
    }
    const result = this.engine.aggregateAllBoolean(this.rules, context);
    console.log(`isFieldVisible(${fieldName}) ${result}`);
    return result;
  }

}

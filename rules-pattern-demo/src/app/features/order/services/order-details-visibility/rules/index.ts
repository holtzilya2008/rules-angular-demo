import { instantiateMultiple } from 'src/app/common/utils';
import { Rule } from 'src/app/core/rule-engine';
import { OrderVisibilityContext } from '../types';
import { VisibleByStatusRule } from './visible-by-status.rule';

const ruleClasses = [
  VisibleByStatusRule
]

function getRules(deps?: any[]): Rule<OrderVisibilityContext, boolean>[] {
  return instantiateMultiple<Rule<OrderVisibilityContext, boolean>>(ruleClasses);
}

export const rulesFactory = {
  getRules
}

import { Rule } from "../interfaces/rule";

export class AllRuleEngine<TContext> {

  isApplicable(rules: Rule<TContext>[], context: TContext): boolean {
    return rules.every(r => r.isApplicable(context));
  }

}

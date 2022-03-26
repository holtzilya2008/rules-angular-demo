export interface Rule<TContext> {

  isApplicable(context: TContext): boolean;
  execute?<TResult>(context: TContext): TResult;

}

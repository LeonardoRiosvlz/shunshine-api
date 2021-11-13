import { Field, InputType, ID } from '@nestjs/graphql';
import { AccountingFilter, AccountingFilterInput } from './accounting-filter.input';
import { Filter } from '@nestjs-query/core';

@InputType()
export class DeleteManyAccountingInput {
  @Field(() => AccountingFilterInput, {nullable: true} )  where?: Filter<AccountingFilter>;
}

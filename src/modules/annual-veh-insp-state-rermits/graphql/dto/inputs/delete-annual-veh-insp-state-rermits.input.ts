import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteAnnualVehInspStateRermitsInput {
  @Field(() => ID, )  entityId: string;
}

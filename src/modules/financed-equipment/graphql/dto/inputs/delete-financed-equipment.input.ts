import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteFinancedEquipmentInput {
  @Field(() => ID, )  entityId: string;
}

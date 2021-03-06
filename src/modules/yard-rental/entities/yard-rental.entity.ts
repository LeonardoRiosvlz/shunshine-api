import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';

@Schema({ ...SchemaConstants, collection: 'yard-rental' })
export class YardRentalEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop() truck?: string;
  @Prop() truckColor?: string;
  @Prop() tag?: string;
  @Prop() rentalDate?: Date;
  @Prop() rentalAmount?: number;
  @Prop() archived?: boolean;
  @Prop() notes?: string;
}

export const YardRentalSchema = SchemaFactory.createForClass(YardRentalEntity);

export const YardRentalFeature = {
  name: YardRentalEntity.name,
  schema: YardRentalSchema,
};

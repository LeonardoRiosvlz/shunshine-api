import { PersistentEntity } from 'src/shared/modules/data-access/mongoose/base.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaConstants } from 'src/shared/modules/data-access/mongoose/schema.constants';
import { FilesEntity } from 'src/shared/modules/files/entities/files.entity';
import { PopulatedDoc, Schema as MSchema } from 'mongoose';
import { ClientEntity } from 'src/modules/client/entities/client.entity';

@Schema({ ...SchemaConstants, collection: 'trailer-rental' })
export class TrailerRentalEntity extends PersistentEntity {
  @Prop({ type: MSchema.Types.ObjectId, ref: () => ClientEntity}) client: string;
  @Prop() archived?: boolean;
  @Prop() unit?: string;
  @Prop() vin?: string;
  @Prop() tag?: string;
  @Prop() year?: string;
  @Prop() make?: string;
  @Prop() model?: string;
  @Prop() rentalDate?: Date;
  @Prop() rentalAmount?: number;
  @Prop() notes?: string;
}

export const TrailerRentalSchema = SchemaFactory.createForClass(TrailerRentalEntity);

export const TrailerRentalFeature = {
  name: TrailerRentalEntity.name,
  schema: TrailerRentalSchema,
};

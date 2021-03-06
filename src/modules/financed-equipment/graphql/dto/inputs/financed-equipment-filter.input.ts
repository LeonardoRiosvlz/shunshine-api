import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FinancedEquipmentEntity } from '../../../entities/financed-equipment.entity';

@ObjectType()
export class FinancedEquipmentFilter implements IEntityFilter<FinancedEquipmentEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) saleAmount?: string;
  @FilterableField(()=>String, { nullable: true}) client?: string;
  @FilterableField(()=>String, { nullable: true}) monthlyPayment?: string;
  @FilterableField(()=>String, { nullable: true}) truckVin?: string;
  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const FinancedEquipmentFilterInput = FilterType(FinancedEquipmentFilter); 
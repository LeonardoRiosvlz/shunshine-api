import { FilterableField, FilterType } from '@nestjs-query/query-graphql';
import {  ObjectType } from '@nestjs/graphql';
import { IEntityFilter } from 'src/shared/modules/data-access/mongoose/types/filterable-fields.type';
import { FilesIftaFuelTaxesEntity } from '../../../entities/files-ifta-fuel-taxes.entity';

@ObjectType()
export class FilesIftaFuelTaxesFilter implements IEntityFilter<FilesIftaFuelTaxesEntity>{
  @FilterableField(()=>String, { nullable: true }) id?: string;
  @FilterableField(()=>String, { nullable: true }) name?: string;
  @FilterableField(()=>String, { nullable: true}) iftaFuelTaxes?: string;

  @FilterableField(()=>Date ,{ nullable: true }) createdAt?: Date;
  @FilterableField(()=>Date ,{ nullable: true }) updatedAt?: Date;

}

export const FilesIftaFuelTaxesFilterInput = FilterType(FilesIftaFuelTaxesFilter);
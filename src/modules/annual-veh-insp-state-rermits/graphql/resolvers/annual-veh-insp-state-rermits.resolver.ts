import { Args, Mutation, Query, Resolver, Parent, ResolveField } from '@nestjs/graphql';


import { GraphQLVoid } from 'graphql-scalars';
import { CreateAnnualVehInspStateRermitsInput } from '../dto/inputs/create-annual-veh-insp-state-rermits.input';
import { AnnualVehInspStateRermitsResponse } from '../dto/responses/annual-veh-insp-state-rermits.response';
import { GetAllAnnualVehInspStateRermitsInput } from '../dto/inputs/get-all-annual-veh-insp-state-rermits.input';
import { DeleteAnnualVehInspStateRermitsInput } from '../dto/inputs/delete-annual-veh-insp-state-rermits.input';
import { CreateAnnualVehInspStateRermitsCommand } from '../../cqrs/commands/impl/create-annual-veh-insp-state-rermits.command';
import { DeleteAnnualVehInspStateRermitsCommand } from '../../cqrs/commands/impl/delete-annual-veh-insp-state-rermits.command';
import { GetAllAnnualVehInspStateRermitsQuery } from '../../cqrs/queries/impl/get-all-annual-veh-insp-state-rermits.query';
import { AnnualVehInspStateRermitsMapper } from '../../mapper/annual-veh-insp-state-rermits.mapper';
import { UpdateAnnualVehInspStateRermitsInput } from '../dto/inputs/update-annual-veh-insp-state-rermits.input';
import { UpdateAnnualVehInspStateRermitsCommand } from '../../cqrs/commands/impl/update-annual-veh-insp-state-rermits.command';
import { Inject, UseGuards } from '@nestjs/common';

import { GetPaginatedAnnualVehInspStateRermitsInput } from '../dto/inputs/get-paginated-annual-veh-insp-state-rermits.input';
import { PaginatedAnnualVehInspStateRermitsResponse } from '../dto/responses/paginated-annual-veh-insp-state-rermits.response';
import { GetPaginatedAnnualVehInspStateRermitsQuery } from '../../cqrs/queries/impl/get-paginated-annual-veh-insp-state-rermits.query';
import { GetOneAnnualVehInspStateRermitsInput } from '../dto/inputs/get-one-annual-veh-insp-state-rermits.input';
import { GetOneAnnualVehInspStateRermitsQuery } from '../../cqrs/queries/impl/get-one-annual-veh-insp-state-rermits.query';
import { DeleteManyAnnualVehInspStateRermitsInput } from '../dto/inputs/delete-many-annual-veh-insp-state-rermits.input';
import { DeleteManyAnnualVehInspStateRermitsCommand } from '../../cqrs/commands/impl/delete-many-annual-veh-insp-state-rermits.command';
import { BaseResolver } from 'src/shared/modules/graphql/resolvers/BaseResolver';
import { IAppCQRSBus } from 'src/shared/modules/app-cqrs/interfaces/IAppCQRSBus';
import { GqlAuthGuard } from 'src/shared/modules/auth/guard/graphql.guard';
import { PermitsGuard } from 'src/shared/modules/auth/guard/permits.guard';
import { CurrentLanguage } from 'src/shared/decorators/current-language.decorator';
import { Result } from 'src/shared/core/class/result';
import { Permit } from 'src/shared/modules/auth/decorators/permit.decorators';
import { APP_MODULES } from 'src/shared/resources/modules.enum';
import { ACTION_LIST } from 'src/shared/resources/permits.type';
import { AnnualVehInspStateRermitsEntity } from '../../entities/annual-veh-insp-state-rermits.entity';
import { IPaginatedData } from 'src/shared/core/interfaces/IPaginatedData';
import { SolvedEntityResponse } from 'src/shared/modules/graphql/dto/responses/solved-entity.response';
import { ClientEntity } from 'src/modules/client/entities/client.entity';
import { GetOneClientQuery } from 'src/modules/client/cqrs/queries/impl/get-one-client.query';



@Resolver(() => AnnualVehInspStateRermitsResponse)
export class AnnualVehInspStateRermitsResolver extends BaseResolver {
  constructor(
    private readonly _annualVehInspStateRermitsMapper: AnnualVehInspStateRermitsMapper,
    @Inject(IAppCQRSBus.$) private readonly _cqrsBus: IAppCQRSBus,
  ) {
    super();
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ANNUAL_VEH_INSP_STATE_RERMITS'], action: ACTION_LIST.CREATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async createAnnualVehInspStateRermits(
    @Args('input') input: CreateAnnualVehInspStateRermitsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {

    const resp = await this._cqrsBus.execCommand<Result<void>>(new CreateAnnualVehInspStateRermitsCommand(
      this._annualVehInspStateRermitsMapper.dtoInput2Persistent(input)
    ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ANNUAL_VEH_INSP_STATE_RERMITS'], action: ACTION_LIST.UPDATE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async updateAnnualVehInspStateRermits(
    @Args('input') { update, entityId }: UpdateAnnualVehInspStateRermitsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new UpdateAnnualVehInspStateRermitsCommand(entityId, update ));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ANNUAL_VEH_INSP_STATE_RERMITS'], action: ACTION_LIST.DELETE_ONE})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteAnnualVehInspStateRermits(
    @Args('input') { entityId }: DeleteAnnualVehInspStateRermitsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteAnnualVehInspStateRermitsCommand(entityId));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ANNUAL_VEH_INSP_STATE_RERMITS'], action: ACTION_LIST.DELETE_MANY})
  @Mutation(() => GraphQLVoid, { nullable: true })
  async deleteManyAnnualVehInspStateRermits(
    @Args('input') input: DeleteManyAnnualVehInspStateRermitsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<void> {
    const resp = await this._cqrsBus.execCommand<Result<void>>(new DeleteManyAnnualVehInspStateRermitsCommand(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ANNUAL_VEH_INSP_STATE_RERMITS'], action: ACTION_LIST.GET_ALL})
  @Query(()=>[AnnualVehInspStateRermitsResponse])
  async getAllAnnualVehInspStateRermits(
    @Args('input', { nullable: true }) input: GetAllAnnualVehInspStateRermitsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<Array<AnnualVehInspStateRermitsResponse>> {
    const resp = await this._cqrsBus.execQuery<Result<Array<AnnualVehInspStateRermitsEntity>>>(new GetAllAnnualVehInspStateRermitsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return resp.unwrap().map(this._annualVehInspStateRermitsMapper.persistent2Dto);
  }

  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ANNUAL_VEH_INSP_STATE_RERMITS'], action: ACTION_LIST.GET_ONE})
  @Query(() => AnnualVehInspStateRermitsResponse, { nullable: true })
  async getOneAnnualVehInspStateRermits(
    @Args('input', { nullable: true }) input: GetOneAnnualVehInspStateRermitsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<AnnualVehInspStateRermitsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<AnnualVehInspStateRermitsEntity>>(new GetOneAnnualVehInspStateRermitsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    return this._annualVehInspStateRermitsMapper.persistent2Dto(resp.unwrap());
  }



  @UseGuards(GqlAuthGuard, PermitsGuard)
  @Permit({module : APP_MODULES['ANNUAL_VEH_INSP_STATE_RERMITS'], action: ACTION_LIST.GET_PAGINATED})
  @Query(() => PaginatedAnnualVehInspStateRermitsResponse, { nullable: true })
  async getPaginatedAnnualVehInspStateRermits(
    @Args('input', { nullable: true }) input: GetPaginatedAnnualVehInspStateRermitsInput,
    @CurrentLanguage() lang?: string,
  ): Promise<PaginatedAnnualVehInspStateRermitsResponse> {
    const resp = await this._cqrsBus.execQuery<Result<IPaginatedData<AnnualVehInspStateRermitsEntity>>>(new GetPaginatedAnnualVehInspStateRermitsQuery(input));
    if (resp.isFailure) this.handleErrors(resp.unwrapError(), lang);
    const { items, currentPage, limit, total, totalPages } = resp.unwrap();
    return {
      currentPage, limit, totalPages, total,
      items: items.map(this._annualVehInspStateRermitsMapper.persistent2Dto),
    };
  }



  @ResolveField(() => [SolvedEntityResponse], { nullable: true })
  async client(@Parent() parent?: AnnualVehInspStateRermitsResponse): Promise<SolvedEntityResponse> {
    if (parent?.client) {
      const patientOrErr = await this._cqrsBus.execQuery<Result<ClientEntity>>(new GetOneClientQuery({where:{
             id: {eq: parent.client.id}
        }}));
        if (patientOrErr.isFailure) {
          return null;
        }
        const client = patientOrErr.unwrap();

        return {
          id: client.id,
          entityName: ClientEntity.name,
          identifier: client.companyName,
          fields: [
            {
              field: 'contactOfficePhone',
              value: client.contactOfficePhone
            }
          ]
        }
    }
  }





}

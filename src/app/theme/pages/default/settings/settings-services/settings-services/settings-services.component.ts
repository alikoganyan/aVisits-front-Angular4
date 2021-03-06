import { Component, OnInit } from '@angular/core';
import {SettingsMasterViewComponent} from "../../settings-page-base/settings-master-view-component";
import {SalonServiceModel} from "../../../../../../salon-service/salon-service.model";
import {ServiceCategoryModel} from "../../../../../../services-category/service-category.model";
import {Action, createSelector, MemoizedSelector, Store} from "@ngrx/store";
import {EntityCollectionActions} from "../../../../../../entity-collection/entity-collection.actions";
import {ModalService} from "../../../../../../shared/modal.service";
import * as fromRoot from "../../../reducers";
import * as fromCategory from "../../../reducers/service-category";
import * as fromService from "../../../reducers/salon-service";
import * as fromFilter from '../../../reducers/filter';

import * as chainActions from '../../../../../../chain/actions/collection';
import * as salonActions from '../../../../../../salon/actions/collection';
import * as serviceActions from '../../../../../../salon-service/actions/collection';
import * as categoryActions from '../../../../../../services-category/actions/collection';
import * as filterActions from '../../../../../../filter/actions/filter';

import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {SettingsMasterViewComponentBase} from "../../settings-page-base/settings-master-view-component-base";
import {UniqueEntity} from "../../../../../../entity-collection/unique-entity";
import {CreateSalonServiceComponent} from "../salon-service/create-salon-service/create-salon-service.component";
import {CreateServiceCategoryComponent} from "../service-category/create-service-category/create-service-category.component";
import {EditSalonServiceComponent} from "../salon-service/edit-salon-service/edit-salon-service.component";
import * as positionActions from "../../../../../../position/actions/collection";
import * as filterReducer from "../../../../../../reducers/filter";
import {EditServiceCategoryComponent} from "../service-category/edit-service-category/edit-service-category.component";

@Component({
  selector: 'app-settings-services',
  templateUrl: './settings-services.component.html',
  styleUrls: ['./settings-services.component.scss']
})
export class SettingsServicesComponent extends SettingsMasterViewComponentBase {
    protected get operationCompleteSelector(): MemoizedSelector<Object, boolean> {
        return createSelector(
            fromService.selectOperationComplete,
            fromCategory.selectOperationComplete,
            (a, b) => a || b
        )
    }

    filterChainId: number;
    subscribeToStore(): void {
        super.subscribeToStore();

        this.filterChainId$
            .filter(chainId => !!chainId)
            .subscribe(
                chainId => {
                    this.filterChainId = chainId;
                    this.store$.dispatch(categoryActions.collectionActions.LoadAll(chainId));
                    this.store$.dispatch(serviceActions.collectionActions.LoadAll(chainId));
                }
            );
    }

    loadEntities(): void {
        this.store$.dispatch(chainActions.collectionActions.LoadAll());
        this.store$.dispatch(salonActions.collectionActions.LoadAll());
    }

    getModalSize(entity?: UniqueEntity): string {
        return 'lg';
    }

    getSetCurrentEntityAction(entity: UniqueEntity): Action {
        return entity instanceof SalonServiceModel
            ? serviceActions.collectionActions.SetCurrentEntity(entity)
            : categoryActions.collectionActions.SetCurrentEntity(entity);
    }

    filterChainId$ = this.store$.select(filterReducer.selectFilterChainId);
    categories$ = this.store$.select(fromService.selectServicesTreeViewDataSource);


    constructor(protected store$: Store<fromRoot.State>,
                protected modalService: ModalService,
                protected activeModal: NgbActiveModal,) {
        super(store$, modalService, activeModal);
    }

    /**
     * category
     */
    openCreateCategoryForm() {
        let category = new ServiceCategoryModel({ chain_id: this.filterChainId });
        this.openModalForm(CreateServiceCategoryComponent, category);
    }

    openEditCategoryForm(category: ServiceCategoryModel) {
        this.openModalForm(EditServiceCategoryComponent, new ServiceCategoryModel({...category, chain_id: this.filterChainId}));
    }

    /**
     * service
     */
    openCreateServiceForm() {
        let service = new SalonServiceModel({ chain_id: this.filterChainId });
        this.openModalForm(CreateSalonServiceComponent, service);
    }

    openEditServiceForm(service: SalonServiceModel) {
        this.openModalForm(EditSalonServiceComponent, new SalonServiceModel({...service, chain_id: this.filterChainId}));
    }



}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbActiveModal, NgbModal, NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import {SalonService} from "../../../salon/salon.service";
import {GeoNamesService} from "../../../shared/_services/geo-names.service";
import {BackendService} from "../../../backend/backend.service";
import {ModalService} from "../../../shared/modal.service";
import {NgbModalStack} from "@ng-bootstrap/ng-bootstrap/modal/modal-stack";
import {StoreModule} from "@ngrx/store";
import {reducerProvider, reducerToken} from "./reducers/index";
import {EffectsModule} from "@ngrx/effects";
import {ChainEffects} from "../../../chain/effects/chain.effects";
import {SalonCollectionEffects} from "../../../salon/effects/collection.effects";
import {SalonEffects} from "../../../salon/effects/salon.effects";
import * as fromChain from "../../../chain/actions/collection";
import * as fromSalon from "../../../salon/actions/collection";
import * as fromPosition from "../../../position/actions/collection";
import * as fromEmployee from "../../../employee/actions/collection";
import * as fromServiceCategory from "../../../services-category/actions/collection";
import * as fromSalonService from "../../../salon-service/actions/collection";
import {PositionEffects} from "../../../position/effects/position.effects";
import {EmployeePositionService} from "../../../position/position.service";
import {ServiceCategoryService} from "../../../services-category/service-category.service";
import {SalonService_Service} from "../../../salon-service/salon-service.service";
import {ServiceCategoryCollectionEffects} from "../../../services-category/effects/collection.effects";
import {SalonServiceCollectionEffects} from "../../../salon-service/effects/collection.effects";
import {EmployeeEffects} from "../../../employee/effects/employee.effects";
import {EmployeeService} from "../../../employee/employee.service";

@NgModule({
    imports: [
        CommonModule,
        NgbModalModule.forRoot(),
        StoreModule.forFeature('default-page', reducerToken),
        EffectsModule.forFeature([
            ChainEffects,
            SalonCollectionEffects,
            SalonEffects,
            PositionEffects,
            EmployeeEffects,
            ServiceCategoryCollectionEffects,
            SalonServiceCollectionEffects
        ])
    ],
    declarations: [],
    providers: [
        SalonService,
        EmployeePositionService,
        EmployeeService,
        GeoNamesService,
        BackendService,
        ServiceCategoryService,
        SalonService_Service,

        ModalService,
        NgbModal,
        NgbModalStack,
        NgbActiveModal,
        reducerProvider,
        { provide: fromChain.ChainCollectionActions, useValue: fromChain.collectionActions },
        { provide: fromSalon.SalonCollectionActions, useValue: fromSalon.collectionActions },
        { provide: fromPosition.PositionCollectionActions, useValue: fromPosition.collectionActions },
        { provide: fromEmployee.EmployeeCollectionActions, useValue: fromEmployee.collectionActions },
        { provide: fromServiceCategory.ServiceCategoryCollectionActions, useValue: fromServiceCategory.collectionActions },
        { provide: fromSalonService.SalonServiceCollectionActions, useValue: fromSalonService.collectionActions },
    ]
})
export class DefaultPageModule {
}

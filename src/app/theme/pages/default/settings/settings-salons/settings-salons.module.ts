import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsSalonsComponent } from './settings-salons.component';
import { SalonRowComponent } from './salon-row/salon-row.component';
import { RouterModule, Routes } from "@angular/router";
import { CreateSalonComponent } from './create-salon/create-salon.component';
import { SalonEditFormComponent } from './salon-edit-form/salon-edit-form.component';
import { EditSalonComponent } from './edit-salon/edit-salon.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { DxAutocompleteModule, DxDateBoxModule, DxPopupModule } from "devextreme-angular";
import { SalonScheduleDayComponent } from './salon-edit-form/salon-schedule-day/salon-schedule-day.component';
import {SharedModule} from "../../../../../shared/shared.module";
import { DayOfWeekPipe } from './salon-edit-form/salon-schedule-day/day-of-week.pipe';
import { TimeToJsDatePipe } from './salon-edit-form/salon-schedule-day/time-to-js-date.pipe';
import { JsDateToTimeStringPipe } from './salon-edit-form/salon-schedule-day/js-date-to-time-string.pipe';

const salonRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: SettingsSalonsComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(salonRoutes),
        FormsModule,
        ReactiveFormsModule,
        SharedModule,

        DxAutocompleteModule,
        DxDateBoxModule,
        DxPopupModule,

        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDBGVDv5fOFgfW4ixNZL_2krgkriGu6vvc',
            libraries: ['places']
        }),
    ],
    declarations: [
        SettingsSalonsComponent,
        SalonRowComponent,
        CreateSalonComponent,
        SalonEditFormComponent,
        EditSalonComponent,
        SalonScheduleDayComponent,
        DayOfWeekPipe,
        TimeToJsDatePipe,
        JsDateToTimeStringPipe
    ],
    providers: [
        JsDateToTimeStringPipe
    ],
    entryComponents: [
        CreateSalonComponent,
        EditSalonComponent
    ]
})
export class SettingsSalonsModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateSalonComponent } from "./create-salon.component";
import { LayoutModule } from '../../../layouts/layout.module';
import { DefaultComponent } from '../default.component';
import { FormsModule } from "@angular/forms";
import { CreateSalonService } from "../../../_services/create-salon.service";

const routes: Routes = [
    {
        "path": "",
        "component": DefaultComponent,
        "children": [
            {
                "path": "",
                "component": CreateSalonComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule, RouterModule.forChild(routes),
        LayoutModule,
        FormsModule
    ], exports: [
        RouterModule
    ], declarations: [
        CreateSalonComponent
    ], providers: [CreateSalonService]
})
export class CreateSalonModule {
}
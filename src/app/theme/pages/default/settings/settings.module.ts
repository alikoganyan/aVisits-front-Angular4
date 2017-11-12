import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";;


const settingsRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: 'chains',
                loadChildren: './settings-chains/settings-chains.module#SettingsChainsModule'
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(settingsRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [

    ]
})
export class SettingsModule {
}
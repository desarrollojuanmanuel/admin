import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
//components
import { DashboardComponent } from "./dashboard/dashboard.component"
import { Grafica1Component } from "./grafica1/grafica1.component"
import { PagesComponent } from "./pages.component"
import { ProgressComponent } from "./progress/progress.component"
import { AccountSettingsComponent } from "./account-settings/account-settings.component"
import { PromesasComponent } from "./promesas/promesas.component"
import { RxjsComponent } from "./rxjs/rxjs.component"
import { AuthGuard } from "../guards/auth.guard"

const routes: Routes = [
    {
        path: 'dashboard', component: PagesComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent , data: {title: 'Dashboard'}},
            { path: 'progress', component: ProgressComponent ,data: {title: 'Progress'}},
            { path: 'grafica', component: Grafica1Component ,data: {title: 'Grafica'}},
            { path: 'account-settings', component: AccountSettingsComponent ,data: {title: 'Account-settings'}},
            { path: 'promesas', component: PromesasComponent ,data: {title: 'Promesas'}},
            { path: 'rxjs', component: RxjsComponent ,data: {title: 'Rxjs'}},
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRountingModule { }
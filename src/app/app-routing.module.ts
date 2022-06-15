import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PagesRountingModule } from "./pages/pages.routing"
import { NopagefoundComponent } from "./nopagefound/nopagefound.component"
import { AutRountingModule } from "./aut/out.routing"

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        PagesRountingModule,
        AutRountingModule
    ],
    exports: [RouterModule]
})

export class AppRountingModule { }
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { PagesRountingModule } from "./pages/pages.routing"
import { NopagefoundComponent } from "./nopagefound/nopagefound.component"
import { AuthRountingModule } from "./auth/out.routing"

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', component: NopagefoundComponent },
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes),
        PagesRountingModule,
        AuthRountingModule
    ],
    exports: [RouterModule]
})

export class AppRountingModule { }
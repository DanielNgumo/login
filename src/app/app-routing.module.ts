import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { SearchformComponent } from './searchform/searchform.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StepperComponent } from './stepper/stepper.component';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { ReuseComponent } from './reuse/reuse.component';
import { PizzaComponent } from './pizza/pizza.component';
import { SnackComponent } from './snack/snack.component';
import { TableComponent } from './table/table.component';
import { SortComponent } from './sort/sort.component';
import { PaginationComponent } from './pagination/pagination.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  // { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test', component: TestComponent },
  { path: 'searchform', component: SearchformComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'ngmodel', component: NgmodelComponent },
  { path: 'reuse', component: ReuseComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'snack', component: SnackComponent },
  { path: 'table', component: TableComponent },
  { path: 'sort', component: SortComponent },
  {path: 'pagination', component: PaginationComponent },
  {path:'card', component: CardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

  
}

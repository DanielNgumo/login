import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './test/test.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { SearchformComponent } from './searchform/searchform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { NgmodelComponent } from './ngmodel/ngmodel.component';
import { InsideComponent } from './app/folder1/inside/inside.component';
import { ReuseComponent } from './reuse/reuse.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { SnackComponent } from './snack/snack.component';
import { PizzaComponent } from './pizza/pizza.component';
import { TableComponent } from './table/table.component';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { SortComponent } from './sort/sort.component';
import { MatSortModule } from '@angular/material/sort';
import { PaginationComponent } from './pagination/pagination.component';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { FolderListComponent } from './folder1/folder-list/folder-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TestComponent,
    SearchformComponent,
    SidenavComponent,
    NgmodelComponent,
    InsideComponent,
    ReuseComponent,
    SnackComponent,
    PizzaComponent,
    TableComponent,
    SortComponent,
    PaginationComponent,
    CardComponent,
    FolderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatSnackBarModule,
    MatFormFieldModule, 
    FormsModule, 
    MatInputModule, 
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    JsonPipe,
    MatCardModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}

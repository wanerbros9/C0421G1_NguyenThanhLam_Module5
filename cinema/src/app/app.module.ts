import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ListShowTimeComponent} from './cinema/list-show-time/list-show-time.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DeleteShowTimeComponent} from './cinema/delete-show-time/delete-show-time.component';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {CreateShowTimeComponent} from './cinema/create-show-time/create-show-time.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {SlicePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListShowTimeComponent,
    DeleteShowTimeComponent,
    CreateShowTimeComponent
  ],
  entryComponents: [DeleteShowTimeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

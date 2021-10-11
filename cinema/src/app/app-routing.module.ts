import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ListShowTimeComponent} from './cinema/list-show-time/list-show-time.component';
import {CreateShowTimeComponent} from './cinema/create-show-time/create-show-time.component';

const routes: Routes = [
  {path: '', component: ListShowTimeComponent},
  {path: 'showtime/create', component: CreateShowTimeComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}

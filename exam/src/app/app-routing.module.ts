import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarRegisterComponent} from './component/list-car-register/car-register.component';
import {EditCarRegisterComponent} from './component/edit-car-register/edit-car-register.component';


const routes: Routes = [
  {path: 'carRegister/list', component: CarRegisterComponent},
  {path: '', component: CarRegisterComponent},
  {path: 'car/edit/:id', component: EditCarRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

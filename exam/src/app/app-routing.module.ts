import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CarRegisterComponent} from './component/list-car-register/car-register.component';
import {EditCarRegisterComponent} from './component/edit-car-register/edit-car-register.component';
import {CreateCarRegisterComponent} from './component/create-car-register/create-car-register.component';


const routes: Routes = [
  // {path: 'carRegister/list', component: CarRegisterComponent},
  {path: '', component: CarRegisterComponent},
  {path: 'car/api/edit/:id', component: EditCarRegisterComponent},
  {path: 'car/api/add', component: CreateCarRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

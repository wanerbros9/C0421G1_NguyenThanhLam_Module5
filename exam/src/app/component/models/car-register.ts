import {CarType} from './car-type';
import {CarStation} from './car-station';

export interface CarRegister {
  id: number;
  carNumber: number;
  carType: CarType;
  carStation: CarStation;
  departure: string;
  arrive: string;
  phone: string;
  email: string;
  departureHour: string;
  arriveHour: string;
}

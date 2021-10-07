import { Injectable } from '@angular/core';
import {Position} from "../model/position";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  positionList: Position[] = [
    {positionId: 1, positionName: "Receptionist"},
    {positionId: 2, positionName: "Serve"},
    {positionId: 3, positionName: "Expert"},
    {positionId: 4, positionName: "Monitor"},
    {positionId: 5, positionName: "Manage"},
    {positionId: 6, positionName: "Manager"}
  ];

  constructor() { }
}

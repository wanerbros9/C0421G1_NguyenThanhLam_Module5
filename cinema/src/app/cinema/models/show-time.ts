import {Movie} from './movie';

export interface ShowTime {
  id: number;
  movieNameShow: Movie;
  showTimeCode: string;
  showDate: string;
  ticketAmount: number;
}

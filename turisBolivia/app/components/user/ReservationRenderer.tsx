// ReservationRenderer.ts
import React from 'react';
import ReservationsCard from './reservationsCard';

export interface IReservation {
  clientNameID: string;
  serviceNameID: string;
  dateReservation: string;
  startTime: string;
  endTime: string;
  status: string;
  id: string;
}

export interface ReservationRenderer {
  renderReservation(
    data: IReservation,
    onDelete: (id: string) => void
  ): JSX.Element;
}

export class DefaultReservationRenderer implements ReservationRenderer {
  renderReservation(
    data: IReservation,
    onDelete: (id: string) => void
  ): JSX.Element {
    return <ReservationsCard data={data} onDelete={onDelete} />;
  }
}

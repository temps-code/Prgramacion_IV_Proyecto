// ReservationBridge.tsx
import React from 'react';
import { IReservation, ReservationRenderer, DefaultReservationRenderer } from './ReservationRenderer';

interface ReservationBridgeProps {
    data: IReservation;
    onDelete: (id: string) => void;
    // Permite inyectar una implementación distinta si se requiere
    renderer?: ReservationRenderer;
}

const ReservationBridge: React.FC<ReservationBridgeProps> = ({ data, onDelete, renderer }) => {
    // Si no se pasa un renderer, se utiliza el DefaultReservationRenderer.
    const usedRenderer = renderer || new DefaultReservationRenderer();
    return usedRenderer.renderReservation(data, onDelete);
};

export default ReservationBridge;

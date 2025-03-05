import React from "react";
import ReservationsCard from "./reservationsCard";

// Definición de la interfaz para las reservas (puedes moverla a un archivo de tipos)
interface IReservation {
    clientNameID: string;
    serviceNameID: string;
    dateReservation: string;
    startTime: string;
    endTime: string;
    status: string;
    id: string;
}

interface PropsData {
    data: IReservation;
    onDelete: (id: string) => void;
}

// Componentes específicos para cada estado.
// Por ahora, simplemente renderizan el ReservationsCard; 
const PendingReservationCard = (props: PropsData) => {
    return <ReservationsCard {...props} />;
};

const ConfirmedReservationCard = (props: PropsData) => {
    return <ReservationsCard {...props} />;
};

const CancelledReservationCard = (props: PropsData) => {
    return <ReservationsCard {...props} />;
};

const FinalizedReservationCard = (props: PropsData) => {
    return <ReservationsCard {...props} />;
};

// Componente Factory que, según el estado, retorna la tarjeta adecuada
const ReservationCardFactory = ({ data, onDelete }: PropsData) => {
    switch (data.status) {
        case "Pendientes":
            return <PendingReservationCard data={data} onDelete={onDelete} />;
        case "Confirmadas":
            return <ConfirmedReservationCard data={data} onDelete={onDelete} />;
        case "Canceladas":
            return <CancelledReservationCard data={data} onDelete={onDelete} />;
        case "Finalizadas":
            return <FinalizedReservationCard data={data} onDelete={onDelete} />;
        default:
            return <ReservationsCard data={data} onDelete={onDelete} />;
    }
};

export default ReservationCardFactory;
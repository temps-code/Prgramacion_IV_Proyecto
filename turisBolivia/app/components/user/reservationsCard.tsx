import { Text, TouchableOpacity, View } from "react-native";

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

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Pendientes': return 'amber';
        case 'Confirmadas': return 'emerald';
        case 'Finalizadas': return 'blue';
        case 'Canceladas': return 'red';
        default: return 'gray';
    }
};

const ReservationsCard = ({ data, onDelete }: PropsData) => {
    const statusColor = getStatusColor(data.status);

    return (
        <View className="flex-row p-4 border-b border-gray-200 items-center">
            {/* Columna Cliente */}
            <View className="min-w-[300px] flex-1 flex-row items-center gap-2">
                <View>
                    <Text className="text-black text-base font-medium font-['Roboto']">
                        {data.clientNameID}
                    </Text>
                    <Text className="text-gray-500 text-sm font-['Roboto']">
                        {/* Asumiendo que tienes un campo de email en los datos */}
                        {data.clientNameID.toLowerCase()}@email.com
                    </Text>
                </View>
            </View>

            {/* Columna Servicio */}
            <View className="min-w-[120px] flex-1">
                <Text className="text-black text-base font-['Roboto']">
                    {data.serviceNameID}
                </Text>
            </View>

            {/* Columna Fecha */}
            <View className="min-w-[100px] flex-1">
                <Text className="text-black text-base font-['Roboto']">
                    {new Date(data.dateReservation).toLocaleDateString('es-ES', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                    })}
                </Text>
            </View>

            {/* Columna Hora */}
            <View className="min-w-[80px] flex-1">
                <Text className="text-black text-base font-['Roboto']">
                    {data.startTime}
                </Text>
            </View>

            {/* Columna Estado */}
            <View className="min-w-[100px] flex-1">
                <View className={`bg-${statusColor}-100 rounded-full px-3 py-1 self-start`}>
                    <Text className={`text-${statusColor}-800 text-sm font-['Roboto']`}>
                        {data.status}
                    </Text>
                </View>
            </View>

            {/* Columna Acciones */}
            <TouchableOpacity
                onPress={() => onDelete(data.id)} // Usamos la prop aquí
                className="p-2 active:bg-red-50 rounded-full"
            >
                <Text className="text-red-800 text-sm font-['Roboto']">Eliminar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ReservationsCard;
import { ScrollView, Text, View } from "react-native";
import { Link } from 'expo-router';
import { useEffect, useState } from "react";

export default function Reservations() {
    interface IReservation {
        clientName: string;
        serviceName: string;
        dateReservation: string;
        startTime: string;
        endTime: string;
        status: string;
        id: string;
    }

    const countReservationsByStatus = (reservations: IReservation[]) => {
        const statusCounts = {
            Pendientes: 0,
            Confirmadas: 0,
            Canceladas: 0,
            Finalizadas: 0,
        };

        reservations.forEach((reservation) => {
            switch (reservation.status) {
                case 'Pendientes':
                    statusCounts.Pendientes++;
                    break;
                case 'Confirmadas':
                    statusCounts.Confirmadas++;
                    break;
                case 'Canceladas':
                    statusCounts.Canceladas++;
                    break;
                case 'Finalizadas':
                    statusCounts.Finalizadas++;
                    break;
                default:
                    break;
            }
        });

        return statusCounts;
    };

    const [reservations, setReservations] = useState<IReservation[]>([]);
    const [statusCounts, setStatusCounts] = useState({
        Pendientes: 0,
        Confirmadas: 0,
        Canceladas: 0,
        Finalizadas: 0,
    });

    const fetchArtists = async () => {
        try {
            const response = await fetch("https://67c7ff69c19eb8753e7bcb97.mockapi.io/user/reservations");
            const data = await response.json();
            setReservations(data);

            // Actualizar el conteo de estados
            const counts = countReservationsByStatus(data);
            setStatusCounts(counts);
        } catch (error) {
            console.error("Error al obtener reservaciones:", error);
        }
    };

    useEffect(() => {
        fetchArtists();
    }, []);


    return (
        <ScrollView className="flex-1 bg-white p-4">
            {/* Contenedor Principal */}
            <View className="w-full max-w-screen-xl mx-auto bg-white rounded-lg border-2 border-[#ced4da] overflow-hidden">

                {/* Encabezado */}
                <View className="p-6 bg-gray-50">
                    <Text className="text-gray-900 text-2xl font-bold font-['Roboto'] mb-4">
                        Reservas
                    </Text>

                    {/* Filtros */}
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        className="mb-4"
                    >
                        <View className="flex-row gap-4">
                            {/* Pendientes */}
                            <View className="px-4 py-2 bg-amber-100 rounded-lg flex-row items-center gap-2">
                                <Text className="text-amber-800 text-base font-['Roboto']">
                                    Pendientes ({statusCounts.Pendientes})
                                </Text>
                            </View>

                            {/* Confirmadas */}
                            <View className="px-4 py-2 bg-emerald-100 rounded-lg flex-row items-center gap-2">
                                <Text className="text-emerald-800 text-base font-['Roboto']">
                                    Confirmadas ({statusCounts.Confirmadas})
                                </Text>
                            </View>

                            {/* Finalizadas */}
                            <View className="px-4 py-2 bg-blue-100 rounded-lg flex-row items-center gap-2">
                                <Text className="text-blue-800 text-base font-['Roboto']">
                                    Finalizadas ({statusCounts.Finalizadas})
                                </Text>
                            </View>

                            {/* Canceladas */}
                            <View className="px-4 py-2 bg-red-100 rounded-lg flex-row items-center gap-2">
                                <Text className="text-red-800 text-base font-['Roboto']">
                                    Canceladas ({statusCounts.Canceladas})
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                {/* Barra de Herramientas */}
                <View className="p-4 bg-white border-b border-gray-200 flex-col md:flex-row gap-4">
                    <View className="flex-1 flex-row gap-4">
                        <View className="flex-1 bg-white rounded-lg border border-gray-200 p-3">
                            <Text className="text-gray-400 text-base font-['Roboto']">
                                Buscar reservas...
                            </Text>
                        </View>
                        <View className="w-[160px] bg-white rounded-lg border border-gray-200 p-3 flex-row items-center justify-between">
                            <Text className="text-black text-base font-['Roboto']">
                                Ordenar por fecha
                            </Text>
                            {/* SVG aquí */}
                        </View>
                    </View>
                    <View className="bg-indigo-600 rounded-lg px-4 py-2 flex-row items-center gap-2">
                        {/* SVG aquí */}
                        <Text className="text-white text-base font-['Roboto']">
                            Nueva Reserva
                        </Text>
                    </View>
                </View>

                {/* Tabla de Reservas */}
                <ScrollView horizontal className="bg-white">
                    <View className="min-w-[800px]">
                        {/* Encabezados de Tabla */}
                        <View className="flex-row bg-gray-50 p-4 border-b border-gray-200">
                            {['Cliente', 'Servicio', 'Fecha', 'Hora', 'Estado', 'Acciones'].map((header) => (
                                <View key={header} className="flex-1 min-w-[120px] px-2">
                                    <Text className="text-gray-500 text-xs font-medium font-['Roboto']">
                                        {header}
                                    </Text>
                                </View>
                            ))}
                        </View>

                        {/* Filas de Datos */}
                        {[1, 2, 3].map((item) => (
                            <View key={item} className="flex-row p-4 border-b border-gray-200 items-center">
                                <View className="flex-1 min-w-[150px] flex-row items-center gap-2">
                                    {/* SVG aquí */}
                                    <View>
                                        <Text className="text-black text-base font-medium font-['Roboto']">
                                            María García
                                        </Text>
                                        <Text className="text-gray-500 text-sm font-['Roboto']">
                                            maria@email.com
                                        </Text>
                                    </View>
                                </View>
                                <View className="flex-1 min-w-[120px]">
                                    <Text className="text-black text-base font-['Roboto']">
                                        Corte de Cabello
                                    </Text>
                                </View>
                                <View className="flex-1 min-w-[100px]">
                                    <Text className="text-black text-base font-['Roboto']">
                                        15 Mar 2025
                                    </Text>
                                </View>
                                <View className="flex-1 min-w-[80px]">
                                    <Text className="text-black text-base font-['Roboto']">
                                        10:00 AM
                                    </Text>
                                </View>
                                <View className="flex-1 min-w-[100px]">
                                    <View className="bg-amber-100 rounded-full px-3 py-1 self-start">
                                        <Text className="text-amber-800 text-sm font-['Roboto']">
                                            Pendiente
                                        </Text>
                                    </View>
                                </View>
                                <View className="flex-1 min-w-[80px]">
                                    {/* SVG de acciones aquí */}
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* Paginación */}
                <View className="p-4 bg-white border-t border-gray-200 flex-col md:flex-row justify-between items-center">
                    <Text className="text-gray-500 text-sm font-['Roboto'] mb-2 md:mb-0">
                        Mostrando 1-10 de 25 reservas
                    </Text>
                    <View className="flex-row gap-2">
                        <View className="border border-gray-200 rounded px-4 py-1">
                            <Text className="text-black text-base font-['Roboto']">
                                Anterior
                            </Text>
                        </View>
                        {[1, 2, 3].map((page) => (
                            <View
                                key={page}
                                className={`${page === 1 ? 'bg-indigo-600' : 'border border-gray-200'} rounded px-3 py-1`}
                            >
                                <Text className={`text-${page === 1 ? 'white' : 'black'} text-base font-['Roboto']`}>
                                    {page}
                                </Text>
                            </View>
                        ))}
                        <View className="border border-gray-200 rounded px-4 py-1">
                            <Text className="text-black text-base font-['Roboto']">
                                Siguiente
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
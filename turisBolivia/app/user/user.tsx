import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import InfoCards from "../components/user/infoCards";
import NavigationCards from "../components/user/navigationCards";

export default function User() {
    const [reservationCount, setReservationCount] = useState(0);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await fetch('https://67c7ff69c19eb8753e7bcb97.mockapi.io/user/reservations');
                const data = await response.json();
                setReservationCount(data.length);
            } catch (error) {
                console.error('Error fetching reservations:', error);
            }
        };
        fetchReservations();
    }, []);

    const cardData = [
        { title: 'Servicios Activos', value: '12' },
        { title: 'Próximas Reservas', value: reservationCount.toString() },
        { title: 'Calificación Promedio', value: '4.8' }
    ];

    const navigationCards = [
        { title: 'Mis Servicios', subtitle: 'Gestionar servicios' },
        { title: 'Reservas', subtitle: 'Ver calendario', link: './reservations' },
        { title: 'Reseñas', subtitle: 'Ver opiniones' },
        { title: 'Mi Perfil', subtitle: 'Editar información' }
    ];
    return (
        <ScrollView className="flex-1 bg-white p-4">
            {/* Contenedor Principal */}
            <View className="flex-1 bg-white rounded-lg border-2 border-[#ced4da] overflow-hidden">

                {/* Contenido Interno */}
                <View className="flex-1 p-6 bg-gray-50">
                    {/* Header */}
                    <View className="mb-8">
                        <Text className="text-gray-800 text-3xl font-bold font-['Poppins']">
                            ¡Buen día, Carlos! 👋
                        </Text>
                        <Text className="text-gray-600 text-base font-normal font-['Poppins'] mt-1">
                            Bienvenido de vuelta a tu panel de control
                        </Text>
                    </View>

                    <View className="flex-row flex-wrap justify-between mb-8 -mx-2">
                        {cardData.map((cardItem) => (
                            <InfoCards data={cardItem} />
                        ))}
                    </View>

                    <View className="flex-row flex-wrap justify-between -mx-2">
                        {navigationCards.map((navigationCard) => (
                            <NavigationCards data={navigationCard} />
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>

    );
}

import { View, Text, ScrollView } from "react-native";
import Header from "./components/Navigation/Header";
import ServiceCard from "./components/Services/ServiceCard";
import BottomNav from "./components/Navigation/BottomNav";

const favoriteServices = [
  {
    id: 1,
    name: "Salar de Uyuni",
    description: "Tour del famoso desierto de sal",
    icon: "earth",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Parque Madidi",
    description: "Aventura en la selva amazónica",
    icon: "leaf",
    rating: 4.8,
  },
];

export default function FavoritesScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <Header
        title="Mis Favoritos"
        subtitle="Tus experiencias guardadas"
        icon="heart"
      />

      <ScrollView className="p-4">
        <Text className="text-xl font-bold text-cyan-800 mb-4">
          Experiencias Favoritas ({favoriteServices.length})
        </Text>

        {favoriteServices.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.name}
            description={service.description}
            icon={service.icon}
            badge={`⭐ ${service.rating}`}
          />
        ))}

        <Text className="text-gray-500 text-center mt-8">
          Desliza hacia abajo para ver más opciones
        </Text>
      </ScrollView>

      <BottomNav />
    </View>
  );
}

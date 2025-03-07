import { View, Text, ScrollView } from "react-native";
import Header from "./components/Navigation/Header";
import ServiceCard from "./components/Services/ServiceCard";
import BottomNav from "./components/Navigation/BottomNav";
import MapPlaceholder from "./components/Map/MapPlaceholder";

const featuredServices = [
  {
    id: 1,
    name: "Tour Valle de la Luna",
    description: "Excursión geológica al atardecer",
    icon: "earth",
    rating: 4.7,
    isNew: true,
  },
  {
    id: 2,
    name: "Teleférico La Paz",
    description: "Vistas panorámicas de la ciudad",
    icon: "cable-car",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Tiwanaku",
    description: "Tour arqueológico guiado",
    icon: "walk",
    rating: 4.8,
  },
];

export default function MainScreen() {
  return (
    <View className="flex-1 bg-gray-50">
      <Header
        title="Explora Bolivia"
        subtitle="Descubre experiencias únicas"
        icon="compass"
      />

      {/* Mapa interactivo */}
      <MapPlaceholder className="h-64" />

      {/* Listado de servicios destacados */}
      <ScrollView className="p-4">
        <Text className="text-xl font-bold text-cyan-800 mb-4">
          Servicios Destacados
        </Text>

        {featuredServices.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.name}
            description={service.description}
            icon={service.icon}
            badge={service.isNew ? "Nuevo 🎉" : `⭐ ${service.rating}`}
          />
        ))}

        <Text className="text-gray-500 text-center mt-8">
          Desliza para ver más recomendaciones
        </Text>
      </ScrollView>

      {/* Navegación inferior */}
      <BottomNav />
    </View>
  );
}

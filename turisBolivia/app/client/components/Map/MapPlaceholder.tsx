import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface MapPlaceholderProps {
  className?: string;
}

export default function MapPlaceholder({
  className = "",
}: MapPlaceholderProps) {
  return (
    <View className={`bg-gray-300 justify-center items-center ${className}`}>
      <Ionicons name="map" size={64} color="#0e7490" />
      <Text className="text-gray-600 mt-2">Mapa interactivo</Text>
    </View>
  );
}

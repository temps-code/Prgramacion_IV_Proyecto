import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function BottomNav() {
  return (
    <View className="flex-row justify-around p-4 bg-white border-t border-gray-200">
      {/* Botón Explorar */}
      <Link href="/client/main" asChild>
        <TouchableOpacity className="items-center" activeOpacity={0.7}>
          <Ionicons name="compass" size={24} color="#0e7490" />
          <Text className="text-cyan-800 mt-1 text-sm">Explorar</Text>
        </TouchableOpacity>
      </Link>

      {/* Botón Favoritos */}
      <Link href="/client/favorites" asChild>
        <TouchableOpacity className="items-center" activeOpacity={0.7}>
          <Ionicons name="heart" size={24} color="#0e7490" />
          <Text className="text-cyan-800 mt-1 text-sm">Favoritos</Text>
        </TouchableOpacity>
      </Link>

      {/* Botón Perfil */}
      <Link href="/client/profile" asChild>
        <TouchableOpacity className="items-center" activeOpacity={0.7}>
          <Ionicons name="person" size={24} color="#0e7490" />
          <Text className="text-cyan-800 mt-1 text-sm">Perfil</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

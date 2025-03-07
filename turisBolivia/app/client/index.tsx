import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ClientHome() {
  return (
    <View className="flex-1 bg-gradient-to-b from-cyan-50 to-white justify-center p-8">
      {/* Encabezado */}
      <View className="items-center mb-16">
        <Ionicons name="map" size={80} color="#0e7490" />
        <Text className="text-4xl font-bold text-cyan-800 mt-6">
          TurisBolivia
        </Text>
        <Text className="text-lg text-gray-600 mt-2">
          Tu aventura comienza aquí
        </Text>
      </View>

      {/* Contenido Principal */}
      <View className="space-y-6">
        <Link href="/client/login" asChild>
          <TouchableOpacity className="bg-cyan-700 p-5 rounded-xl shadow-lg flex-row items-center justify-center active:bg-cyan-800">
            <Ionicons name="log-in" size={24} color="white" />
            <Text className="text-white text-lg font-semibold ml-3">
              Iniciar Sesión
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="/client/register" asChild>
          <TouchableOpacity className="border-2 border-cyan-700 p-5 rounded-xl shadow-sm flex-row items-center justify-center active:bg-cyan-50">
            <Ionicons name="person-add" size={24} color="#0e7490" />
            <Text className="text-cyan-700 text-lg font-semibold ml-3">
              Crear Cuenta
            </Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Separador */}
      <View className="flex-row items-center my-8">
        <View className="flex-1 h-px bg-gray-200" />
        <Text className="mx-4 text-gray-500">o continúa con</Text>
        <View className="flex-1 h-px bg-gray-200" />
      </View>

      {/* Redes Sociales */}
      <View className="flex-row justify-center space-x-4">
        <TouchableOpacity className="p-3 bg-white rounded-full shadow-md">
          <Ionicons name="logo-google" size={24} color="#db4437" />
        </TouchableOpacity>

        <TouchableOpacity className="p-3 bg-white rounded-full shadow-md">
          <Ionicons name="logo-facebook" size={24} color="#1877f2" />
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text className="text-center text-gray-500 mt-12">
        Al continuar aceptas nuestros{" "}
        <Text className="text-cyan-700">Términos y Condiciones</Text>
      </Text>
    </View>
  );
}

import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import Header from "./components/Navigation/Header";
import BottomNav from "./components/Navigation/BottomNav";
import { Link } from "expo-router";
import AuthButton from "./components/Auth/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "./services/api";

export default function ProfileScreen() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("currentUser");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        const fullUser = await api.getClient(userData.id);
        setUser(fullUser);
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("currentUser");
    window.location.replace("/client/login");
  };

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <ActivityIndicator size="large" color="#0e7490" />
      </View>
    );
  }

  if (!user) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <Text className="text-gray-600 mb-4">No se encontró el usuario</Text>
        <AuthButton
          title="Volver al inicio"
          onPress={() => window.location.replace("/")}
          variant="primary"
        />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <Header
        title="Mi Perfil"
        subtitle="Administra tu cuenta"
        icon="person-circle"
      />

      <View className="flex-1 p-4">
        {/* Sección de información */}
        <View className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mb-6">
          <Text className="text-xl font-bold text-cyan-800 mb-4">
            Información de la cuenta
          </Text>

          <View className="space-y-3">
            <View className="flex-row justify-between">
              <Text className="text-gray-600">Nombre:</Text>
              <Text className="text-cyan-800">{user.name}</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-600">Correo electrónico:</Text>
              <Text className="text-cyan-800">{user.email}</Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-600">Miembro desde:</Text>
              <Text className="text-cyan-800">
                {new Date(user.createdAt).toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>

        {/* Acciones */}
        <View className="space-y-4">
          <Link href="/client/profile/edit" asChild>
            <AuthButton
              title="Editar Perfil"
              icon="pencil"
              variant="secondary"
              className="bg-cyan-50"
              onPress={() => {}}
            />
          </Link>

          <AuthButton
            title="Cerrar Sesión"
            icon="log-out"
            onPress={handleLogout}
            variant="secondary"
            className="bg-gray-100"
          />

          <Link href="/client/profile/delete" asChild>
            <AuthButton
              title="Eliminar Cuenta"
              icon="trash"
              color="red"
              className="bg-red-50"
              onPress={() => {}}
            />
          </Link>
        </View>
      </View>

      <BottomNav />
    </View>
  );
}

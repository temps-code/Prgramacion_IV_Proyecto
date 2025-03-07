import { useState } from "react";
import { View, Text, Alert } from "react-native";
import { useRouter } from "expo-router";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthButton from "../components/Auth/Button";
import Header from "../components/Navigation/Header";
import PasswordInput from "../components/Auth/PasswordInput";

export default function DeleteAccountScreen() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    try {
      setError("");

      if (!password) {
        setError("Debes ingresar tu contraseña actual");
        return;
      }

      const storedUser = await AsyncStorage.getItem("currentUser");
      if (!storedUser) {
        setError("No se encontró la sesión del usuario");
        return;
      }

      const user = JSON.parse(storedUser);

      // Verificar contraseña
      if (password !== user.password) {
        setError("Contraseña incorrecta");
        return;
      }

      setIsLoading(true);

      // Eliminar cuenta
      const success = await api.deleteClient(user.id);

      if (success) {
        await AsyncStorage.removeItem("currentUser");
        Alert.alert("Éxito", "Cuenta eliminada permanentemente");
        router.replace("/client/login");
      } else {
        throw new Error("Error en el servidor");
      }
    } catch (error) {
      Alert.alert("Error", "No se pudo eliminar la cuenta");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Header
        title="Eliminar Cuenta"
        subtitle="Acción permanente irreversible"
        icon="trash"
      />

      <View className="flex-1 justify-center">
        <Text className="text-lg text-center mb-6 text-gray-700">
          Para confirmar la eliminación permanente de tu cuenta:
        </Text>

        <PasswordInput
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña actual"
          error={error}
        />

        {error && (
          <Text className="text-red-500 text-center mb-4">{error}</Text>
        )}

        <AuthButton
          title="Confirmar Eliminación"
          icon="trash"
          onPress={handleDelete}
          isLoading={isLoading}
          color="red"
          className="bg-red-100 border-red-300"
        />

        <AuthButton
          title="Cancelar"
          icon="close"
          onPress={() => router.back()}
          variant="secondary"
          className="mt-4"
        />
      </View>
    </View>
  );
}

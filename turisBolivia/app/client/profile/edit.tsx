import { useState, useEffect } from "react";
import { View, Alert, Text } from "react-native";
import { useRouter } from "expo-router";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthButton from "../components/Auth/Button";
import Header from "../components/Navigation/Header";
import Input from "../components/Auth/Input";
import PasswordInput from "../components/Auth/PasswordInput";

export default function ProfileEdit() {
  const [user, setUser] = useState<any>({});
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = await AsyncStorage.getItem("currentUser");
      if (storedUser) setUser(JSON.parse(storedUser));
    };
    loadUser();
  }, []);

  const handleUpdate = async () => {
    try {
      setError("");

      // Validación básica
      if (!user.name || !user.email) {
        setError("Nombre y correo son obligatorios");
        return;
      }

      // Validación de contraseña si se intenta cambiar
      if (newPassword || confirmPassword) {
        if (newPassword !== confirmPassword) {
          setError("Las nuevas contraseñas no coinciden");
          return;
        }

        // Verificar contraseña actual con la almacenada
        if (currentPassword !== user.password) {
          setError("Contraseña actual incorrecta");
          return;
        }
      }

      setIsLoading(true);

      // Preparar datos para actualización
      const updateData = {
        ...user,
        name: user.name,
        email: user.email,
        password: newPassword || user.password,
      };

      const updatedUser = await api.updateClient(user.id, updateData);
      await AsyncStorage.setItem("currentUser", JSON.stringify(updatedUser));

      Alert.alert("Éxito", "Perfil actualizado correctamente");
      router.back();
    } catch (error) {
      Alert.alert("Error", "No se pudo actualizar el perfil");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-50 p-4">
      <Header
        title="Editar Perfil"
        subtitle="Actualiza tus datos personales"
        icon="pencil"
      />

      <View className="space-y-4">
        <Input
          value={user.name || ""}
          onChangeText={(text) => setUser({ ...user, name: text })}
          placeholder="Nombre completo"
          iconName="person-outline"
        />

        <Input
          value={user.email || ""}
          onChangeText={(text) => setUser({ ...user, email: text })}
          placeholder="Correo electrónico"
          iconName="mail-outline"
          keyboardType="email-address"
        />

        <PasswordInput
          value={currentPassword}
          onChangeText={setCurrentPassword}
          placeholder="Contraseña actual"
        />

        <PasswordInput
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="Nueva contraseña"
        />

        <PasswordInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirmar nueva contraseña"
        />

        {error && <Text className="text-red-500 text-center">{error}</Text>}

        <AuthButton
          title="Guardar Cambios"
          icon="save"
          onPress={handleUpdate}
          isLoading={isLoading}
          variant="primary"
        />

        <AuthButton
          title="Cancelar"
          icon="arrow-back"
          onPress={() => router.back()}
          variant="secondary"
        />
      </View>
    </View>
  );
}

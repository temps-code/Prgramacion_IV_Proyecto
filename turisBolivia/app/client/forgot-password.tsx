import { useState } from "react";
import { View, Alert, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import AuthButton from "./components/Auth/Button";
import Header from "./components/Navigation/Header";
import Input from "./components/Auth/Input";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleResetPassword = async () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingrese un correo válido");
      return;
    }

    setIsLoading(true);
    try {
      // Lógica para enviar correo de recuperación
      Alert.alert("Éxito", "Se ha enviado un correo de recuperación");
      router.replace("/client/login");
    } catch {
      Alert.alert("Error", "No se pudo enviar el correo");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-cyan-50 to-white justify-center p-8">
      <Header
        title="Recuperar Contraseña"
        subtitle="Ingresa tu correo para continuar"
        icon="lock-closed"
      />

      <View className="space-y-6">
        <Input
          value={email}
          onChangeText={(text) => {
            setEmail(text);
            setError("");
          }}
          placeholder="Correo electrónico"
          iconName="mail-outline"
          keyboardType="email-address"
          error={error}
        />

        <AuthButton
          title="Enviar correo de recuperación"
          icon="send"
          onPress={handleResetPassword}
          isLoading={isLoading}
          variant="primary"
        />

        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">¿Recordaste tu contraseña? </Text>
          <TouchableOpacity onPress={() => router.push("/client/login")}>
            <Text className="text-cyan-700 font-medium">Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-center text-gray-500 mt-12">
        Revisa tu bandeja de entrada o spam para las instrucciones
      </Text>
    </View>
  );
}

import { useState } from "react";
import { View, Alert, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { api } from "./services/api";
import AuthButton from "./components/Auth/Button";
import Header from "./components/Navigation/Header";
import Input from "./components/Auth/Input";
import PasswordInput from "./components/Auth/PasswordInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setError("Por favor ingresa un correo válido");
      return;
    }

    setIsLoading(true);
    try {
      const success = await api.login(email, password);
      success
        ? router.replace("/client/main")
        : setError("Credenciales incorrectas");
    } catch {
      setError("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-cyan-50 to-white justify-center p-8">
      <Header
        title="TurisBolivia"
        subtitle="Inicia sesión para explorar"
        icon="map"
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

        <PasswordInput
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setError("");
          }}
          placeholder="Contraseña"
          error={error}
        />

        <TouchableOpacity
          onPress={() => router.push("/client/forgot-password")}
          className="items-end"
        >
          <Text className="text-cyan-700 font-medium">
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>

        <AuthButton
          title="Ingresar ahora"
          icon="log-in"
          onPress={handleLogin}
          isLoading={isLoading}
          variant="primary"
        />

        <View className="flex-row justify-center items-center">
          <Text className="text-gray-600">¿No tienes cuenta? </Text>
          <TouchableOpacity onPress={() => router.push("/client/register")}>
            <Text className="text-cyan-700 font-medium">Regístrate aquí</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-center text-gray-500 mt-12">
        Al continuar aceptas nuestros{" "}
        <Text className="text-cyan-700">Términos y Condiciones</Text>
      </Text>
    </View>
  );
}

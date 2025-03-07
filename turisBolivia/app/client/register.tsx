import { useState } from "react";
import { View, Alert, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { api } from "./services/api";
import AuthButton from "./components/Auth/Button";
import Header from "./components/Navigation/Header";
import Input from "./components/Auth/Input";
import PasswordInput from "./components/Auth/PasswordInput";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateFields = () => {
    if (!name || !email || !password) {
      setError("Todos los campos son obligatorios");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingrese un correo válido");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (!validateFields()) return;

    setIsLoading(true);
    try {
      await api.createClient({ name, email, password });
      Alert.alert("Éxito", "Cuenta creada correctamente");
      router.replace("/client/login");
    } catch {
      Alert.alert("Error", "Error al crear la cuenta");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gradient-to-b from-cyan-50 to-white justify-center p-8">
      <Header
        title="Crear Cuenta"
        subtitle="Regístrate para comenzar"
        icon="person-add"
      />

      <View className="space-y-4">
        <Input
          value={name}
          onChangeText={(text) => {
            setName(text);
            setError("");
          }}
          placeholder="Nombre completo"
          iconName="person-outline"
          error={error}
        />

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

        <AuthButton
          title="Registrarse ahora"
          icon="person-add"
          onPress={handleRegister}
          isLoading={isLoading}
          variant="primary"
        />

        <View className="flex-row justify-center mt-4">
          <Text className="text-gray-600">¿Ya tienes cuenta? </Text>
          <TouchableOpacity onPress={() => router.push("/client/login")}>
            <Text className="text-cyan-700 font-medium">Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text className="text-center text-gray-500 mt-8">
        Al registrarte aceptas nuestros{" "}
        <Text className="text-cyan-700">Términos y Condiciones</Text>
      </Text>
    </View>
  );
}

import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />

        {/* Rutas de Autenticación */}
        <Stack.Screen
          name="client/login"
          options={{
            title: "Iniciar Sesión",
            headerBackTitle: "Atrás",
            headerTintColor: "#0e7490",
          }}
        />
        <Stack.Screen
          name="client/register"
          options={{
            title: "Registro",
            headerBackTitle: "Atrás",
            headerTintColor: "#0e7490",
          }}
        />
        <Stack.Screen
          name="client/forgot-password"
          options={{
            title: "Recuperar Contraseña",
            headerBackTitle: "Atrás",
            headerTintColor: "#0e7490",
          }}
        />

        {/* Ruta Principal */}
        <Stack.Screen
          name="client/main"
          options={{
            headerShown: false,
          }}
        />

        {/* Perfil */}
        <Stack.Screen
          name="client/profile/edit"
          options={{
            title: "Editar Perfil",
            headerBackTitle: "Atrás",
            headerTintColor: "#0e7490",
          }}
        />
        <Stack.Screen
          name="client/profile/delete"
          options={{
            title: "Eliminar Cuenta",
            headerBackTitle: "Atrás",
            headerTintColor: "#0e7490",
          }}
        />

        {/* Servicios y Favoritos */}
        <Stack.Screen
          name="client/services/[id]"
          options={{
            title: "Detalle del Servicio",
            headerBackTitle: "Atrás",
            headerTintColor: "#0e7490",
          }}
        />
        <Stack.Screen
          name="client/favorites"
          options={{
            title: "Favoritos",
            headerBackTitle: "Atrás",
            headerTintColor: "#0e7490",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}

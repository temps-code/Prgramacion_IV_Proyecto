import { View, Text, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter();

  const MenuButton = ({
    href,
    title,
    iconName,
  }: {
    href: string;
    title: string;
    iconName: keyof typeof Ionicons.glyphMap;
  }) => (
    <Link href={href as any} asChild>
      <TouchableOpacity
        className="w-64 mb-4 p-4 bg-white rounded-xl shadow-lg
        flex-row items-center justify-between
        active:bg-gray-50 border border-gray-100"
      >
        <View className="flex-row items-center">
          <Ionicons name={iconName} size={24} color="#38bdf8" />
          <Text className="ml-3 text-gray-700 font-medium">{title}</Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#94a3b8" />
      </TouchableOpacity>
    </Link>
  );

  return (
    <View className="flex-1 bg-gray-50 justify-center items-center">
      <Text className="text-2xl font-bold text-cyan-800 mb-8">
        Bienvenido a TurisBolivia
      </Text>

      <MenuButton
        href="./admin/admin"
        title="Administración"
        iconName="settings-sharp"
      />

      <MenuButton
        href="./user/user"
        title="Gestión de Usuarios"
        iconName="people-sharp"
      />

      <MenuButton
        href="./client"
        title="Área de Clientes"
        iconName="person-sharp"
      />

      <Text className="mt-8 text-gray-500 text-center">
        Selecciona una sección para comenzar
      </Text>
    </View>
  );
}

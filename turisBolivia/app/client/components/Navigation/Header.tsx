import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
  subtitle?: string;
  icon?: keyof typeof Ionicons.glyphMap;
}

export default function Header({ title, subtitle, icon = "map" }: HeaderProps) {
  return (
    <View className="items-center mb-12">
      <Ionicons name={icon} size={64} color="#0e7490" />
      <Text className="text-3xl font-bold text-cyan-800 mt-4">{title}</Text>
      {subtitle && <Text className="text-gray-600 mt-2">{subtitle}</Text>}
    </View>
  );
}

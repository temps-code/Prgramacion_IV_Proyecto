import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  badge?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  badge,
  className = "",
}: ServiceCardProps) {
  return (
    <View
      className={`bg-white rounded-xl p-4 mb-4 shadow-sm border border-gray-200 ${className}`}
    >
      <View className="flex-row items-center">
        <Ionicons
          name={icon as any} // Type assertion para los íconos de Expo
          size={32}
          color="#0e7490"
          className="mr-4"
        />

        <View className="flex-1">
          <View className="flex-row justify-between items-center mb-1">
            <Text className="text-lg font-semibold text-cyan-800">{title}</Text>
            {badge && (
              <Text className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium">
                {badge}
              </Text>
            )}
          </View>

          <Text className="text-gray-600 text-sm">{description}</Text>
        </View>

        <Ionicons
          name="chevron-forward"
          size={24}
          color="#94a3b8"
          className="ml-2"
        />
      </View>
    </View>
  );
}

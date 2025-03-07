import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AuthInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  iconName?: keyof typeof Ionicons.glyphMap;
  secureTextEntry?: boolean;
  showPassword?: boolean;
  toggleVisibility?: () => void;
  error?: string;
  keyboardType?: "default" | "email-address" | "numeric";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  iconName,
  secureTextEntry = false,
  showPassword,
  toggleVisibility,
  error,
  keyboardType = "default",
  autoCapitalize = "none",
}: AuthInputProps) {
  return (
    <View className="space-y-1">
      <View
        className={`bg-white rounded-xl p-4 shadow-sm border ${
          error ? "border-red-400" : "border-gray-200"
        }`}
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center flex-1">
            {iconName && (
              <Ionicons
                name={iconName}
                size={24}
                color={error ? "#f87171" : "#64748b"}
                className="mr-3"
              />
            )}
            <TextInput
              value={value}
              onChangeText={onChangeText}
              placeholder={placeholder}
              placeholderTextColor="#94a3b8"
              className={`flex-1 text-gray-700 text-base ${
                error ? "text-red-500" : ""
              }`}
              secureTextEntry={secureTextEntry && !showPassword}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
            />
          </View>
          {toggleVisibility && (
            <TouchableOpacity onPress={toggleVisibility} className="ml-2">
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={24}
                color={error ? "#f87171" : "#64748b"}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {error && <Text className="text-red-500 text-sm px-2">{error}</Text>}
    </View>
  );
}

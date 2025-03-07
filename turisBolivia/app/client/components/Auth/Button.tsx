import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AuthButtonProps {
  title: string;
  onPress: () => void;
  icon?: React.ComponentProps<typeof Ionicons>["name"];
  variant?: "primary" | "secondary";
  color?: "red";
  isLoading?: boolean;
  className?: string;
}

export default function AuthButton({
  title,
  onPress = () => {},
  icon,
  variant = "primary",
  color,
  isLoading = false,
  className = "",
}: AuthButtonProps) {
  const colorPalette = {
    primary: {
      bg: "bg-cyan-800",
      text: "text-white",
      border: "border-cyan-900",
      active: "active:bg-cyan-900",
      iconColor: "white",
    },
    secondary: {
      bg: "bg-white",
      text: "text-cyan-800",
      border: "border-cyan-800",
      active: "active:bg-cyan-50",
      iconColor: "#075985",
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-700",
      border: "border-red-300",
      active: "active:bg-red-200",
      iconColor: "#b91c1c",
    },
  };

  const selectedColor = color ? colorPalette[color] : colorPalette[variant];
  const iconColor = color
    ? selectedColor.iconColor
    : variant === "primary"
    ? "white"
    : "#075985";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading}
      className={`${className} p-5 rounded-xl shadow-lg flex-row items-center justify-center border-2 ${selectedColor.bg} ${selectedColor.border} ${selectedColor.active}`}
    >
      {isLoading ? (
        <ActivityIndicator color={iconColor} />
      ) : (
        <>
          {icon && <Ionicons name={icon} size={24} color={iconColor} />}
          <Text className={`${selectedColor.text} text-lg font-bold ml-3`}>
            {title.toUpperCase()}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}

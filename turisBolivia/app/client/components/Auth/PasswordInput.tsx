import { useState } from "react";
import Input from "./Input";

interface PasswordInputProps extends React.ComponentProps<typeof Input> {}

export default function PasswordInput(props: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      {...props}
      secureTextEntry
      showPassword={showPassword}
      toggleVisibility={() => setShowPassword(!showPassword)}
      iconName="lock-closed-outline"
    />
  );
}

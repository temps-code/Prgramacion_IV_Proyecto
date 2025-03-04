import { Text, View, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className="text-cyan-700 mb-4">
        Selecciona una sección:
      </Text>

      <Link href="./admin/admin" asChild>
        <TouchableOpacity style={{ padding: 10, backgroundColor: '#38bdf8', borderRadius: 5, marginBottom: 10 }}>
          <Text style={{ color: 'white' }}>Administración</Text>
        </TouchableOpacity>
      </Link>

      <Link href="./user/user" asChild>
        <TouchableOpacity style={{ padding: 10, backgroundColor: '#38bdf8', borderRadius: 5, marginBottom: 10 }}>
          <Text style={{ color: 'white' }}>Usuarios</Text>
        </TouchableOpacity>
      </Link>

      <Link href="./client/client" asChild>
        <TouchableOpacity style={{ padding: 10, backgroundColor: '#38bdf8', borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Clientes</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
import { Stack } from "expo-router";
import CadastroProduto from "./Components/Adaptadores/CadastroProduto";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Lista dos refrescos' }} />
      <Stack.Screen name="cadastro" />
    </Stack>
  );
}

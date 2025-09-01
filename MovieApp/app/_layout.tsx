import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="(tab)" options={{ title : "My Movie App",headerShown: false }} />
    <Stack.Screen name="movie/[id]" options={{ title : "Movie Details", headerShown: false }} />

  </Stack>;
}

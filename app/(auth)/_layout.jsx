import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function AuthLayout() {
    const colorScheme = useColorScheme();
  
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

      <Stack
        screenOptions={{ }}>
        <Stack.Screen
          name="index"
          options={{ headerShown : false }}
        />
        <Stack.Screen
          name="signUp"
          options={{ headerShown : false }}
        />
      </Stack>
        </ThemeProvider>
    );
  }
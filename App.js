import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AuthProvider } from "./src/hooks/auth";
import {Routes} from './src/routes/index'
export default function App() {
  return (
    <AuthProvider>
      <StatusBar style="light" />
      <Routes />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

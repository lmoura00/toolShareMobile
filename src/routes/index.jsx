import { NavigationContainer } from "@react-navigation/native";
import { AuthRoutes } from "../routes/privateRoutes";
import { PublicRoutes } from "../routes/publicRoutes";
import { useAuth } from "../hooks/auth";


export function Routes() {
  const { user, token } = useAuth();

  return (
    <NavigationContainer>
      {token ? <AuthRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  );
}

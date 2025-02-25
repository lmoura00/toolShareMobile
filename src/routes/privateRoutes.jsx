import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image, View, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, FontAwesome5, Octicons, Ionicons, Feather } from "@expo/vector-icons";



import { useAuth } from "../hooks/auth";
import { Inicial } from "../Pages/Inicial";
import Notificacao from "../Pages/Notificacao";
import Jogos from "../Pages/Jogos";
import Configuracoes from "../Pages/Configuracoes";
import Perfil from "../Pages/Perfil";

function AuthRoutesTabBar() {
  const navigation = useNavigation();
  const { signOut, user } = useAuth();
  const { Navigator, Screen } = createBottomTabNavigator();

  
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          let animation;

          if (route.name === "Inicial") {
           
            icon = <AntDesign name="home" size={size} color={color} />;
          } else if (route.name === "Notificacao") {
           
            icon = <Ionicons name="notifications" size={size} color={color} />;
          } else if (route.name === "Jogos") {
           
            icon = <Feather name="play" size={size} color={color} />;
          } else if (route.name === "Configuracoes") {
          
            icon = <Octicons name="gear" size={size} color={color} />;
          } else if (route.name === "Perfil") {
          
            icon = <AntDesign name="user" size={size} color={color} />;
          }

          return (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <View
                style={[
                  {
                    width: 65,
                    height: 65,
                    borderRadius: 35,
                    backgroundColor: "white",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: focused ? 25 : 0, // Faz o botão saltar para cima
                    elevation: focused ? 10 : 0, // Adiciona sombra para destaque
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 5 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                  },
                ]}
              >
                {focused ? (
                    icon
                ) : (
                  icon
                )}
              </View>
            </View>
          );
        },

        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: {
          height: 40, 
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 5,
        },
        tabBarItemStyle: { height: 60 }, 
      })}
    >
      <Screen
        name="Inicial"
        component={Inicial}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={LogOut} style={{ marginLeft: 10 }}>
            </TouchableOpacity>
          )
        }}
      />
      <Screen
        name="Notificacao"
        component={Notificacao}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          
        }}
      />
      <Screen
        name="Jogos"
        component={Jogos}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          
        }}
      />
      <Screen
        name="Configuracoes"
        component={Configuracoes}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
          
        }}
      />
      <Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarShowLabel: false,
          headerTitleAlign: "center",
        }}
      />
    </Navigator>
  );
}

export function AuthRoutes() {
  const { Navigator, Screen } = createNativeStackNavigator();
  return (
    <Navigator>
      <Screen
        name="Home"
        component={AuthRoutesTabBar}
        options={{ headerShown: false, statusBarStyle: "dark" }}
      />
      <Screen name="Inicial" component={Inicial} />
    </Navigator>
  );
}

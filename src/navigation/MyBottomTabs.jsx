import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Matches from "../screens/Matches";
import Players from "../screens/Players";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function MyBottomTabs() {
  const { navigate } = useNavigation();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#8E7AB5",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#E493B3",
        headerRight: () => (
          <AntDesign
            name="heart"
            size={30}
            color="#E30B5C"
            style={{ marginRight: 20 }}
            onPress={() => navigate("My Favorites")}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="soccer-ball" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Players"
        component={Players}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="team" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

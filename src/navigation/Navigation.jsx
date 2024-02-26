import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyBottomTabs from "../navigation/MyBottomTabs";
import MyFavorites from "../screens/MyFavorites";
import MatchDetails from "../screens/MatchDetails";
import PlayerDetails from "../screens/PlayerDetails";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#E30B5C",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Home"
          component={MyBottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="My Favorites"
          component={MyFavorites}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Match Details"
          component={MatchDetails}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Player Details"
          component={PlayerDetails}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

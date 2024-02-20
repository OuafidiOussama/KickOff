import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Matches from "../screens/Matches";
import Players from "../screens/Players";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function MyBottomTabs() {
  return (
    <Tab.Navigator>
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

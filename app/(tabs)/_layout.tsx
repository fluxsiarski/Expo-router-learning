import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
    //   screenOptions={({ route }) => ({
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName;

    //       if (route.name === "one") {
    //         iconName = focused ? "home" : "home-outline";
    //       } else if (route.name === "two") {
    //         iconName = focused ? "person" : "person-outline";
    //       }
    //       //@ts-ignore
    //       return <Ionicons name={iconName} size={size} color={color} />;
    //     },
    //     tabBarActiveTintColor: "tomato", // Active tab color
    //     tabBarInactiveTintColor: "gray", // Inactive tab color
    //     tabBarLabel: route.name === "one" ? "Tab One" : "Tab Two",
    //   })}
    >
      <Tabs.Screen
        name="one"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="archive" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

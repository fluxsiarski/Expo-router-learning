import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Layout = () => {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{ title: "[id]", headerStyle: { backgroundColor: "yellow" } }}
      />
      <Stack.Screen
        name="index"
        options={{
          title: "index",
          headerStyle: {
            backgroundColor: "#32315D",
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push("/modal")}>
              <Ionicons name="information-circle" size={34} color={"white"} />
            </TouchableOpacity>
          ),
          headerTitleStyle: { color: "white" },
        }}
      />
    </Stack>
  );
};

export default Layout;

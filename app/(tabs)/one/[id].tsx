import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text style={{ fontSize: 30 }}>Hi {id}</Text>
    </View>
  );
};

export default Page;

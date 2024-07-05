import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href={"/"} replace asChild>
        <Button title="Logout" />
      </Link>
      <Link href={"/(tabs)/one/details"} asChild>
        <Button title="Open details" />
      </Link>
      <Link href={"/(tabs)/one/42"} asChild>
        <Button title="Open details 42" />
      </Link>
      <Link href={"/(tabs)/one/1337"} asChild>
        <Button title="Open details 1337" />
      </Link>
      <Link href={"/(aux)/disclaimer"} asChild>
        <Button title="Open disclaimer" />
      </Link>
    </View>
  );
};

export default Page;

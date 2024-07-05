import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const Page = () => {
  const router = useRouter();

  return (
    <View>
      <Button onPress={() => router.push("/register")} title="Open Register" />
      <Link href={"/register"} asChild>
        <Button title="Open Register with link" />
      </Link>
      <Link href={"/(tabs)/one"} replace asChild>
        <Button title="Log in" />
      </Link>
    </View>
  );
};

export default Page;

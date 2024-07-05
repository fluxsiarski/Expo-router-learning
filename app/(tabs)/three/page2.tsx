import { View, Text } from "react-native";
import React from "react";
import Head from "expo-router/head";

const Page = () => {
  return (
    <View>
      <Head>
        <title>News 2 Page</title>
        <meta name="description" content="Whatever" />
      </Head>
      <Text>Drawer 2</Text>
    </View>
  );
};

export default Page;

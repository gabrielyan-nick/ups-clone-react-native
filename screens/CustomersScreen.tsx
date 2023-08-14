import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

const CustomersScreen = () => {
  return (
    <LinearGradient
      colors={["#73eef7cc", "#71f787cc", "#71f783cc"]}
      className="flex-1"
    >
      <SafeAreaView className="flex-1 justify-center items-center">
        <StatusBar />
        <Text className="text-purple-700 font-bold">Customers</Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CustomersScreen;

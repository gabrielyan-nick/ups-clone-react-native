import { View, Text, ScrollView, Image, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";
import { Input } from "@rneui/themed";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../graphql/queries";
import CustomerCard from "../components/CustomerCard";

export type CustomersScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomersScreen = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  const navigation = useNavigation<CustomersScreenNavigationProps>();
  const { data, loading, error } = useQuery(GET_CUSTOMERS);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <LinearGradient
      colors={["#59c1cc", "#59c1cc", "#71f783cc"]}
      className="flex-1"
    >
      <ScrollView className="flex-1">
        <StatusBar backgroundColor="#59c1cc" />
        <Image
          source={{ uri: "https://links.papareact.com/3jc" }}
          className="w-full h-56"
        />

        <Input
          placeholder="Search by Customer"
          placeholderTextColor="#00484b"
          value={searchInput}
          onChangeText={setSearchInput}
          containerStyle={{
            backgroundColor: "#fff",
            padding: 10,
            paddingHorizontal: 20,
            paddingBottom: 0,
          }}
          errorStyle={{ margin: 0 }}
        />
        {data?.getCustomers.map(
          ({ value: { email, name }, name: ID }: TCustomerResponse) => (
            <CustomerCard email={email} name={name} userId={ID} key={ID} />
          )
        )}
      </ScrollView>
    </LinearGradient>
  );
};

export default CustomersScreen;

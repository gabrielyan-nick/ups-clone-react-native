import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomersScreen from "../screens/CustomersScreen";
import OrdersScreen from "../screens/OrdersScreen";
import Icon from "react-native-vector-icons/FontAwesome5";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00484b",
        tabBarInactiveTintColor: "#868686",
        tabBarStyle: { backgroundColor: "#e3ffe6" },
        tabBarItemStyle: {
          padding: 5,
        },
        tabBarLabelStyle: { fontWeight: "bold" },
        tabBarIcon: ({ color, focused, size }) => {
          if (route.name === "Customers") {
            return (
              <Icon
                name="users"
                size={20}
                color={focused ? "#00484b" : "#868686"}
              />
            );
          } else if (route.name === "Orders") {
            return (
              <Icon
                name="boxes"
                size={20}
                color={focused ? "#00484b" : "#868686"}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomersScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

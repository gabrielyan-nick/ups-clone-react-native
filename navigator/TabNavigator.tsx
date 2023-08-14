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
      screenOptions={{
        tabBarStyle: { backgroundColor: "#e3ffe6" },
        tabBarItemStyle: {
          padding: 5,
        },
        tabBarActiveTintColor: "#00484b",
        tabBarInactiveTintColor: "#868686",
        tabBarLabelStyle: { fontWeight: "bold" },
      }}
    >
      <Tab.Screen
        name="Customers"
        component={CustomersScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="users"
              size={20}
              color={focused ? "#00484b" : "#868686"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon
              name="boxes"
              size={20}
              color={focused ? "#00484b" : "#868686"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

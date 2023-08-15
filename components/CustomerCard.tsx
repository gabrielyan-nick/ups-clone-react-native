import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";

type TCustomerCardProps = TCustomer & {
  userId: string;
};

const CustomerCard = ({ email, name, userId }: TCustomerCardProps) => {
  return (
    <TouchableHighlight>
      <Card
        containerStyle={{
          backgroundColor: "#fff",
          borderRadius: 7,
        }}
      >
        <View className="flex-row justify-between">
          <View>
            <Text className="text-lg font-bold">{name}</Text>
            <Text className="text-gray-600">{name}</Text>
          </View>
        </View>
      </Card>
    </TouchableHighlight>
  );
};

export default CustomerCard;

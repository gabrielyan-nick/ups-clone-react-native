import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";
import { useEffect, useState } from "react";

const useCustomerOrders = (userId: string) => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders;
    const customerOrders = orders.filter(
      (order) => order.trackingItems.customer_id === userId
    );

    setOrders(customerOrders);
  }, [data, userId]);

  return { orders, loading, error };
};

export default useCustomerOrders;

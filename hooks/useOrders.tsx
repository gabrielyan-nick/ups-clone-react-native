import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../graphql/queries";
import { useEffect, useState } from "react";

const useOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders;
    setOrders(orders);
  }, [data]);

  return { orders, loading, error };
};

export default useOrders;

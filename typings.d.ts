type TCustomer = {
  email: string;
  name: string;
};

type TCustomerList = {
  name: ID;
  value: TCustomer;
};

type TTrackingItem = {
  customer_id: ID;
  customer: TCustomer;
  items: TItem[];
};

type TItem = {
  item_id: ID;
  name: string;
  price: number;
  quantity: number;
};

type TOrder = {
  Address: string;
  City: string;
  Lat: number;
  Lng: number;
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems: TTrackingItem;
};

type TOrderResponse = {
  value: TOrder;
};

type TCustomerResponse = {
  name: ID;
  value: TCustomer;
};

import { SafeAreaProvider } from "react-native-safe-area-context";
import RootNavigator from "./navigator/RootNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://puertonarino.stepzen.net/api/ups/__graphql",
  headers: {
    Authorization:
      "apikey puertonarino::stepzen.io+1000::45745f3f72f40ba4e931b78d6eec6e06929b35dd5fbee87e6482f7126720e859",
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </ApolloProvider>
  );
}

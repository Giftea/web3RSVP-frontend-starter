import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/giftea/events",
  cache: new InMemoryCache(),
});

export default client;
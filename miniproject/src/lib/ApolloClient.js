import { ApolloClient, InMemoryCache } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "https://adjusted-mantis-81.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "aNi3i7EaUmOr9TWx1WnTv3MEF6SCD5EHdg8XklEql2CV7TDcNUaC61ppxUqCAw0S",
  },
});

const wsLink = new WebSocketLink({
  uri: "wss://adjusted-mantis-81.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "aNi3i7EaUmOr9TWx1WnTv3MEF6SCD5EHdg8XklEql2CV7TDcNUaC61ppxUqCAw0S",
      },
    },
  },
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

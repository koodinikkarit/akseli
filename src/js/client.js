import ApolloClient, { createNetworkInterface } from 'apollo-client';
//import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

export default new ApolloClient({
    dataIdFromObject: o => `${o.__typename}-${o.id},`,
    networkInterface: createNetworkInterface({ uri: `http://localhost:9595/graphql` })
});
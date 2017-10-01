import ApolloClient, { 
	createNetworkInterface 
} from "apollo-client";
//import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

let nextId = 1;

export default new ApolloClient({
	dataIdFromObject: o => `${o.__typename}-${o.id ? o.id : nextId++},`,
	networkInterface: createNetworkInterface({ 
		uri: `http://${window.location.hostname}:${window.location.port}/api`,
		opts: {
			credentials: "same-origin"
		}
	})
});
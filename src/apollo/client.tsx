import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_API_URL,
});

const authLink = setContext((_, { headers }) => {
    
return {
    headers: {
    ...headers,
    authorization: `Bearer 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`,
    accept: "application/json"
    }
}
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
        addTypename: false
      }),
    defaultOptions: {
        watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
        },
        query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
        },
    },
    
    
    
});

export default client
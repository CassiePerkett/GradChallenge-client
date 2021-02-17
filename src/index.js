import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache } from '@apollo/client';
//import ApolloBoost, { gql } from "apollo-boost";
//import { ApolloProvider } from '@apollo/client';
//import { InMemoryCache } from 'apollo-cache-inmemory';
//import { RestLink } from 'apollo-link-rest';

// setup your `RestLink` with your endpoint
/*const restLink = new RestLink({ 
  uri: "http://localhost:4000/" 
});

//setup new client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

const getCoins = gql`
query{ 
  coins{
    id
    symbol
    name
  }
}

`
client.query({
  query: getCoins
}).then ((response) => {
  console.log(response.data)
})
*/

/*
client
  .query({
    query: gql`
      query GetAllCoin {
        GetCoin(id: String) {
          id
          symbol
          name
          nameid
          rank
          price_usd
          percent_change_24h
          percent_change_1h
          percent_change_7d
          price_btc
          market_cap_usd
          volume24
          volume24a
          csupply
          tsupply
          msupply
        }
      }
    `
  })
  .then(result => console.log(result));*/
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();

//Questionswhen setting up client
//1. How do we define an operation in js
//2. How do we send off to the server to fetch a response
//3. How do we access the response
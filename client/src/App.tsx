import React from "react";
import "./styles/App.css";
import "./styles/forms.css";

import { Route, Switch } from "react-router-dom";

import createAuthenticatorContext from 'react-passport';
import { passport } from 'client-passport';
import { loader as googleLoader } from 'client-passport/lib/providers/google';
import { loader as facebookLoader } from 'client-passport/lib/providers/facebook';

import { TUseAuth } from './types';
import { LoadingView, SiteNavbar, ShoppingCart } from './components';
import {
  Account,
  BookPage,
  Checkout,
  HomePage,
  SearchResults,
  Store
} from './pages'

const authenticator = passport({
  providers: {
    google: async () => ({
      loader: googleLoader,
      options: {
        client_id: '331334109392-lih03odte5k3bigc3e2eeh2a1mb1is8t.apps.googleusercontent.com',
      },
    }),
    facebook: () => ({
      loader: facebookLoader,
      options: {
        appId: '253302651812049',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v3.2',
      }
    }),
  }
});

function App() {
  const { Provider, Consumer, context, useAuth } = createAuthenticatorContext(authenticator);
  return (
    <Provider>
      <Consumer>
        {({loading, user, auth}) => {
          if(false && loading){
            return LoadingView(loading)
          }
          if(!(loading || user)){
            auth.signIn('google');
          }

          console.log(user);

          const withAuth = (Page: React.FunctionComponent<TUseAuth>) => (() => Page({useAuth}))

          return <React.Fragment>
            <SiteNavbar useAuth={useAuth}/>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/search" component={SearchResults} />
              <Route path="/book/:asin" component={BookPage} />
              <Route path="/cart" exact component={ShoppingCart} />
              <Route path="/checkout" exact component={withAuth(Checkout)} />
              <Route path="/store/:store_id" exact component={Store} />
              
              <Route path="/account" exact component={withAuth(Account)} />
            </Switch>
          </React.Fragment>
        }}
      </Consumer>
    </Provider>
  );
}

export default App;
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import Layout from './page/layout/layout.page';

import LoginPage from './page/login/login.page';
import SignupPage from './page/signUp/signup.page';
import { useSelector, useDispatch } from 'react-redux';
import { AppContainer } from './App.styles';
import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selector';

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => selectCurrentUser(state));

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <AppContainer>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route path="/register" component={SignupPage} />
          <Route
            exact
            path="/login"
            render={() =>
              currentUser ? <Redirect to="/home" /> : <LoginPage />
            }
          />
          <Route path="/home" component={Layout} />
        </Switch>
      </AppContainer>
    </div>
  );
};

export default App;

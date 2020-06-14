import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import Layout from './page/layout/layout.page';

import LoginPage from './page/login/login.page';
import SignupPage from './page/signUp/signup.page';
import { connect } from 'react-redux';
import { AppContainer } from './App.styles';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <Layout /> */}
        <AppContainer>
          {/* <LoginPage /> */}
          <Switch>
            <Route path="/register" component={SignupPage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" component={LoginPage} />
          </Switch>
        </AppContainer>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);

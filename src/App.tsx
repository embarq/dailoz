import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import Home from './pages/Home'
import WelcomePage from './pages/Welcome'
import AuthLoginPage from './pages/AuthLoginPage'
import AuthSignupPage from './pages/AuthSignupPage'

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/login">
          <AuthLoginPage />
        </Route>
        <Route exact path="/signup">
          <AuthSignupPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/welcome">
          <WelcomePage />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App

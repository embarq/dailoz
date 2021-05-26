import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import WelcomePage from './pages/Welcome'
import AuthLoginPage from './pages/AuthLoginPage'
import AuthSignupPage from './pages/AuthSignupPage'
import AppDashboard from './pages/app/AppDashboard'

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
        <Route exact path="/welcome">
          <WelcomePage />
        </Route>
        <Route path="/app" render={(props) => <AppDashboard {...props} />} />
        <Route exact path="/">
          <Redirect to="/app/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)

export default App

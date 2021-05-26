import React from 'react'
import { IonRouterOutlet } from '@ionic/react'
import { Route, RouteComponentProps } from 'react-router-dom'
import Home from './Home'
import TabsNav from '../../components/common/TabsNav'

type Props = RouteComponentProps

const AppDashboard: React.FC<Props> = () => {
  return (
    <>
      <IonRouterOutlet>
        <Route exact path="/app/home" component={Home} />
        {/* <Route exact path="/app/task" component={TaskPage} /> */}
        {/* <Route exact path="/app/graphic" component={GraphicPage} /> */}
        {/* <Route exact path="/app/profile" component={ProfilePage} /> */}
      </IonRouterOutlet>
      <TabsNav />
    </>
  )
}

export default AppDashboard

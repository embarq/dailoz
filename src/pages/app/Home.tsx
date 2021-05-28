import React from 'react'
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { personOutline } from 'ionicons/icons'
import HomeTasksSummary from '../../components/HomeTasksSummary'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar style={{ '--border-width': '0', '--min-height': '64px' }}>
            <IonTitle size="large" className="px-6">
              <h2 className="font-semibold text-gray-700">Hi, User</h2>
              <p className="text-sm font-normal text-gray-500">
                Let’s make this day productive
              </p>
            </IonTitle>
            <IonButtons slot="primary">
              <button
                type="button"
                className="h-12 w-12 p-2 mr-3 shadow-2xl-primary rounded-2xl text-gray-300">
                <IonIcon icon={personOutline} slot="icon-only" />
              </button>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonHeader className="mt-8">
          <IonToolbar style={{ '--border-width': '0', '--min-height': '64px' }}>
            <IonTitle size="large" className="px-6">
              <h2 className="font-semibold text-gray-700">My Tasks</h2>
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <HomeTasksSummary />

        <IonHeader>
          <IonToolbar style={{ '--border-width': '0', '--min-height': '64px' }}>
            <IonTitle size="large" className="px-6">
              <h2 className="font-semibold text-gray-700">Today Tasks</h2>
            </IonTitle>
            <IonButtons slot="primary" className="self-end pr-4">
              <IonButton fill="clear">
                <div className="text-sm text-gray-600">View all</div>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

      </IonContent>
    </IonPage>
  )
}

export default Home

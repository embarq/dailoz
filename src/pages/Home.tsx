import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './Home.css'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p className="text-blue-400 font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
          recusandae odit error beatae quas, dicta natus facilis illum,
          voluptates reiciendis omnis exercitationem maiores soluta laborum,
          laudantium possimus quasi perferendis nostrum!
        </p>
      </IonContent>
    </IonPage>
  )
}

export default Home

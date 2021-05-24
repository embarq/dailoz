import { IonContent, IonPage, IonImg, IonButton } from '@ionic/react'

const WelcomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent scrollY={false} scrollX={false}>
        <section className="flex flex-col items-center pt-32">
          <IonImg src="/assets/welcome-illustration.svg" className="w-72" />
          <h1 className="mt-16 mb-6 text-3xl font-bold">
            <span className="text-indigo-500">Dailoz</span>
            <span className="text-pink-500">.</span>
          </h1>
          <p className="text-sm text-gray-500 text-center max-w-xs">
            Plan what you will do to be more organized for today, tomorrow and
            beyond
          </p>
        </section>
        <footer className="fixed bottom-0 w-full px-8 pb-8">
          <IonButton expand="block" size="large" className="mb-2">
            Login
          </IonButton>
          <IonButton expand="block" size="large" fill="clear">
            Sign Up
          </IonButton>
        </footer>
      </IonContent>
    </IonPage>
  )
}

export default WelcomePage

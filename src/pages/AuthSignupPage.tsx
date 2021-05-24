import {
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonItem,
  IonIcon,
} from '@ionic/react'
import {
  mailOutline,
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline,
  happyOutline,
} from 'ionicons/icons'
import { useState } from 'react'

const AuthSignupPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <IonPage>
      <IonContent>
        <section className="px-9 relative z-10">
          <h1 className="mt-24 mb-16 font-bold text-4xl text-indigo-500">
            Sign Up
          </h1>
          <form>
            <IonItem lines="full">
              <IonIcon
                slot="start"
                icon={happyOutline}
                size="small"
                className="text-gray-400"
              />
              <IonInput
                type="text"
                id="signup-form-input-username"
                placeholder="Username"
                className="text-base"
              />
            </IonItem>
            <IonItem lines="full" className="mt-6">
              <IonIcon
                slot="start"
                icon={mailOutline}
                size="small"
                className="text-gray-400"
              />
              <IonInput
                type="email"
                id="signup-form-input-email"
                placeholder="Email"
                className="text-base"
              />
            </IonItem>
            <IonItem lines="full" className="mt-6">
              <IonIcon
                slot="start"
                icon={lockClosedOutline}
                size="small"
                className="text-gray-400"
              />
              <IonInput
                type={showPassword ? 'text' : 'password'}
                id="signup-form-input-password"
                placeholder="Password"
                className="text-base"
              />
              <IonButton
                onClick={() => setShowPassword((show) => !show)}
                slot="end"
                fill="clear"
                className="text-gray-400">
                <IonIcon
                  slot="icon-only"
                  icon={showPassword ? eyeOutline : eyeOffOutline}
                  size="small"
                />
              </IonButton>
            </IonItem>

            <IonButton
              expand="block"
              className="mt-12 font-semibold"
              type="submit">
              Create
            </IonButton>
          </form>
        </section>
        <footer slot="fixed" className="bottom-0 w-full z-0 pb-5">
          <IonButton
            routerLink="/login"
            routerDirection="root"
            fill="clear"
            type="button"
            expand="full"
            className="text-sm text-indigo-800">
            Have any account?&nbsp;<div className="font-bold">Sign In</div>
          </IonButton>
        </footer>
      </IonContent>
    </IonPage>
  )
}

export default AuthSignupPage

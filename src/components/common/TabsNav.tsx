import { IonButton, IonIcon, useIonRouter } from '@ionic/react'
import {
  planet,
  planetOutline,
  calendar,
  calendarOutline,
  barChart,
  barChartOutline,
  folderOpen,
  folderOpenOutline,
  add,
} from 'ionicons/icons'
import { useEffect, useState } from 'react'

enum PageLinkName {
  Home = 'home',
  Tasks = 'tasks',
  Graphic = 'graphic',
  Profile = 'profile',
}

const PagesRouteMapping: Record<string, PageLinkName> = {
  '/app/home': PageLinkName.Home,
  '/app/tasks': PageLinkName.Tasks,
  '/app/graphic': PageLinkName.Graphic,
  '/app/profile': PageLinkName.Profile,
}

const TabsNav: React.FC = () => {
  const router = useIonRouter()
  const [activeRoute, setActiveRoute] = useState<PageLinkName | null>(null)

  useEffect(() => {
    const { pathname } = router.routeInfo

    if (pathname in PagesRouteMapping) {
      setActiveRoute(PagesRouteMapping[pathname])
    }
  }, [router.routeInfo.pathname])

  return (
    <nav>
      <ul className="list-none flex items-center justify-between fixed left-8 right-8 bottom-8 p-3 bg-white rounded-2xl shadow-2xl-primary">
        <li>
          <IonButton
            routerLink="/app/home"
            fill="clear"
            type="button"
            size="small"
            className={
              activeRoute === PageLinkName.Home
                ? 'text-indigo-700'
                : 'text-gray-300'
            }>
            <IonIcon
              slot="icon-only"
              size="small"
              icon={activeRoute === PageLinkName.Home ? planet : planetOutline}
            />
          </IonButton>
        </li>
        <li>
          <IonButton
            routerLink="/app/tasks"
            fill="clear"
            type="button"
            size="small"
            className={
              activeRoute === PageLinkName.Tasks
                ? 'text-indigo-700'
                : 'text-gray-300'
            }>
            <IonIcon
              slot="icon-only"
              size="small"
              icon={
                activeRoute === PageLinkName.Tasks ? calendar : calendarOutline
              }
            />
          </IonButton>
        </li>
        <li>
          <IonButton
            type="button"
            size="small"
            className="rounded-full w-14 h-14"
            style={{ '--box-shadow': '0 7px 13px #F1F7FF' }}>
            <IonIcon slot="icon-only" size="small" icon={add} />
          </IonButton>
        </li>
        <li>
          <IonButton
            fill="clear"
            type="button"
            size="small"
            className={
              activeRoute === PageLinkName.Graphic
                ? 'text-indigo-700'
                : 'text-gray-300'
            }>
            <IonIcon
              slot="icon-only"
              size="small"
              icon={
                activeRoute === PageLinkName.Graphic
                  ? barChart
                  : barChartOutline
              }
            />
          </IonButton>
        </li>
        <li>
          <IonButton
            fill="clear"
            type="button"
            size="small"
            className={
              activeRoute === PageLinkName.Profile
                ? 'text-indigo-700'
                : 'text-gray-300'
            }>
            <IonIcon
              slot="icon-only"
              size="small"
              icon={
                activeRoute === PageLinkName.Profile
                  ? folderOpen
                  : folderOpenOutline
              }
            />
          </IonButton>
        </li>
      </ul>
    </nav>
  )
}

export default TabsNav

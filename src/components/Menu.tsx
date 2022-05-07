import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonButton,
  IonMenuButton,
  IonButtons
} from '@ionic/react';

import MenuIcon from '../assets/velvetIcons/menuIcon.svg';

import { useLocation } from 'react-router-dom';
import { personCircleOutline, personCircleSharp, fingerPrintOutline, fingerPrintSharp, timerOutline, timerSharp, cardOutline, cardSharp, cellularOutline, cellularSharp, infiniteOutline, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
    {
      title: 'Wallet',
      url: '/page/Wallet',
      iosIcon: cardOutline,
      mdIcon: cardSharp
  },
  {
    title: 'Portfolio',
    url: '/page/Portfolio',
    iosIcon: infiniteOutline,
    mdIcon: paperPlaneSharp
  },
  {
    title: 'History',
    url: '/page/History',
    iosIcon: timerOutline,
    mdIcon: timerSharp
  }

];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="push" maxEdgeStart={70}>
      <IonContent>
        <IonList id="inbox-list">

          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={true}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon  ios={appPage.iosIcon} md={appPage.mdIcon} />
                </IonItem>
              </IonMenuToggle>
            );

          })}
          <IonMenuToggle key={4} autoHide={true}>
            <IonItem className={location.pathname === '/page/Profile' ? 'bankselected' : 'bank'} routerLink={'/page/Bank'} routerDirection="none" lines="none" detail={false}>
              <IonIcon  ios={fingerPrintOutline} md={fingerPrintSharp} />
            </IonItem>
          </IonMenuToggle>
          <IonMenuToggle key={4} autoHide={true}>
            <IonItem className={location.pathname === '/page/Profile' ? 'accountselected' : 'account'} routerLink={'/page/Profile'} routerDirection="none" lines="none" detail={false}>
              <IonIcon  ios={personCircleOutline} md={personCircleSharp} />
            </IonItem>
          </IonMenuToggle>

        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

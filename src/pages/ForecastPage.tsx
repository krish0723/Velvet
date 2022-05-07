import {
    IonButtons,
    IonItem,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle
} from '@ionic/react';

import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import MenuIcon from '../assets/velvetIcons/menuIcon.svg';
import SearchIcon from '../assets/velvetIcons/searchIcon.svg';
import { searchOutline } from 'ionicons/icons'
import './ForecastPage.css';

const ForecastPage: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonButtons slot="end">
            <IonIcon color="white" size="large" ios={searchOutline} md={searchOutline}></IonIcon>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default ForecastPage;

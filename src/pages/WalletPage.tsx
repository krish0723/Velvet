import {
    IonButtons,
    IonItem,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
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
    IonCardSubtitle,
    IonChip,
    IonLabel,
    IonSegment,
    IonSegmentButton
} from '@ionic/react';

import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import ModelCard from '../components/ModelCard';
import WalletGraph from '../components/WalletGraph';
import RecentTransactions from '../components/RecentTransactions';
import MenuIcon from '../assets/velvetIcons/menuIcon.svg';
import SearchIcon from '../assets/velvetIcons/searchIcon.svg';
import { searchOutline, caretUpOutline } from 'ionicons/icons'
import './WalletPage.css';
import { useState } from "react";

const WalletPage: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonButtons slot="end">
            <IonIcon class="searchIcon" color="white" ios={searchOutline} md={searchOutline}></IonIcon>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Wallet</IonTitle>
          </IonToolbar>
        </IonHeader>

        <WalletGraph/>

        <IonCard button class="wallet" routerLink={'/page/Wallet/Income'} routerDirection="forward">
        <IonCardHeader>
          <IonGrid>
            <IonRow>

              <IonCol>
                  <IonCardTitle>Income</IonCardTitle>
              </IonCol>
              <IonCol size="4">
                  <IonCardTitle>$100000</IonCardTitle>
              </IonCol>

            </IonRow>
          </IonGrid>
        </IonCardHeader>
        </IonCard>

        <IonCard button class="wallet" routerLink={'/page/Wallet/Spending'} routerDirection="forward">
        <IonCardHeader>
          <IonGrid>
            <IonRow className="ion-justify-content-between">

              <IonCol>
                  <IonCardTitle>Spending</IonCardTitle>
              </IonCol>
              <IonCol size="4">
                  <IonCardTitle>$0</IonCardTitle>
              </IonCol>

            </IonRow>
          </IonGrid>
        </IonCardHeader>
        </IonCard>

        <IonCard button class="wallet" routerLink={'/page/Wallet/Investments'} routerDirection="forward">
        <IonCardHeader>
          <IonGrid>
            <IonRow className="ion-justify-content-between">
              <IonCol >
                  <IonCardTitle>Investments</IonCardTitle>
              </IonCol>
              <IonCol size="4">
                  <IonCardTitle>$50</IonCardTitle>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardHeader>
        </IonCard>

        <IonHeader class="transactions" collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Recent Transactions:</IonTitle>
        </IonToolbar>
        </IonHeader>

        <RecentTransactions/>
      </IonContent>
    </IonPage>
  );
};

export default WalletPage;

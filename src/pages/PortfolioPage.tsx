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
    IonSegmentButton,
    IonAccordion,
    IonAccordionGroup,
    IonList,
    IonFabList,
    IonFabButton,
    IonFab,
    IonButton,
    IonModal
} from '@ionic/react';

import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import ModelCard from '../components/ModelCard';
import PortfolioGraph from '../components/PortfolioGraph';
import MenuIcon from '../assets/velvetIcons/menuIcon.svg';
import SearchIcon from '../assets/velvetIcons/searchIcon.svg';
import { addCircle, chevronBackCircleOutline, arrowDownCircle, searchOutline, caretUpOutline } from 'ionicons/icons'
import './PortfolioPage.css';
import { useState } from "react";

const PortfolioPage: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const models = ["AAPL", "NFLX", "TSLA", "META", "AMZN"]

  const lists = ["Tech", "Healthcare", "Finance", "Auto", "Aviation"]

  const modelsObject = models.map((name) => (
      <ModelCard name={name}/>
  ));

  const listsObject = lists.map((name) => (
      <IonAccordion class="listitem" value={name} toggleIcon={arrowDownCircle}>
        <IonItem slot="header">
          <IonLabel>{name}</IonLabel>
        </IonItem>

        <IonList slot="content">
            {modelsObject}
        </IonList>
      </IonAccordion>
  ));

  const [showAddListModal, setShowAddListModal] = useState(false);

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

      <IonContent class="portfoliopage" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Portfolio</IonTitle>
          </IonToolbar>

          <IonChip>
              <IonIcon/>
                <IonLabel>Total Value: $347000</IonLabel>
              <IonIcon/>
          </IonChip>

          <IonChip class="profit">
              <IonIcon icon={caretUpOutline} color="success" />
                <IonLabel>$245.77</IonLabel>
              <IonIcon/>
          </IonChip>



        </IonHeader>
        <PortfolioGraph/>
        <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Models List</IonTitle>
        </IonToolbar>
        </IonHeader>

        <IonAccordionGroup class="listitem">
            {listsObject}
        </IonAccordionGroup>

        <IonToolbar>
          <IonButtons slot="start">
            <IonIcon onClick={() => setShowAddListModal(true)} class="addIcon" color="white" ios={addCircle} md={searchOutline}></IonIcon>
            <IonLabel>Add List</IonLabel>
          </IonButtons>
        </IonToolbar>

        <IonModal
            breakpoints={[0.1, 0.5, 1]}
            initialBreakpoint={0.5}
            class="addlistmodal"
            isOpen={showAddListModal}
        >
        <IonButton onClick={() => setShowAddListModal(false)}>Close Modal</IonButton>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default PortfolioPage;

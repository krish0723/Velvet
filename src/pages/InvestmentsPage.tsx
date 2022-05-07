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
import RecentTransactions from '../components/RecentTransactions';
import InvestmentsGraph from '../components/InvestmentsGraph';
import InvestmentsBarGraph from '../components/InvestmentsBarGraph';
import MenuIcon from '../assets/velvetIcons/menuIcon.svg';
import SearchIcon from '../assets/velvetIcons/searchIcon.svg';
import { addCircle, chevronBackCircleOutline, arrowDownCircle, searchOutline, caretUpOutline } from 'ionicons/icons'
import './InvestmentsPage.css';
import { useState } from "react";

const InvestmentsPage: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

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
            <IonTitle size="large">Wallet - Investments</IonTitle>
          </IonToolbar>

          <IonChip>
              <IonIcon/>
                <IonLabel>Total Invested: {"$347000"}</IonLabel>
              <IonIcon/>
          </IonChip>

          <IonChip class="profit">
              <IonIcon icon={caretUpOutline} color="success" />
                <IonLabel>$245.77</IonLabel>
              <IonIcon/>
          </IonChip>



        </IonHeader>
        <InvestmentsGraph/>


        <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Recent Investments:</IonTitle>
        </IonToolbar>
        </IonHeader>

        <RecentTransactions/>

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

export default InvestmentsPage;

// <IonToolbar>
//   <IonButtons slot="start">
//     <IonIcon onClick={() => setShowAddListModal(true)} class="addIcon" color="white" ios={addCircle} md={searchOutline}></IonIcon>
//   </IonButtons>
// </IonToolbar>

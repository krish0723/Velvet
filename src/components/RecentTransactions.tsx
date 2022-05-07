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
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCardTitle,
  IonChip,
  IonAccordion,
  IonAccordionGroup
} from '@ionic/react';

import { useState } from "react";



import MenuIcon from '../assets/velvetIcons/menuIcon.svg';
import ModelGraph from './ModelGraph';
import TransactionCard from './TransactionCard';
import ModelCard from './ModelCard';
import { useLocation } from 'react-router-dom';
import { arrowDownCircle, caretUpOutline, searchOutline, personCircleOutline, personCircleSharp, fingerPrintOutline, fingerPrintSharp, timerOutline, timerSharp, cardOutline, cardSharp, cellularOutline, cellularSharp, infiniteOutline, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './RecentTransactions.css';

const RecentTransactions: React.FC = () => {
  const location = useLocation();

  const lists = [{
      name:"Walmart",
      date:"01/24/22"
  }, {
      name:"Amazon",
      date:"01/24/22"
  }, {
      name:"Costco",
      date:"01/24/22"
  }, {
      name:"Amazon",
      date:"01/24/22"
  }, {
      name:"Amazon",
      date:"01/24/22"
  }]

  const recentList = lists.map(({name, date}) => (
      <IonAccordion class="recentitem" value={name} toggleIcon={arrowDownCircle}>
        <IonItem slot="header">
          <IonLabel>{name}</IonLabel>
          <IonLabel>{date}</IonLabel>
        </IonItem>

        <IonItem slot="content">
            <TransactionCard name={name}/>
        </IonItem>
      </IonAccordion>
  ));

  return (
      <IonAccordionGroup class="listitem">
          {recentList}
      </IonAccordionGroup>
  );
};

export default RecentTransactions;

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
import { pricetagsOutline, pricetagsSharp, shirtOutline, shirtSharp, fastFoodOutline, fastFoodSharp, homeOutline, homeSharp, arrowDownCircle, caretUpOutline, searchOutline, personCircleOutline, personCircleSharp, fingerPrintOutline, fingerPrintSharp, timerOutline, timerSharp, cardOutline, cardSharp, cellularOutline, cellularSharp, infiniteOutline, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './CategoriesList.css';

const CategoriesList: React.FC = () => {
  const location = useLocation();

  const lists = [{
      name:"House Rent",
      iosicon:homeOutline,
      mdicon:homeSharp
  }, {
      name:"Restaurants",
      iosicon:fastFoodOutline,
      mdicon:fastFoodSharp
  }, {
      name:"Clothing",
      iosicon:shirtOutline,
      mdicon:shirtSharp
  }, {
      name:"Groceries",
      iosicon:pricetagsOutline,
      mdicon:pricetagsSharp
  }]

  const recentList = lists.map(({name, iosicon, mdicon}) => (
      <IonAccordion class="listitem" value={name} toggleIcon={arrowDownCircle}>
        <IonItem slot="header">
        <IonItem lines="none" detail={false}>
          <IonIcon  ios={iosicon} md={mdicon} />
        </IonItem>
          <IonLabel>{name}</IonLabel>
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

export default CategoriesList;

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
  IonChip
} from '@ionic/react';

import { useState } from "react";



import MenuIcon from '../assets/velvetIcons/menuIcon.svg';
import ModelGraph from './ModelGraph';
import { useLocation } from 'react-router-dom';
import { caretUpOutline, searchOutline, personCircleOutline, personCircleSharp, fingerPrintOutline, fingerPrintSharp, timerOutline, timerSharp, cardOutline, cardSharp, cellularOutline, cellularSharp, infiniteOutline, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './TransactionCard.css';

interface ContainerProps {
  name: string;
}

const TransactionCard: React.FC<ContainerProps> = ({ name }) => {
  const location = useLocation();

  const [cardOpen, setCardOpen] = useState(false);

  const cardClickHandler = () => {
      setCardOpen(!cardOpen);
  }
  var moreInfo = {}

  if (cardOpen === true){
      moreInfo = <div/>
  }else{
      moreInfo = <div/>
  }

  return (
      <IonCard class="modelcard" onClick={cardClickHandler}>
        <IonCardHeader>
          <IonGrid>
            <IonRow>

              <IonCol>
                  <IonCardTitle>{name}</IonCardTitle>
              </IonCol>

             </IonRow>
             <IonRow class="info">
               <IonCol size="6">
                    <IonRow>
                        <IonCardSubtitle>Date:  {"01/24/22"}</IonCardSubtitle>
                    </IonRow>
                    <IonRow>
                        <IonCardSubtitle >Category:  {"Grocery"}</IonCardSubtitle>
                    </IonRow>
               </IonCol>

               <IonCol class="right">
                   <IonRow>
                       <IonCardSubtitle class="right"> Merchant: </IonCardSubtitle>
                       <IonCardSubtitle class="right"> {name} </IonCardSubtitle>
                   </IonRow>
                   <IonRow>
                       <IonCardSubtitle class="right"> Amount: </IonCardSubtitle>
                       <IonCardSubtitle class="right">{"$4789.11"}</IonCardSubtitle>
                   </IonRow>
               </IonCol>
              </IonRow>
              {moreInfo}
          </IonGrid>
        </IonCardHeader>
      </IonCard>
  );
};

export default TransactionCard;

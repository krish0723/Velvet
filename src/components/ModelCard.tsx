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
import './ModelCard.css';

interface ContainerProps {
  name: string;
}

const ModelCard: React.FC<ContainerProps> = ({ name }) => {
  const location = useLocation();

  const [cardOpen, setCardOpen] = useState(false);

  const cardClickHandler = () => {
      setCardOpen(!cardOpen);
  }
  var moreInfo = {}

  if (cardOpen === true){
      moreInfo =
            <IonGrid>
              <IonRow>
                <IonCol>
                    <ModelGraph/>
                </IonCol>
              </IonRow>
              <IonRow>
                  <IonCardTitle>Model Performance</IonCardTitle>
              </IonRow>
              <IonRow class="info">
                <IonCol class="right">
                    <IonRow>
                        <IonCardSubtitle class="right">Avg RMSE:</IonCardSubtitle>
                        <IonCardSubtitle class="right"> 0.0024</IonCardSubtitle>
                    </IonRow>
                    <IonRow>
                        <IonCardSubtitle class="right"> Next Pred Sell: </IonCardSubtitle>
                        <IonCardSubtitle class="right"> 02/02/22 </IonCardSubtitle>
                    </IonRow>
                    <IonRow>
                        <IonCardSubtitle class="right">Confidence:</IonCardSubtitle>
                        <IonCardSubtitle class="right"> 99% </IonCardSubtitle>
                    </IonRow>
                </IonCol>
               </IonRow>
               <IonRow class="ion-justify-content-between">
                   <IonButton color="#fff" expand="block" fill="outline" >View Stock</IonButton>
                   <IonButton color="#fff" expand="block" fill="outline" >Configure</IonButton>
               </IonRow>
            </IonGrid>
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

              <IonCol class="profitright">
                  <IonChip class="modelcardprofit">
                      <IonIcon icon={caretUpOutline} color="success" />
                        <IonLabel>$245.77</IonLabel>
                      <IonIcon/>
                  </IonChip>
              </IonCol>

             </IonRow>
             <IonRow class="info">
               <IonCol>
                    <IonRow>
                        <IonCardSubtitle>Profit:</IonCardSubtitle>
                        <IonCardSubtitle> $245</IonCardSubtitle>
                    </IonRow>
                    <IonRow>
                        <IonCardSubtitle> Trade Window: </IonCardSubtitle>
                        <IonCardSubtitle> 1 week </IonCardSubtitle>
                    </IonRow>
                    <IonRow>
                        <IonCardSubtitle >Current Price:</IonCardSubtitle>
                        <IonCardSubtitle > $420 </IonCardSubtitle>
                    </IonRow>
                    <IonRow>
                        <IonCardSubtitle >Confidence:</IonCardSubtitle>
                        <IonCardSubtitle > 99% </IonCardSubtitle>
                    </IonRow>
               </IonCol>

               <IonCol class="right">
                   <IonRow>
                       <IonCardSubtitle class="right"> Buys: </IonCardSubtitle>
                       <IonCardSubtitle class="right"> 14 </IonCardSubtitle>
                   </IonRow>
                   <IonRow>
                       <IonCardSubtitle class="right"> Sells: </IonCardSubtitle>
                       <IonCardSubtitle class="right"> 7 </IonCardSubtitle>
                   </IonRow>
                   <IonRow>
                       <IonCardSubtitle class="right">Open:</IonCardSubtitle>
                       <IonCardSubtitle class="right"> $400 </IonCardSubtitle>
                   </IonRow>
                   <IonRow>
                       <IonCardSubtitle class="right">Close:</IonCardSubtitle>
                       <IonCardSubtitle class="right"> $420 </IonCardSubtitle>
                   </IonRow>
               </IonCol>
              </IonRow>
              {moreInfo}
          </IonGrid>
        </IonCardHeader>
      </IonCard>
  );
};

export default ModelCard;

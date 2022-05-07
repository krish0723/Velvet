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
  IonSegment,
  IonSegmentButton,
  IonToolbar,
  IonChip
} from '@ionic/react';

import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { useState } from "react";
import { VictoryArea, VictoryChart, VictoryZoomContainer, VictoryLine, VictoryAxis, VictoryBrushContainer } from 'victory';
import { useLocation } from 'react-router-dom';
import { searchOutline, personCircleOutline, personCircleSharp, fingerPrintOutline, fingerPrintSharp, timerOutline, timerSharp, cardOutline, cardSharp, cellularOutline, cellularSharp, infiniteOutline, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './PortfolioGraph.css';

const SpendingGraph: React.FC = () => {
    const location = useLocation();

    const [selectedDomain, setSelectedDomain] = useState();
    const [zoomDomain, setZoomDomain] = useState();
    const [timeFrameSelect, setTimeFrameSelect] = useState(true);
    const timeRangeValue = timeFrameSelect === true ? "TimeFrame" : "Custom";

    const handleZoom = (domain: any) => {
        setSelectedDomain(domain);
    };

    const handleBrush = (domain: any) => {
        setZoomDomain(domain);
    };

    const handleTimeRangeClick = () => {
        setTimeFrameSelect(!timeFrameSelect)
    }

    var timeRange = {}

    if (timeFrameSelect === true) {
        timeRange =
            <IonGrid>
              <IonRow class="date-picker">
                <IonSegment color="white" scrollable={true} onIonChange={e => console.log('Segment selected', e.detail.value)} value="1m">
                  <IonSegmentButton value="1m">
                    <IonLabel>1M</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="3m">
                    <IonLabel>3M</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="6m">
                    <IonLabel>6M</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="1y">
                    <IonLabel>1Y</IonLabel>
                  </IonSegmentButton>
                  <IonSegmentButton value="all">
                    <IonLabel>All</IonLabel>
                  </IonSegmentButton>
                </IonSegment>
              </IonRow>
            </IonGrid>
    }else{
        timeRange =
            <VictoryChart
              padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
              width={600} height={100} scale={{ x: "time" }}
              containerComponent={
                <VictoryBrushContainer
                  brushDimension="x"
                  brushDomain={selectedDomain}
                  onBrushDomainChange={handleBrush}
                />
              }
            >
              <VictoryAxis
                tickFormat={(x) => new Date(x).getFullYear()}
                style={{
                  axis: {
                    stroke: 'white'  //CHANGE COLOR OF Y-AXIS
                  },
                  tickLabels: {
                    fill: 'white' //CHANGE COLOR OF Y-AXIS LABELS
                  },
                  grid: {
                    stroke: 'white', //CHANGE COLOR OF Y-AXIS GRID LINES
                    strokeDasharray: '7',
                  }
                }}
              />
              <VictoryArea
                style={{
                  data: { stroke: "#008c6e",
                            fill: "#00261a"
                    }
                }}
                data={[
                  { key: new Date(1982, 1, 1), b: 125 },
                  { key: new Date(1987, 1, 1), b: 257 },
                  { key: new Date(1993, 1, 1), b: 345 },
                  { key: new Date(1997, 1, 1), b: 515 },
                  { key: new Date(2001, 1, 1), b: 132 },
                  { key: new Date(2005, 1, 1), b: 305 },
                  { key: new Date(2011, 1, 1), b: 270 },
                  { key: new Date(2022, 1, 1), b: 470 }
                ]}
                x="key"
                y="b"
              />
            </VictoryChart>
    }

    return (

        <div overflow-y="auto">
        <IonCard class="portfolio">
        <VictoryChart width={600} height={470} scale={{ x: "time" }}
          containerComponent={
            <VictoryZoomContainer
              zoomDimension="x"
              zoomDomain={zoomDomain}
              onZoomDomainChange={handleZoom}
            />
          }
        >
            <VictoryArea
              style={{
                labels: {
                  fill: 'white' ,
                  stroke:"white",
                },
                data: { stroke: "#008c6e",
                        fill: "#00261a",
                        fillOpacity: 0.7
             }
              }}
              data={[
                { a: new Date(1982, 1, 1), b: 125 },
                { a: new Date(1987, 1, 1), b: 257 },
                { a: new Date(1993, 1, 1), b: 345 },
                { a: new Date(1997, 1, 1), b: 515 },
                { a: new Date(2001, 1, 1), b: 132 },
                { a: new Date(2005, 1, 1), b: 305 },
                { a: new Date(2011, 1, 1), b: 270 },
                { a: new Date(2022, 1, 1), b: 470 }
              ]}
              x="a"
              y="b"
            />

          </VictoryChart>

          <IonGrid class="timelineselectincome">
          <IonRow class="ion-justify-content-between">
          <IonCol class = "incomelinepie" size="5">
              <IonSegment class = "timelineselectincome" color="white" scrollable={true} onIonChange={e => console.log('Segment selected', e.detail.value)} value="line">
                <IonSegmentButton value="line">
                  <IonLabel>line</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="pie">
                  <IonLabel>pie</IonLabel>
                </IonSegmentButton>
              </IonSegment>
          </IonCol>
          <IonCol size="3">
              <IonButton onClick={handleTimeRangeClick} class="timelineselect" expand="block">{timeRangeValue}</IonButton>
          </IonCol>
          </IonRow>
          </IonGrid>
      </IonCard>
      {timeRange}
      </div>
    );
};

export default SpendingGraph;

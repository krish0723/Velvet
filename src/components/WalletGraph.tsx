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
  IonChip,
  IonTitle
} from '@ionic/react';

import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import PureComponent from 'react';
import { useState, useCallback } from "react";
import { VictoryArea, VictoryChart, VictoryZoomContainer, VictoryLine, VictoryAxis, VictoryBrushContainer } from 'victory';
import { useLocation } from 'react-router-dom';
import { walletOutline, podiumOutline, cashOutline, searchOutline, personCircleOutline, personCircleSharp, fingerPrintOutline, fingerPrintSharp, timerOutline, timerSharp, cardOutline, cardSharp, cellularOutline, cellularSharp, infiniteOutline, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './WalletGraph.css';

const WalletGraph: React.FC = (PureComponent) => {
    const location = useLocation();

    const [selectedDomain, setSelectedDomain] = useState();
    const [zoomDomain, setZoomDomain] = useState();
    const [graphSelect, setGraphSelect] = useState("line");
    const [viewOpen, setViewOpen] = useState("Net Worth");
    const [timeFrameSelect, setTimeFrameSelect] = useState(true);
    const timeRangeValue = timeFrameSelect === true ? "TimeFrame" : "Custom";

    const handleZoom = (domain: any) => {
        setSelectedDomain(domain);
    };

    const handleGraphSelect = (val: any) => {
        setGraphSelect(val);
    }

    const handleTimeRangeClick = () => {
        setTimeFrameSelect(!timeFrameSelect)
    }

    const handleNetWorthClick = () => {
        setViewOpen("Net Worth");
    }

    const handleCashToSpendClick = () => {
        setViewOpen("Cash");
    }

    const handleSavingsClick = () => {
        setViewOpen("Savings");
    }

    //pie chart
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
          setActiveIndex(index);
        },
        [setActiveIndex]
      );

    var graph = {}

    if (graphSelect === "line"){
        graph =
        <VictoryChart width={800} height={640} scale={{ x: "time" }}
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
                  fill: 'white',
                  stroke:"white",
                },
                data: { stroke: "#008c6e",
                        fill: "#00261a"
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
    }else if (graphSelect === "pie"){
        var data = [{}];
        if (viewOpen === "Net Worth"){
            data = [
              { name: 'Banks', value: 400},
              { name: 'Stocks', value: 300},
              { name: 'Property', value: 2000},
              { name: 'Clothing', value: 100},
            ];
        }else if (viewOpen === "Cash"){
            data = [
              { name: 'Chase', value: 200},
              { name: 'Venmo', value: 100},
              { name: 'Paypal', value: 200},
              { name: 'BofA', value: 100},
            ];
        }else if (viewOpen === "Savings"){
            data = [
              { name: 'Chase', value: 700},
              { name: 'M1 Finance', value: 2000},
              { name: 'BofA', value: 500},
              { name: 'Charles Schwab', value: 800},
            ];
        }

        const renderActiveShape = (props: any) => {
          const RADIAN = Math.PI / 180;
          const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
          const sin = Math.sin(-RADIAN * midAngle);
          const cos = Math.cos(-RADIAN * midAngle);
          const sx = cx + (outerRadius + 10) * cos;
          const sy = cy + (outerRadius + 10) * sin;
          const mx = cx + (outerRadius + 30) * cos;
          const my = cy + (outerRadius + 30) * sin;
          const ex = mx + (cos >= 0 ? 1 : -1) * 22;
          const ey = my;
          const textAnchor = cos >= 0 ? 'start' : 'end';

          return (
            <g>
              <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"#ffffff"}>
                {payload.name}
              </text>
              <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
              />
              <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}

              />
            </g>
          );
        };
        graph =
        <PieChart width={400} height={220}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={130}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#004d34"
            dataKey="value"
            onClick={onPieEnter}
            label
          />
        </PieChart>

    }

    var timeRange =
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

    return (
        <div>
        <IonGrid class="walletgraph">
        <IonRow className="ion-justify-content-between">

        <IonCol class = "viewtitle"size="4">
            <IonTitle class = "linepieselect">{viewOpen}</IonTitle>
        </IonCol>

        <IonCol class = "linepieselect" size="5">
            <IonSegment class = "timelineselectwallet" color="white" scrollable={true} onIonChange={e => handleGraphSelect(e.detail.value)}>
              <IonSegmentButton value="line">
                <IonLabel>line</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="pie">
                <IonLabel>pie</IonLabel>
              </IonSegmentButton>
            </IonSegment>
        </IonCol>

        </IonRow>

        <IonRow class="walletgraph">
        <IonCol class="viewpicker" size="2.5">
            <IonCard onClick={handleNetWorthClick}button class="cashtospend">
                <IonIcon class="cashtospend" color="white" ios={podiumOutline} md={podiumOutline}></IonIcon>
            </IonCard>
            <IonCard onClick={handleCashToSpendClick} button class="cashtospend">
                <IonIcon class="cashtospend" color="white" ios={cashOutline} md={cashOutline}></IonIcon>
            </IonCard>
            <IonCard onClick={handleSavingsClick} button class="cashtospend">
                <IonIcon class="cashtospend" color="white" ios={walletOutline} md={walletOutline}></IonIcon>
            </IonCard>
        </IonCol>

        <IonCol size="9" class="walletview">
            <IonCard class="walletgraphpie">
                {graph}
            </IonCard>
        </IonCol>
        <IonGrid>
            <IonCol>
                {timeRange}
            </IonCol>
        </IonGrid>
      </IonRow>
      </IonGrid>
      </div>
    );
};

export default WalletGraph;

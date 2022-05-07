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

import { PieChart, Pie, Sector } from 'recharts';
import { useState, useCallback } from "react";
import { VictoryArea, VictoryChart, VictoryZoomContainer, VictoryLine, VictoryAxis, VictoryBrushContainer } from 'victory';
import { useLocation } from 'react-router-dom';
import { searchOutline, personCircleOutline, personCircleSharp, fingerPrintOutline, fingerPrintSharp, timerOutline, timerSharp, cardOutline, cardSharp, cellularOutline, cellularSharp, infiniteOutline, archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './PortfolioGraph.css';

const IncomeGraph: React.FC = () => {
    const location = useLocation();

    const [selectedDomain, setSelectedDomain] = useState();
    const [zoomDomain, setZoomDomain] = useState();
    const [graphSelect, setGraphSelect] = useState("line");
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

    const handleGraphSelect = (val: any) => {
        setGraphSelect(val);
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
                    stroke:"white",
                  fill: 'white' //CHANGE COLOR OF Y-AXIS LABELS
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
        const data = [
          { name: 'Chase', value: 200},
          { name: 'Venmo', value: 100},
          { name: 'Paypal', value: 200},
          { name: 'BofA', value: 100},
        ];

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
        <PieChart width={400} height={289}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx={177}
            cy={135}
            innerRadius={80}
            outerRadius={100}
            fill="#004d34"
            dataKey="value"
            onClick={onPieEnter}
            label
          />
        </PieChart>

    }

    return (

        <div overflow-y="auto">
        <IonCard class="portfolio">
        {graph}

          <IonGrid class="timelineselectincome">
          <IonRow class="ion-justify-content-between">
          <IonCol class = "incomelinepie" size="5">
              <IonSegment class = "timelineselectincome" color="white" scrollable={true} onIonChange={e => handleGraphSelect(e.detail.value)}>
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

export default IncomeGraph;

import { IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import { personCircleOutline } from 'ionicons/icons';
import './Dashboard.css';
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Page: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  return (
    <IonPage>
      <IonHeader class="page-header">
        <IonToolbar>
          <IonButtons slot="start" class="text-white">
            <IonMenuButton />
          </IonButtons>
          <IonButtons slot="end" class="end-wrapper text-white">
            <IonIcon class="person-outline" slot="icon-only" icon={personCircleOutline} />
          </IonButtons>
          <IonTitle class="center text-white">Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="cards-wrapper">
        <IonCard class="no-shadow overview">
          <IonCardContent class="card-content">
           
            
            {/* <div style={{ width: 55, height: 55 }}>
              <CircularProgressbar 
                value={9} 
                text="+9%"
                background 
                strokeWidth={12}
                styles={buildStyles({
                  backgroundColor: "#fff",
                  textColor: "#4777DB",
                  pathColor: "#4777DB",
                  trailColor: "#F7F8FE", 
                  
                })}
              />
            </div> */}
            <div>
              <small>Total Sales Today</small>
              <h1>14,895.25</h1> 
            </div>
          </IonCardContent>
        </IonCard>
        <IonCard class="no-shadow overview r2">
          <IonCardContent class="card-content mb20 ">
          
            
            {/* <div style={{ width: 55, height: 55 }}>
              <CircularProgressbar 
                value={66} 
                text="+25%"
                background
                strokeWidth={12}
                styles={buildStyles({
                  backgroundColor: "#fff",
                  textColor: "#4777DB",
                  pathColor: "#4777DB",
                  trailColor: "#F7F8FE", 
                })}
              />
            </div> */}
            <div>
              <small>Total Inventory Value</small>
              <h1>112,895.25</h1> 
            </div>
          </IonCardContent>
        </IonCard>
        <React.Fragment> 
          <div className="best-selling">
          <h5>Top Selling Products <span className="pull-right text-default">Sold</span></h5> 
            <div className="wrapper">
              
              <div className="top-ranking">
                <h6>Star Margarine <span className="pull-right text-default">125</span></h6> 
              </div>  
              <div className="top-ranking">
                <h6>Shooting Star <span className="pull-right text-default">80</span></h6> 
              </div>  
              <div className="top-ranking">
                <h6>Asus OVE52 Nitor King <span className="pull-right text-default">66</span></h6> 
              </div>  
              <div className="top-ranking">
                <h6>Solution never ending <span className="pull-right text-default">55</span></h6> 
              </div>  
              <div className="top-ranking">
                <h6>Pen of lucy <span className="pull-right text-default">44</span></h6> 
              </div>  
              <a>View All</a>
            </div>
          </div> 
        </React.Fragment>
      </IonContent>

    </IonPage>
  );
};

export default Page;

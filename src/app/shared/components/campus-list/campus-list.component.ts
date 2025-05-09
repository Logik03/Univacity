import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonImg, IonButton, IonIcon, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonItem, IonLabel, IonGrid, IonCol, IonRow, IonList } from '@ionic/angular/standalone';
import { ListItem } from 'src/app/core/models/program';

@Component({
  selector: 'app-campus-list',
  templateUrl: './campus-list.component.html',
  styleUrls: ['./campus-list.component.scss'],
  standalone: true,
  imports: [IonList,  IonItem, CommonModule, FormsModule, IonIcon, IonLabel]
})
export class CampusListComponent  implements OnInit {

  @Input() items: ListItem[] = [];
  constructor() { }

  ngOnInit() {}

}

import { Component, Input, OnInit } from '@angular/core';
import { InfoItem } from 'src/app/core/models/program';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonImg, IonButton, IonIcon, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonItem, IonLabel, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { sparklesOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-program-info-grid',
  templateUrl: './program-info-grid.component.html',
  styleUrls: ['./program-info-grid.component.scss'],
  standalone: true,
  imports: [IonRow, IonCol, IonGrid, IonCard, IonCardContent, CommonModule, FormsModule, IonIcon]
})
export class ProgramInfoGridComponent  implements OnInit {

  @Input() items: InfoItem[] = [];

  constructor() { 
    addIcons({ sparklesOutline });
  }

  ngOnInit() {}

}

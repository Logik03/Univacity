import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonCard, IonImg, IonButton, IonIcon, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonItem, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, eyeOutline, flagOutline, heartOutline, schoolOutline, shareSocialOutline, trendingUpOutline } from 'ionicons/icons';
import { Program } from 'src/app/core/models/program';

@Component({
  selector: 'app-program-details-card',
  templateUrl: './program-details-card.component.html',
  styleUrls: ['./program-details-card.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonText, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonButton, IonCard, CommonModule, FormsModule]
})
export class ProgramDetailsCardComponent  implements OnInit {

  @Input() programs!: Program;
  @Output() backClicked = new EventEmitter<boolean>();

  constructor() { 
    addIcons({ chevronBackOutline,heartOutline, shareSocialOutline, schoolOutline, flagOutline, eyeOutline, trendingUpOutline, });
  }

  ngOnInit() {}

  goBack() {
    this.backClicked.emit(true);
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButton, IonIcon, IonCol, IonGrid, IonRow  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, flagOutline, languageOutline, libraryOutline, timeOutline, shieldCheckmarkOutline, schoolOutline, shareOutline, heartOutline, shareSocialOutline } from 'ionicons/icons';
import { Program } from 'src/app/core/models/program';

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss'],
  standalone: true,
  imports: [IonIcon,IonCard, IonCardContent,IonCol, IonGrid, IonRow ]
})
export class ProgramCardComponent  implements OnInit {
  @Input() programs: Program[] = [];
  @Output() cardClicked = new EventEmitter<Program>();

  constructor() {
    addIcons({shieldCheckmarkOutline,schoolOutline,flagOutline,libraryOutline,timeOutline,calendarOutline,languageOutline,shareSocialOutline,heartOutline,shareOutline});
   }

  ngOnInit() {}

  onCardClicked(program: Program) {
    this.cardClicked.emit(program);
  }

}

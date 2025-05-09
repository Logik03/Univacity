import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonImg, IonButton, IonIcon, IonCardTitle, IonCardHeader, IonCardContent, IonText, IonItem, IonLabel, IonGrid, IonCol, IonRow, IonList } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { alertCircleOutline, checkmarkDoneOutline, checkmarkOutline, chevronDownOutline, chevronUpOutline } from 'ionicons/icons';
import { ListItem } from 'src/app/core/models/program';

@Component({
  selector: 'app-expandable-section',
  templateUrl: './expandable-section.component.html',
  styleUrls: ['./expandable-section.component.scss'],
  standalone: true,
  imports: [IonList, IonCard, IonItem,IonCardContent, IonButton, CommonModule, FormsModule, IonIcon, IonLabel]
})
export class ExpandableSectionComponent  implements OnInit {

  @Input() contentType: 'text' | 'list' = 'text';
  @Input() headerText?: string;
  @Input() text?: string;
  @Input() listItems?: ListItem[];
  @Input() truncateAt: number = 215;
  truncatedText: string = '';
  isExpanded = signal(false);

  
  constructor() {
    addIcons({ chevronUpOutline, chevronDownOutline, checkmarkDoneOutline,alertCircleOutline });
   }

  ngOnInit() {
    this.createTruncatedText();
  }

  createTruncatedText() {
    if (this.text) {
      if (this.text.length <= this.truncateAt) {
        this.truncatedText = this.text;
      } else {
        // Find the last space before the truncation point to avoid cutting words in half
        const lastSpace = this.text.substring(0, this.truncateAt).lastIndexOf(' ');
        const truncatePoint = lastSpace > 0 ? lastSpace : this.truncateAt;
        this.truncatedText = this.text.substring(0, truncatePoint) + '...';
      }
    }
  }


  toggleExpand() {
    this.isExpanded.update(value => !value);
  }

}

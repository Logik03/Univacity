import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonButton, IonIcon } from '@ionic/angular/standalone'
import { addIcons } from 'ionicons';
import { filterOutline, funnel } from 'ionicons/icons';

@Component({
  selector: 'app-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss'],
  standalone: true,
  imports: [IonIcon,  IonButton]
})
export class SortButtonComponent  implements OnInit {

  @Output() sortClicked = new EventEmitter<void>();


  constructor() { 
    addIcons({funnel,filterOutline});
  }

  ngOnInit() {}



  onSortClick() {
    this.sortClicked.emit();
  }

}

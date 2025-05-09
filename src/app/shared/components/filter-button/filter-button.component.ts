import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonButton, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { funnelOutline } from 'ionicons/icons';

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss'],
  standalone: true,
  imports: [IonIcon,  IonButton]
})
export class FilterButtonComponent  implements OnInit {


  @Input() filterCount: number = 0;
  @Output() filterClicked = new EventEmitter<boolean>();

  
  constructor() {
    addIcons({ funnelOutline});
   }

  ngOnInit() {}

  onFilterClick() {
    this.filterClicked.emit(true);
  }

}

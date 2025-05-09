import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonToolbar, IonTitle, IonBackButton, IonButtons, IonButton, IonItem, IonLabel, IonIcon, IonInput } from "@ionic/angular/standalone";
import { SortButtonComponent } from '../sort-button/sort-button.component';
import { FilterButtonComponent } from '../filter-button/filter-button.component';
import { addIcons } from 'ionicons';
import { chevronDownOutline, searchOutline } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss'],
  standalone: true,
  imports: [IonToolbar, IonTitle, IonBackButton, IonButtons,IonItem, IonLabel, IonIcon, SortButtonComponent, FilterButtonComponent, CommonModule, FormsModule, ]
})
export class SearchHeaderComponent  implements OnInit {


  @Input() subject: string = '';
  @Input() filterCount: number = 0; 

  @Output() filterClicked = new EventEmitter<boolean>();
  @Output() sortClicked = new EventEmitter<boolean>();
  selectedStudy = 'Computer Technologies';

  constructor() {
    addIcons({searchOutline,chevronDownOutline});
   }

  ngOnInit() {}

  onFilterClicked() {
    this.filterClicked.emit(true);
  }
  
  onSortClicked() {
    this.sortClicked.emit(true);
  }

}

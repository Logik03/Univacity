import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { closeCircle, closeOutline } from 'ionicons/icons';
import { Tag } from 'src/app/core/models/program';

@Component({
  selector: 'app-pill-buttons',
  templateUrl: './pill-buttons.component.html',
  styleUrls: ['./pill-buttons.component.scss'],
  standalone: true,
  imports: [IonIcon]
})
export class PillButtonsComponent  implements OnInit {

  @Input() tags: Tag[] = [];
  @Output() removeClicked = new EventEmitter<Tag>();
  
  
  constructor() { 
    addIcons({closeOutline,closeCircle});
  }

  ngOnInit() {}

  removeTag(tag : Tag ) {
    const tagData: Tag = {
      id: tag?.id,
      label:tag?.label,
    };
    this.removeClicked.emit(tagData);
  }

}

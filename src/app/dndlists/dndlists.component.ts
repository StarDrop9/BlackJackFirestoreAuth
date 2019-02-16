import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'dndlists',
  templateUrl: './dndlists.component.html',
  styleUrls: ['./dndlists.component.scss']
})
export class DndlistsComponent {todo = [
  'Get to work',
  'Pick up groceries',
  'Go home',
  'Fall asleep'
];

done = [
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Check e-mail',
  'Walk dog'
];

drop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  } else {
    transferArrayItem(event.previousContainer.data,
                      event.container.data,
                      event.previousIndex,
                      event.currentIndex);
  }
}

}

import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lists = [
    { title: 'List 1', headerBorderColor: '#ddd', tasks: [
      {
        title: 'Task 1', 
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        labels: [
          {title: 'Work on', color: '#debd00', textColor: '#333'},
          {title: 'Bug', color: '#cd0000', textColor: '#fff'},
        ],
        subscribers: [1, 2]
      },
      {
        title: 'Task 2', 
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        labels: [
          {title: 'Discussion', color: '#debd00', textColor: '#333'},
        ],
        subscribers: [1, 2, 3]
      }
      ]},
    { title: 'List 2', headerBorderColor: '#ccc', tasks: [
      {
        title: 'Task 3', 
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        labels: [
          {title: 'In test', color: '#0c4599', textColor: '#fff'},
        ],
        subscribers: [4]
      }, 
      {
        title: 'Task 4', 
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        labels: [
          {title: 'High', color: '#cd0000', textColor: '#fff'},
          {title: 'In test', color: '#0c4599', textColor: '#fff'},
        ],
        subscribers: [3, 4]
      }
    ] },
    { title: 'List 3', headerBorderColor: '#333', tasks: [
      {
        title: 'Task 5', 
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        labels: [
          {title: 'Work on', color: '#debd00', textColor: '#333'},
          {title: 'High', color: '#cd0000', textColor: '#fff'},
        ],
        subscribers: [1, 4]
      }
    ] },
    { title: 'List 4', headerBorderColor: '#747474', tasks: [
      {
        title: 'Task 6', 
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        labels: [
          {title: 'Work on', color: '#debd00', textColor: '#333'},
          {title: 'In test', color: '#0c4599', textColor: '#fff'},
        ],
        subscribers: [2, 3]
      }, 
      {
        title: 'Task 7', 
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        labels: [
          {title: 'Work on', color: '#debd00', textColor: '#333'},
          {title: 'High', color: '#cd0000', textColor: '#fff'},
        ],
        subscribers: [1, 2]
      }
    ] },
    { title: 'List 5', headerBorderColor: '#ff0000', tasks: [
      {
        title: 'Task 8', 
        description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat',
        labels: [
          {title: 'Work on', color: '#debd00', textColor: '#333'},
          {title: 'High', color: '#cd0000', textColor: '#fff'},
        ],
        subscribers: [1, 3]
      }
    ] }
  ];

  drop(event: CdkDragDrop<any[]>) {
    console.log(event.previousContainer.id , event);
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}

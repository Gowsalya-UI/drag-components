import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DragService } from '../data/drag-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-drag-list',
  templateUrl: './drag-list.component.html',
  styleUrls: ['./drag-list.component.css']
})
export class DragListComponent implements OnInit {
  dragList: any = [];
  draggedItems =[];
  subscription: Subscription;
  constructor(private dragService: DragService) { }

  ngOnInit(): void {
    this.subscription = this.dragService.getUiLists().subscribe((data) => this.dragList = data);
  }

  drop(event: CdkDragDrop<string[]>) {
    this.draggedItems =[];
    this.draggedItems.push(this.dragList[event.previousIndex]);
  }

  ngOnDestroy() {    
    this.subscription.unsubscribe();
  }
}

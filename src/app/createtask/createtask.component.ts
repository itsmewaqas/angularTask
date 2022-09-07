import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css'],
  template: ``
})
export class CreatetaskComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectRow(item: any) {
    console.log(item);
    this.router.navigate(
      ['/taskdetail'],
      { queryParams: { id: item.id } }
    );
    localStorage.setItem('item', JSON.stringify(item));
  }

  taskList: any[] = [
    {
      id: 1,
      taskName: 'waqas',
      taskDescription: 'web task',
      startDate: '02-05-2022',
      endDate: '05-06-2022',
      assignee: 'bilal',
    },
    {
      id: 2,
      taskName: 'alber',
      taskDescription: 'design task',
      startDate: '03-05-2022',
      endDate: '15-06-2022',
      assignee: 'fahad',
    },
    {
      id: 3,
      taskName: 'jawad',
      taskDescription: 'mobile task',
      startDate: '08-05-2022',
      endDate: '18-06-2022',
      assignee: 'junaid',
    },
    {
      id: 4,
      taskName: 'waseem',
      taskDescription: 'qa task',
      startDate: '01-05-2022',
      endDate: '09-06-2022',
      assignee: 'hammad',
    },
    {
      id: 5,
      taskName: 'zeeshan',
      taskDescription: 'mobile task',
      startDate: '14-05-2022',
      endDate: '25-06-2022',
      assignee: 'moiz',
    }
  ];

  addTask(taskName: any, taskDescription: any, startDate: any, endDate: any, assignee: any) {
    if (taskName != '' &&
      taskDescription != '' &&
      startDate != '' &&
      endDate != '' &&
      assignee != '') {
      var taskObj = {
        id: this.taskList.length + 1,
        taskName,
        taskDescription,
        startDate,
        endDate,
        assignee
      }
      this.taskList.unshift(taskObj);
      console.log('updated tasks', this.taskList);
      localStorage.setItem("getArray", JSON.stringify(this.taskList));
    }
    else {
    }

  }

}

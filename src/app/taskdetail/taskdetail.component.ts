import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import taskList from '../taskList';

@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.css']
})
export class TaskdetailComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams
      .subscribe(params => {
        console.log(params);

        var tasks: string | null = localStorage.getItem("getArray");

        if (tasks != null) {
          var tasksArray: [any] = JSON.parse(tasks);
          var id = params.id;
          let foundTask = (tasksArray || []).find((user: any) => user.id == id);
          console.log(foundTask);
        }
      }
      );
  }

}

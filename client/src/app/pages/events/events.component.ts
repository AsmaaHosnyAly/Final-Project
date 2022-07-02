import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
   events:any;
  constructor(private global:GlobalService) {
    this.global.getEvents().subscribe(data=>this.events=data.data)
   }

  ngOnInit(): void {
  }

}

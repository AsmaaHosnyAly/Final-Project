import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {


   id:any
   singleEvent:any
   constructor(private activated : ActivatedRoute , private global :GlobalService) {
     this.id = activated.snapshot.paramMap.get("eventId")
     console.log(this.id)
     this.global.getManyService().subscribe(data=>{
       console.log(data)
       this.singleEvent = data
     })
    }

  ngOnInit(): void {
  }

}

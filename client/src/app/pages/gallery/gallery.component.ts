import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  data:any
  loadingFlag:boolean = false
  constructor(private global:GlobalService) { }

  ngOnInit(): void {
    this.global.getAllService().subscribe(data=>{
      this.data = data.data
    },(err)=>{
      console.log(err)
    },()=>{
      this.loadingFlag = true
    })
  }

}

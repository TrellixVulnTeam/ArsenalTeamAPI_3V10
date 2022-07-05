import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-position',
  templateUrl: './show-position.component.html',
  styleUrls: ['./show-position.component.css']
})
export class ShowPositionComponent implements OnInit {

  constructor(private service:SharedService) { }

  PositionList:any=[]

  ngOnInit(): void {
    this.refreshPositionList();
  }

  refreshPositionList() {
    this.service.getPositionList().subscribe(data=>{
      this.PositionList=data;
    })
  }

}

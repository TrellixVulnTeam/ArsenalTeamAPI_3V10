import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-squad',
  templateUrl: './show-squad.component.html',
  styleUrls: ['./show-squad.component.css']
})
export class ShowSquadComponent implements OnInit {

  constructor(private service:SharedService) { }

  SquadList:any=[]

  ngOnInit(): void {
    this.refreshSquadList();
  }

  refreshSquadList() {
    this.service.getSquadList().subscribe(data=>{
      this.SquadList=data;
    })
  }

}

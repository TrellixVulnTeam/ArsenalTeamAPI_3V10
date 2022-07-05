import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.css']
})
export class ShowPlayerComponent implements OnInit {

  constructor(private service:SharedService) {
  }

  PlayerList:any=[]

  ModalTitle: string | undefined;
  ActivateAddEditPlayerComp:boolean=false;
  player:any;

  ngOnInit(): void {
    this.refreshPlayerList();
  }

  addClick(){
    this.player = {
      PlayerId:0,
      PlayerName:"",
      PlayerNumber:"",
      PlayerPosition:"",
      DateOfBirth:"",
      PlayerNationality:"",
      PlayerSquad:"0",
      PlayerApps:"0",
      PlayerGoals:"0",
      PlayerAssists:"0",
      PlayerCleanSheets:"0",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Player";
    this.ActivateAddEditPlayerComp = true;
  }

  editClick(item: any){
    this.player=item;
    this.ModalTitle="Edit Player";
    this.ActivateAddEditPlayerComp=true;
  }

  deleteClick(item: any){
    if(confirm('Are: you sure??')){
      this.service.deletePlayer(item.PlayerId).subscribe(data=>{
        alert(data.toString());
        this.refreshPlayerList();
      })
    }
  }

  closeClick() {
    this.ActivateAddEditPlayerComp = false;
    this.refreshPlayerList();
  }

  refreshPlayerList() {
    this.service.getPlayerList().subscribe(data=>{
      this.PlayerList=data;
    })
  }

}

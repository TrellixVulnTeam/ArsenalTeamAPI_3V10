import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.css']
})
export class AddEditPlayerComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() player:any;
  PlayerId!: string;
  PlayerName!: string;
  PlayerNumber!: string;
  PlayerPosition!: string;
  DateOfBirth!: string;
  PlayerNationality!: string;
  PlayerSquad!: string;
  PlayerAppearances!: string;
  PlayerGoals!: string;
  PlayerAssists!: string;
  PlayerCleanSheets!: string;
  PhotoFileName!: string;
  PhotoFilePath!: string;

  PositionsList:any=[];
  SquadsList:any=[];


  ngOnInit(): void {
    this.loadPlayerList();
  }

  loadPlayerList(){
    this.service.getAllSquadNames().subscribe((data:any) => {
      this.PositionsList=data;
      this.SquadsList=data;
      
    this.PlayerId=this.player.PlayerId; 
    this.PlayerName=this.player.PlayerName; this.PlayerNumber=this.player.PlayerNumber; this.PlayerPosition=this.player.PlayerPosition;
    this.DateOfBirth=this.player.DateOfBirth; this.PlayerNationality=this.player.PlayerNationality; this.PlayerSquad=this.player.PlayerSquad; 
    this.PlayerAppearances=this.player.PlayerAppearances; this.PlayerGoals=this.player.PlayerGoals; this.PlayerAssists=this.player.PlayerAssists; this.PlayerCleanSheets=this.player.PlayerCleanSheets; 
    this.PhotoFileName=this.player.PhotoFileName; this.PhotoFilePath = this.service.PhotoUrl+this.PhotoFileName;
    })
  }

  addPlayer(){
    var val = {
      PlayerId:this.PlayerId, 
      PlayerName:this.PlayerName, PlayerNumber:this.PlayerNumber, PlayerPosition:this.PlayerPosition, DateOfBirth:this.DateOfBirth, PlayerNationality:this.PlayerNationality, 
      PlayerSquad:this.PlayerSquad, PlayerAppearances:this.PlayerAppearances, PlayerGoals:this.PlayerGoals, PlayerAssists:this.PlayerAssists, 
      PlayerCleanSheets:this.PlayerCleanSheets, PhotoFileName:this.PhotoFileName};
    this.service.addPlayer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePlayer(){
    var val = {
      DepartmentName:this.PlayerName};
    this.service.updatePlayer(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event:any){
    var file=event.target.files[0];
    const formData:FormData = new FormData();
    formData.append('uploadedFile', file, file.name);
    this.service.UploadPhoto(formData).subscribe((data:any)=> {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.PhotoUrl+this.PhotoFileName;
    })
  }
}

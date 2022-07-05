import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquadComponent } from './squad/squad.component';
import { ShowSquadComponent } from './squad/show-squad/show-squad.component';
import { PositionComponent } from './position/position.component';
import { ShowPositionComponent } from './position/show-position/show-position.component';  
import { PlayerComponent } from './player/player.component';
import { AddEditPlayerComponent } from './player/add-edit-player/add-edit-player.component';
import { ShowPlayerComponent } from './player/show-player/show-player.component';
import {SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    SquadComponent,
    ShowSquadComponent,
    PositionComponent,
    ShowPositionComponent,
    PlayerComponent,
    AddEditPlayerComponent,
    ShowPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

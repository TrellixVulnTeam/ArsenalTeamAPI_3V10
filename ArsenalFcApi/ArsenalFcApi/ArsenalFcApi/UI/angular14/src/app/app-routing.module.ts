import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { SquadComponent } from './squad/squad.component';
import { PositionComponent } from './position/position.component';

import {} from './player/player.component'

const routes: Routes = [
  {path:'player', component:PlayerComponent},
  {path:'squad', component:SquadComponent},
  {path:'position', component:PositionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PipelineAnimationComponent } from './pipeline-animation.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, PipelineAnimationComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}

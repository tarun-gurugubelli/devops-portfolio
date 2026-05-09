import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipeline-animation',
  imports: [CommonModule],
  templateUrl: './pipeline-animation.component.html',
})
export class PipelineAnimationComponent implements OnInit, OnDestroy {
  activeStage = signal(0);
  private interval: ReturnType<typeof setInterval> | null = null;

  readonly stages = [
    { label: 'Develop', icon: 'code' },
    { label: 'Scan', icon: 'search' },
    { label: 'Build', icon: 'package' },
    { label: 'Store', icon: 'box' },
    { label: 'Deploy', icon: 'cloud' },
  ];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.activeStage.update(v => (v + 1) % 5);
    }, 2000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}

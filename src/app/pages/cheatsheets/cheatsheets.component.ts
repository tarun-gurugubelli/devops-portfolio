import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheatsheetsService } from '../../services/cheatsheets.service';
import { Cheatsheet } from '../../models/cheatsheet.model';

@Component({
  selector: 'app-cheatsheets',
  imports: [CommonModule],
  templateUrl: './cheatsheets.component.html',
})
export class CheatsheetsComponent implements OnInit {
  private service = inject(CheatsheetsService);

  cheatsheets = signal<Cheatsheet[]>([]);
  activeModal = signal<Cheatsheet | null>(null);
  activeTab = signal<string>('');
  copiedCommand = signal<string | null>(null);

  ngOnInit() {
    this.service.getCheatsheets().subscribe(data => this.cheatsheets.set(data));
  }

  openModal(cheatsheet: Cheatsheet) {
    this.activeModal.set(cheatsheet);
    this.activeTab.set(cheatsheet.categories[0].name);
    this.copiedCommand.set(null);
  }

  closeModal() {
    this.activeModal.set(null);
  }

  setTab(name: string) {
    this.activeTab.set(name);
  }

  currentCommands() {
    const modal = this.activeModal();
    if (!modal) return [];
    return modal.categories.find(c => c.name === this.activeTab())?.commands ?? [];
  }

  async copyCommand(cmd: string) {
    try {
      await navigator.clipboard.writeText(cmd);
      this.copiedCommand.set(cmd);
      setTimeout(() => this.copiedCommand.set(null), 2000);
    } catch {}
  }
}

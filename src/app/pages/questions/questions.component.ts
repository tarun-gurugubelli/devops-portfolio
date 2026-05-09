import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';
import { QuestionCategory } from '../../models/questions.model';

@Component({
  selector: 'app-questions',
  imports: [CommonModule],
  templateUrl: './questions.component.html',
})
export class QuestionsComponent implements OnInit {
  private questionsService = inject(QuestionsService);
  private route = inject(ActivatedRoute);

  questions = signal<QuestionCategory[]>([]);
  activeCategory = signal<string | null>(null);
  openItems = signal<Set<string>>(new Set());

  ngOnInit() {
    this.questionsService.getQuestions().subscribe(data => {
      this.questions.set(data);
      // Handle initial fragment after data loads
      this.route.fragment.subscribe(fragment => {
        if (fragment) {
          this.activeCategory.set(fragment);
          setTimeout(() => this.scrollToSection(fragment), 100);
        }
      });
    });
  }

  scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  }

  toggleItem(key: string) {
    this.openItems.update(set => {
      const next = new Set(set);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  }

  isOpen(key: string): boolean {
    return this.openItems().has(key);
  }
}

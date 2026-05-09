import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  formData = signal({ name: '', email: '', subject: '', message: '' });

  updateField(field: string, value: string) {
    this.formData.update(d => ({ ...d, [field]: value }));
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const d = this.formData();
    const body = [`Name: ${d.name}`, `Email: ${d.email}`, '', d.message].join('\n');
    const subject = encodeURIComponent(d.subject || 'DevOps Knowledge Board contact');
    window.location.href = `mailto:tarungurugubelli@outlook.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-modules',
  imports: [RouterLink],
  templateUrl: './modules.component.html',
})
export class ModulesComponent {
  readonly categories = [
    { title: 'Docker', icon: 'help-circle', description: 'Simplifies application deployment with containers.', href: '/questions#docker' },
    { title: 'Kubernetes', icon: 'search', description: 'Automates container orchestration and management.', href: '/questions#kubernetes' },
    { title: 'Linux', icon: 'users', description: 'Open-source OS powering servers and devices.', href: '/questions#linux' },
    { title: 'Shell Scripting', icon: 'book', description: 'Automates tasks via command line scripts.', href: '/questions#shell-script' },
    { title: 'CI/CD', icon: 'library', description: 'Streamlines code integration and deployment processes.', href: '/questions#ci-cd' },
    { title: 'Git, GitHub & GitLab', icon: 'help-circle', description: 'Version control for collaborative software development.', href: '/questions#git' },
    { title: 'AWS', icon: 'search', description: 'Comprehensive cloud services for scalable applications.', href: '/questions#aws' },
    { title: 'Ansible', icon: 'users', description: 'Automation tool for configuration management tasks.', href: '/questions#linux' },
    { title: 'Jenkins', icon: 'book', description: 'Automates CI/CD for efficient software delivery.', href: '/questions#jenkins' },
    { title: 'Security & Monitoring', icon: 'library', description: 'Ensures system integrity and performance oversight.', href: '/questions#security-monitoring' },
    { title: 'Managerial Questions', icon: 'library', description: 'Evaluates leadership skills and decision-making abilities.', href: '/questions#managerial' },
    { title: 'Contact Support', icon: 'contact', description: 'Get in touch with our support team', href: '/contact' },
  ];
}

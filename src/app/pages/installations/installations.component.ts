import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Installation } from '../../models/installation.model';

@Component({
  selector: 'app-installations',
  imports: [CommonModule],
  templateUrl: './installations.component.html',
})
export class InstallationsComponent {
  activeModal = signal<Installation | null>(null);
  activeTab = signal<string>('');
  copiedIndex = signal<number | null>(null);

  readonly installations: Installation[] = [
    {
      title: 'Docker', icon: 'docker',
      description: 'Container platform for building, shipping, and running applications',
      steps: [
        { os: 'Ubuntu', commands: ['sudo apt update', 'sudo apt install docker.io', 'sudo systemctl start docker', 'sudo systemctl enable docker'] },
        { os: 'MacOS', commands: ['brew install docker', 'open /Applications/Docker.app'] },
        { os: 'Windows', commands: ['# Download Docker Desktop from:', 'https://www.docker.com/products/docker-desktop', '# Run the installer', '# Start Docker Desktop'] },
      ],
    },
    {
      title: 'Jenkins', icon: 'box',
      description: 'Open source automation server for building, testing, and deploying',
      steps: [
        { os: 'Ubuntu', commands: ['sudo apt update', 'sudo apt install openjdk-11-jdk', "wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -", "sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'", 'sudo apt update', 'sudo apt install jenkins', 'sudo systemctl start jenkins'] },
        { os: 'Docker', commands: ['docker run -d -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts'] },
      ],
    },
    {
      title: 'Git', icon: 'git',
      description: 'Distributed version control system for tracking changes in source code',
      steps: [
        { os: 'Ubuntu', commands: ['sudo apt update', 'sudo apt install git'] },
        { os: 'MacOS', commands: ['brew install git'] },
        { os: 'Windows', commands: ['# Download Git from:', 'https://git-scm.com/download/win', '# Run the installer'] },
      ],
    },
    {
      title: 'Node.js', icon: 'terminal',
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
      steps: [
        { os: 'Ubuntu', commands: ['curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -', 'sudo apt install -y nodejs'] },
        { os: 'MacOS', commands: ['brew install node'] },
        { os: 'Windows', commands: ['# Download Node.js from:', 'https://nodejs.org/', '# Run the installer'] },
      ],
    },
    {
      title: 'PostgreSQL', icon: 'database',
      description: 'Advanced open source relational database',
      steps: [
        { os: 'Ubuntu', commands: ['sudo apt update', 'sudo apt install postgresql postgresql-contrib', 'sudo systemctl start postgresql', 'sudo systemctl enable postgresql'] },
        { os: 'MacOS', commands: ['brew install postgresql', 'brew services start postgresql'] },
        { os: 'Windows', commands: ['# Download PostgreSQL from:', 'https://www.postgresql.org/download/windows/', '# Run the installer'] },
      ],
    },
    {
      title: 'Kubernetes', icon: 'cloud',
      description: 'Container orchestration platform for automating deployment and scaling',
      steps: [
        { os: 'Ubuntu', commands: ['sudo apt update', 'sudo apt install -y apt-transport-https ca-certificates curl', 'curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -', "echo 'deb https://apt.kubernetes.io/ kubernetes-xenial main' | sudo tee /etc/apt/sources.list.d/kubernetes.list", 'sudo apt update', 'sudo apt install -y kubelet kubeadm kubectl', 'sudo apt-mark hold kubelet kubeadm kubectl'] },
        { os: 'MacOS', commands: ['brew install kubectl', 'brew install minikube'] },
      ],
    },
  ];

  openModal(installation: Installation) {
    this.activeModal.set(installation);
    this.activeTab.set(installation.steps[0].os);
    this.copiedIndex.set(null);
  }

  closeModal() {
    this.activeModal.set(null);
  }

  setTab(os: string) {
    this.activeTab.set(os);
    this.copiedIndex.set(null);
  }

  async copyCommand(text: string, index: number) {
    try {
      await navigator.clipboard.writeText(text);
      this.copiedIndex.set(index);
      setTimeout(() => this.copiedIndex.set(null), 2000);
    } catch {}
  }

  currentStepCommands(): string[] {
    const modal = this.activeModal();
    if (!modal) return [];
    return modal.steps.find(s => s.os === this.activeTab())?.commands ?? [];
  }
}

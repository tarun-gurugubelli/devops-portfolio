export interface InstallationStep {
  os: string;
  commands: string[];
}

export interface Installation {
  title: string;
  icon: string;
  description: string;
  steps: InstallationStep[];
}

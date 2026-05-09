export interface CheatsheetCommand {
  command: string;
  description: string;
}

export interface CheatsheetCategory {
  name: string;
  commands: CheatsheetCommand[];
}

export interface Cheatsheet {
  title: string;
  icon: string;
  description: string;
  categories: CheatsheetCategory[];
}

export interface CheatsheetData {
  cheatsheets: Cheatsheet[];
}

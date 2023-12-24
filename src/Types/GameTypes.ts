export interface ICategory {
    id: number;
    name: string;
  }

  export interface IGame {
    name: string;
    description: string;
    code: string;
    icon: string;
    categoryIds: number[];
  }
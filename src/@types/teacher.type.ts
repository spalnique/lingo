export enum Languages {
  English = 'English',
  Spanish = 'Spanish',
  French = 'French',
  German = 'German',
  Mandarin = 'Mandarin Chinese',
  Italian = 'Italian',
  Korean = 'Korean',
  Vietnamese = 'Vietnamese',
}

export enum LanguageLevels {
  A1 = 'A1 Beginner',
  A2 = 'A2 Elementary',
  B1 = 'B1 Intermediate',
  B2 = 'B2 Upper-Intermediate',
  C1 = 'C1 Advanced',
  C2 = 'C2 Proficient',
}

export type Review = {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
};

export type Teacher = {
  avatar_url: string;
  conditions: string[];
  experience: string;
  languages: Languages[];
  lesson_info: string;
  lessons_done: number;
  levels: LanguageLevels[];
  name: string;
  price_per_hour: number;
  rating: number;
  reviews: Review[];
  surname: string;
};

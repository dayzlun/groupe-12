export const enum Award {
  beginner = 'beginner',
  amateur = 'amateur',
  pro = 'pro',
  expert = 'expert',
  superhero = 'superhero'
}

export type DurationWalked = {
  userid: string;
  duration: number;
  award: Award;
};

export type DistanceWalked = {
  userid: string;
  distance: number;
  award: Award;
};

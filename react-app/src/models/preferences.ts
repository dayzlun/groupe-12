export const enum HikerAgeRange {
    none = "no preferences",
    minor = "-18",
    youth = "18-29",
    thirties = "30-40",
    aboveForty = "40+"
}

export type UserPreferences = {
    userid: string;
    elevationGain: number;
    otherHikersAge: HikerAgeRange;
    avgHikeDuration: number;
}
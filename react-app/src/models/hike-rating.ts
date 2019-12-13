export type HikeRating = {
    hikeid: string;
    // Number of people who gave a rate for this hike
    numberOfRaters: number; 
    rating: number; // from 0 - 5 stars
}
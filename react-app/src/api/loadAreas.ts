import { Area } from "../models/area";
import { Observable, from } from "rxjs";
import { delay } from "./common";
import { mockedAreas } from "../area/reducer";

export const loadAreas = (): Observable<{areas: Area[]}> => {
    const fetchAreas = async () => {
        await delay(2000);
        return {areas: mockedAreas}
    }
    return from(fetchAreas());
}
import { User } from "./user";

export type HikerGroup = {
    groupid: string;
    members: User[];
    title: string;
}
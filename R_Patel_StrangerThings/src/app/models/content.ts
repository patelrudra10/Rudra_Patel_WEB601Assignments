import { Optional } from "@angular/core";
export interface Content {
    id: number | null;
    title : string;
    body? : string;
    author : string;
    imageLink? : string;
    type : string;
    hashtag? : string[];
}

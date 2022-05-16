export interface Content {
    readonly id: number,
    title: string,
    body?: string,
    author: string,
    imageLink?: string,
    type: string,
    hashtags?: [],
}

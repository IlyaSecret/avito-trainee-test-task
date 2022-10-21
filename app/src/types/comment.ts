export type Comment = {
    id: string | undefined
    by: string,
    text: string,
    show: boolean,
    time: number,
    kids: any[]
}
export type ISubComments = {
    id: number,
    by: string,
    text: string
}
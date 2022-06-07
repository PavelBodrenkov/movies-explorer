export class CreateCommentDto {
    readonly body: string;
    readonly parent?: string;
    readonly movie: string
}
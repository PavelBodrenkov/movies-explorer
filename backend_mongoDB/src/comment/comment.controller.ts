import { Body, Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createComment(@Body() commentDto: CreateCommentDto, @Request() req: any) {
    return this.commentService.createComment(commentDto, req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getCommentId(@Request() req: any) {
      return this.commentService.getCommentId(req)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getComments() {
      return this.commentService.getComments()
  }
}

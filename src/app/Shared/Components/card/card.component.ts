import { Component, EventEmitter, Input, Output } from "@angular/core";
import { PostDTO } from "src/app/Post/models/post.dto";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() post?: PostDTO;
  @Output() liked = new EventEmitter<string>();
  @Output() disliked = new EventEmitter<string>();

  onLike() {
    this.liked.emit(this.post?.postId);
  }

  onDislike() {
    this.disliked.emit(this.post?.postId);
  }
}

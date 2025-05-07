import { DataSpriteType } from "../../types/player";

export class PlayerModel {
  ctx: any;
  sprite: any;

  init(canvas: any) {
    this.ctx = canvas.current.getContext("2d");
    this.sprite = new Image();
  }

  draw(sprite: DataSpriteType) {
    this.sprite.src = sprite.src;
    this.sprite.onload = () => {
      this.ctx.drawImage(this.sprite, 0, 0, sprite.width, sprite.height);
    };
  }
}

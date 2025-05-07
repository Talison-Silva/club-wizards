export interface DataSpriteType {
  width: Number;
  height: Number;
  rows: Number;
  columns: Number;
  src: String;
}

export interface PlayerType {
  scale: Number;
  className?: String;
  dataSprite: DataSpriteType;
}

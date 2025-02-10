export interface Branding {
  colors: "yellow" | "white" | "grey" | "black" | "red" | "default" | undefined;
}

export interface Image {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}
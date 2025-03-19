export interface staticCaptionsTypes {
  start: string;
  end: string;
  text: string;
}

export const staticCaptions: staticCaptionsTypes[] = [
  {
    start: "0.0",
    end: "1.2",
    text: "Welcome to the video!",
  },
  {
    start: "2.0",
    end: "4.0",
    text: "This is a caption added using WebVTT.",
  },
  {
    start: "5.0",
    end: "8.0",
    text: "You can add more like this statically.",
  },
];

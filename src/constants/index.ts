export interface captionsTypes {
  start: string;
  end: string;
  text: string;
}

export const staticCaptions: captionsTypes[] = [
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

export const DEFAULT_VIDEO_URL =
  "https://media-hosting.imagekit.io//346878ac8b474f4b/Sample%20Interview.mov?Expires=1836930397&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rdkEc-KJE1u0NSysdtWF8~MIRxoNR6c8NeqVfeCpqgq6alvy-JblaCRWIP~mFHhqrAK6OJSKijOtX99faLNW3Lm0QMlvO1i0EMkQllvWWAw2-tfwlU8eI5GSZqq-FjjEIjibCtJD-W0JGUBEVAiKWyrnA4~k7swiKz9HsV9Mi7fz3om-MavIkNeqa0cMFrjM9ySmFj5nQ~k27slFz5ZpYaor7Lqj63slC2n9yA4f3YnoGYgqbRGvlz1BM9ko2gIkYN2uNzg97P3jlTYG2ySc8G3lK6jwzv9qHb5h-dEd0K4~xF9Fu2gHjCjQy-NrME7JDM-8zJ~zy~ORQQ1aXiPF5Q__";

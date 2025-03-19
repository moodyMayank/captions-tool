import { captionsTypes } from "../constants";

export const formatTime = (time: string) => {
  const sec = parseFloat(time);
  const minutes = Math.floor(sec / 60);
  const seconds = (sec % 60).toFixed(3).padStart(6, "0");
  return `00:${String(minutes).padStart(2, "0")}:${seconds}`;
};

export const generateVttFromCaptions = (captions: captionsTypes[]) => {
  let vttContent = "WEBVTT\n\n";
  captions.forEach((cap, i) => {
    vttContent += `${i + 1}\n`;
    vttContent += `${formatTime(cap.start)} --> ${formatTime(cap.end)}\n`;
    vttContent += `${cap.text}\n\n`;
  });
  return vttContent;
};

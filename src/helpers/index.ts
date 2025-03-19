import { CaptionsProps } from "../context";

const formatTime = (time: string) => {
  const parts = time.split(":");
  const h = parts[0].padStart(2, "0");
  const m = parts[1].padStart(2, "0");
  const sParts = parts[2].split(".");
  const s = sParts[0].padStart(2, "0");
  const ms = sParts[1] ? sParts[1].padEnd(3, "0") : "000"; // pad to 3 digits
  return `${h}:${m}:${s}.${ms}`;
};

export const generateVttFromCaptions = (captions: CaptionsProps[]) => {
  let vttContent = "WEBVTT\n\n";
  captions.forEach((cap, i) => {
    vttContent += `${i + 1}\n`;
    vttContent += `${formatTime(cap.start)} --> ${formatTime(cap.end)}\n`;
    vttContent += `${cap.captionText}\n\n`;
  });
  return vttContent;
};

export const downloadVTT = (captions: CaptionsProps[]) => {
  const vttContent = generateVttFromCaptions(captions);

  const blob = new Blob([vttContent], { type: "text/vtt" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "captions.vtt";
  a.click();
  URL.revokeObjectURL(url);
};

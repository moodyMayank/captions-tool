import { useEffect, useState } from "react";
import { generateVttFromCaptions } from "../../helpers";
import { staticCaptions } from "../../constants";

interface VideoPlayerProps {
  videoUrl: string;
  className?: string;
  width: string;
  height: string;
}

const VideoPlayer = ({
  videoUrl,
  className,
  width,
  height,
}: VideoPlayerProps) => {
  const [vttUrl, setVttUrl] = useState("");
  useEffect(() => {
    const vttString = generateVttFromCaptions(staticCaptions);
    const blob = new Blob([vttString], { type: "text/vtt" });
    const url = URL.createObjectURL(blob);
    setVttUrl(url);

    return () => URL.revokeObjectURL(url);
  }, []);

  return (
    <div
      style={{ width, height }}
      className={`relative overflow-hidden ${className}`}
    >
      <video className="w-full h-full object-cover rounded" controls>
        <source src={videoUrl} type="video/mp4" />
        {vttUrl && (
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src={vttUrl}
            default
          />
        )}
        Your browser does not support the video tag.
      </video>
      <div
        id="controls-bar"
        className="absolute bottom-[-2] w-full bg-amber-200 bg-opacity-80 p-2 text-center"
      >
        hello
      </div>
    </div>
  );
};

export default VideoPlayer;

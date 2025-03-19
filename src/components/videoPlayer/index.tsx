import { useEffect, useState } from "react";
import { generateVttFromCaptions } from "../../helpers";
import { staticCaptions } from "../../constants";
import VideoIcon from "../../assets/svg/video";
import VideoPause from "../../assets/svg/videoPause";

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
  const [vttUrl, setVttUrl] = useState<string>("");
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);

  useEffect(() => {
    const vttString = generateVttFromCaptions(staticCaptions);
    const blob = new Blob([vttString], { type: "text/vtt" });
    const url = URL.createObjectURL(blob);
    setVttUrl(url);

    return () => URL.revokeObjectURL(url);
  }, []);

  const togglePlay = () => {
    setIsVideoPlaying((prev) => !prev);
  };

  return (
    <div
      style={{ width, height }}
      className={`overflow-hidden w-full mx-auto ${className}`}
    >
      <div className="">
        <video controls className="w-full h-full object-cover">
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
      </div>
      <div
        id="controls-bar"
        className="mt-2 w-full bg-opacity-80 p-2 text-center flex items-center justify-center"
      >
        <button onClick={() => togglePlay()}>
          {isVideoPlaying ? <VideoPause /> : <VideoIcon />}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;

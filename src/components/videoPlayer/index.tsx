import { useEffect, useRef, useState } from "react";
import { generateVttFromCaptions } from "../../helpers";
import { staticCaptions } from "../../constants";
import VideoIcon from "../../assets/svg/video";
import VideoPause from "../../assets/svg/videoPause";
import SoundOff from "../../assets/svg/soundOff";
import SoundOn from "../../assets/svg/soundOn";

interface VideoPlayerProps {
  videoUrl: string;
  className?: string;
}

const VideoPlayer = ({ videoUrl, className }: VideoPlayerProps) => {
  const [vttUrl, setVttUrl] = useState<string>("");
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      video.play();
      setIsVideoPlaying(true);
    } else {
      video.pause();
      setIsVideoPlaying(false);
    }
  };

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  useEffect(() => {
    const vttString = generateVttFromCaptions(staticCaptions);
    const blob = new Blob([vttString], { type: "text/vtt" });
    const url = URL.createObjectURL(blob);
    setVttUrl(url);

    return () => URL.revokeObjectURL(url);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // ensures reloading the new source
    }
  }, [videoUrl]);

  return (
    <div
      className={`overflow-hidden w-full mx-auto flex flex-col gap-y-6 h-full ${className}`}
    >
      <div className="rounded p-2">
        <video
          className="w-full h-full object-cover shadow-[0_0_15px_4px_rgba(59,130,246,0.9)]"
          ref={videoRef}
        >
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
        className="mt-2 w-full bg-opacity-80  text-center flex items-center gap-x-2"
      >
        <button
          onClick={() => togglePlay()}
          disabled={videoUrl.length === 0}
          className="disabled:cursor-not-allowed cursor-pointer"
        >
          {isVideoPlaying ? <VideoPause /> : <VideoIcon />}
        </button>
        <button
          onClick={() => toggleSound()}
          disabled={videoUrl.length === 0}
          className="disabled:cursor-not-allowed"
        >
          {isMuted ? <SoundOff /> : <SoundOn />}
        </button>
      </div>
      {videoUrl.length === 0 && (
        <div className="text-xl font-bold text-red-600">
          Please Upload a video to start Adding captions
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

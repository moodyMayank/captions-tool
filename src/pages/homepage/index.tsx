import { useState } from "react";

// local
import Input from "../../components/ui/input";
import VideoPlayer from "../../components/videoPlayer";

const DEFAULT_VIDEO_URL =
  "https://media-hosting.imagekit.io//346878ac8b474f4b/Sample%20Interview.mov?Expires=1836930397&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=rdkEc-KJE1u0NSysdtWF8~MIRxoNR6c8NeqVfeCpqgq6alvy-JblaCRWIP~mFHhqrAK6OJSKijOtX99faLNW3Lm0QMlvO1i0EMkQllvWWAw2-tfwlU8eI5GSZqq-FjjEIjibCtJD-W0JGUBEVAiKWyrnA4~k7swiKz9HsV9Mi7fz3om-MavIkNeqa0cMFrjM9ySmFj5nQ~k27slFz5ZpYaor7Lqj63slC2n9yA4f3YnoGYgqbRGvlz1BM9ko2gIkYN2uNzg97P3jlTYG2ySc8G3lK6jwzv9qHb5h-dEd0K4~xF9Fu2gHjCjQy-NrME7JDM-8zJ~zy~ORQQ1aXiPF5Q__";

const Homepage = () => {
  const [videoUrl, setVideoUrl] = useState<string>(DEFAULT_VIDEO_URL);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event?.target?.value);
  };

  return (
    <main className="w-full">
      <Input inputBoxName={"url-input"} onChange={handleOnChange} />
      <VideoPlayer videoUrl={videoUrl} width={"640px"} height={"480px"} />
    </main>
  );
};

export default Homepage;

import { DEFAULT_VIDEO_URLS } from "../../constants";
import { useMyContext } from "../../context";

const Samples = () => {
  const { setVideoUrl } = useMyContext();

  const handleOnClick = (videoKey: string) => {
    setVideoUrl(videoKey);
  };

  return (
    <div className="w-full">
      {DEFAULT_VIDEO_URLS?.map((videoUrl) => {
        return (
          <button
            className="border-2 border-blue-700 rounded p-2 w-full cursor-pointer"
            key={videoUrl?.id}
            onClick={() => handleOnClick(videoUrl?.key)}
          >
            {videoUrl?.name}
          </button>
        );
      })}
    </div>
  );
};

export default Samples;

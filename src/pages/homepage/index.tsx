import VideoPlayer from "../../components/videoPlayer";
import UploadMedia from "../../components/uploadMedia";
import { DEFAULT_VIDEO_URL } from "../../constants";
import AddCaptions from "../../components/addCaptions";

const Homepage = () => {
  return (
    <main className="w-full flex h-full">
      <div className="w-[40%] border-r border-r-slate-950 px-2 h-full">
        {/* Upload section */}
        <UploadMedia />

        {/* Subtitles section */}
        <AddCaptions />
      </div>
      <div className="w-[60%] bg-slate-100 h-full">
        {/* Add dynamic video url here */}
        <VideoPlayer
          videoUrl={DEFAULT_VIDEO_URL}
          width={"768px"}
          height={"480px"}
          className="flex-end"
        />
      </div>
    </main>
  );
};

export default Homepage;

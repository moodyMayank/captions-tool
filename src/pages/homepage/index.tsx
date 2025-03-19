import VideoPlayer from "../../components/videoPlayer";
import UploadMedia from "../../components/uploadMedia";
import AddCaptions from "../../components/addCaptions";
import { useMyContext } from "../../context";

const Homepage = () => {
  const { sidebarItem, videoUrl } = useMyContext();

  console.log(">>>>>>> videoUrl", videoUrl);

  return (
    <main className="w-full flex h-full">
      <div className="w-[40%] border-r border-r-slate-950 px-2 h-full flex flex-col">
        {/* Upload section */}
        {sidebarItem === "video" && <UploadMedia />}

        {/* Subtitles section */}
        {sidebarItem === "captions" && <AddCaptions />}
      </div>
      <div className="w-[60%] bg-slate-100 h-full px-4">
        {/* Add dynamic video url here */}
        <VideoPlayer key={videoUrl} videoUrl={videoUrl} className="flex-end" />
      </div>
    </main>
  );
};

export default Homepage;

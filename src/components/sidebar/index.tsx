import Captions from "../../assets/svg/captions";
import VideoCamera from "../../assets/svg/videoCamera";

const Sidebar = () => {
  return (
    <div className="w-20 h-screen bg-white border-r-1 flex flex-col items-center justify-center">
      <nav className="flex flex-col gap-y-8">
        <a
          href="#"
          className="flex flex-col gap-y-2 items-center hover:bg-purple-200 rounded p-2 text-sm"
        >
          <VideoCamera />
          <span>Video</span>
        </a>
        <a
          href="#"
          className="flex flex-col gap-y-2 items-center hover:bg-purple-200 rounded p-2 text-sm"
        >
          <Captions />
          <span>Captions</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

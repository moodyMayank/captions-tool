import Captions from "../../assets/svg/captions";
import Sample from "../../assets/svg/sample";
import VideoCamera from "../../assets/svg/videoCamera";
import { useMyContext } from "../../context";

const Sidebar = () => {
  const { sidebarItem, setSidebarItem } = useMyContext();

  const handleSidebarChange = (itemName: string) => {
    setSidebarItem(itemName);
  };

  return (
    <div className="w-20 h-screen bg-white border-r-1 flex flex-col items-center justify-center">
      <nav className="flex flex-col gap-y-8">
        <a
          href="#"
          className={`flex flex-col gap-y-2 items-center  rounded p-2 text-sm ${
            sidebarItem === "video"
              ? " bg-black text-white font-medium"
              : " hover:bg-slate-200"
          }`}
          onClick={() => handleSidebarChange("video")}
        >
          <VideoCamera />
          <span>Video</span>
        </a>
        <a
          href="#"
          className={`flex flex-col gap-y-2 items-center  rounded p-2 text-sm ${
            sidebarItem === "captions"
              ? " bg-black text-white font-medium"
              : " hover:bg-slate-200"
          }`}
          onClick={() => handleSidebarChange("captions")}
        >
          <Captions />
          <span>Captions</span>
        </a>
        <a
          href="#"
          className={`flex flex-col gap-y-2 items-center  rounded p-2 text-sm ${
            sidebarItem === "sample"
              ? " bg-black text-white font-medium"
              : " hover:bg-slate-200"
          }`}
          onClick={() => handleSidebarChange("sample")}
        >
          <Sample />
          <span>Sample</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

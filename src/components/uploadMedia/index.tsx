import { useState } from "react";
import Tick from "../../assets/svg/tick";
import { useMyContext } from "../../context";
import Input from "../ui/input";

const UploadMedia = () => {
  const { videoUrl, setVideoUrl, setVideoFileContent } = useMyContext();
  const [inputValue, setInputValue] = useState<string>("");

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      setVideoFileContent({
        fileName: file?.name,
        fileType: file?.type,
      });
      setInputValue("");
    }
  };

  const handleVideoInputBox = () => {
    if (inputValue?.length === 0) return;
    setVideoUrl(inputValue);
  };

  return (
    <div className="flex flex-col h-full items-center justify-start w-full">
      {videoUrl.length === 0 && (
        <label
          htmlFor="video-upload"
          className="w-full cursor-pointer border border-dotted h-40 rounded flex items-center justify-center hover:bg-slate-100"
        >
          Upload File
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            name="video-upload"
            className="hidden"
            onChange={handleVideoUpload}
            disabled={inputValue.length > 0}
          />
        </label>
      )}
      {videoUrl.length > 0 && (
        <div className="cursor-pointer border border-dotted h-40 rounded flex items-center justify-center hover:bg-slate-100 w-full">
          <Tick />
          Video uploaded successfully
        </div>
      )}
      <div className="text-2xl font-bold text-center my-10 w-full">OR</div>
      <div className="flex flex-col gap-y-4 w-full">
        <Input
          placeholder="Paste link here"
          inputBoxName="video-input"
          value={inputValue}
          onChange={(event) => setInputValue(event?.target?.value)}
        />
        <button
          className="text-white bg-black border-black h-12 py-4 px-2 flex items-center justify-center w-full text-center rounded cursor-pointer transition-shadow duration-200 ease-in-out hover:shadow-[0_0_15px_4px_rgba(59,130,246,0.6)] disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={handleVideoInputBox}
          disabled={inputValue.length == 0}
        >
          Add Video
        </button>
      </div>
    </div>
  );
};

export default UploadMedia;

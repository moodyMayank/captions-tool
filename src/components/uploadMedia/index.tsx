import { useMyContext } from "../../context";

const UploadMedia = () => {
  const { videoUrl, setVideoUrl } = useMyContext();

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event?.target?.value);
  };

  console.log(">>>. video url", videoUrl);

  return (
    <div className="border border-dotted h-60 rounded">
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
    </div>
  );
};

export default UploadMedia;

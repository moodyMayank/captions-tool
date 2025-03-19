import { useState } from "react";
import Input from "../ui/input";
import { useMyContext } from "../../context";

const AddCaptions = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [text, setText] = useState("");
  const [showCaptionForm, setShowCaptionForm] = useState<boolean>(false);

  const { videoUrl, captions, setCaptions } = useMyContext();

  const addCaption = () => {
    if (!start || !end || !text) return;
    setCaptions([...captions, { start, end, captionText: text }]);
    setStart("");
    setEnd("");
    setText("");
    setShowCaptionForm(false);
  };

  return (
    <>
      <div className="w-full flex items-center justify-start gap-x-4">
        <h2 className="text-xl font-bold text-center">Add Captions</h2>
        <button
          onClick={() => setShowCaptionForm((prev) => !prev)}
          className=" bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 flex items-center justify-center cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed"
          disabled={videoUrl.length === 0}
        >
          {showCaptionForm ? "-" : "+"}
        </button>
      </div>
      {showCaptionForm && (
        <div className="bg-white rounded">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            <Input
              placeholder="Start (HH:MM:SS)"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              inputBoxName="start"
              maxLength={14}
            />
            <Input
              placeholder="End (HH:MM:SS)"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              inputBoxName="end"
              maxLength={14}
            />
          </div>
          <Input
            placeholder="Enter Caption"
            value={text}
            onChange={(e) => setText(e.target.value)}
            inputBoxName="caption-box"
            maxLength={50}
          />
          <button
            onClick={addCaption}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer disabled:bg-slate-400 disabled:cursor-not-allowed"
            disabled={videoUrl.length === 0}
          >
            Add Caption
          </button>
        </div>
      )}
      <div>
        {captions.length > 0 && (
          <div className="space-y-2 mt-4">
            <h3 className="font-semibold">Captions Preview:</h3>
            <ul className="text-sm list-decimal">
              {captions?.map((cap, i) => (
                <li key={i} className="truncate">
                  {cap.start} → {cap.end}: {cap.captionText}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default AddCaptions;

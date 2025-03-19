import { createContext, ReactNode, useContext, useState } from "react";

interface fileContentProps {
  fileName: string;
  fileType: string;
}

export interface CaptionsProps {
  start: string;
  end: string;
  captionText: string;
}
interface ProjectContextProps {
  videoUrl: string;
  sidebarItem: string;
  captions: CaptionsProps[];
  setCaptions: React.Dispatch<React.SetStateAction<CaptionsProps[]>>;
  videoFileContent: fileContentProps;
  setVideoFileContent: React.Dispatch<React.SetStateAction<fileContentProps>>;
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
  setSidebarItem: React.Dispatch<React.SetStateAction<string>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectContext = createContext<ProjectContextProps | undefined>(
  undefined
);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [videoFileContent, setVideoFileContent] = useState<fileContentProps>({
    fileName: "",
    fileType: "",
  });
  const [sidebarItem, setSidebarItem] = useState<string>("video");
  const [captions, setCaptions] = useState<CaptionsProps[]>([]);

  return (
    <ProjectContext.Provider
      value={{
        videoUrl,
        setVideoUrl,
        sidebarItem,
        captions,
        setCaptions,
        setSidebarItem,
        videoFileContent,
        setVideoFileContent,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMyContext = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error("useMyContext must be used within MyProvider");
  return context;
};

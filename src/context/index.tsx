import { createContext, ReactNode, useContext, useState } from "react";

interface ProjectContextProps {
  videoUrl: string;
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ProjectContext = createContext<ProjectContextProps | undefined>(
  undefined
);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [videoUrl, setVideoUrl] = useState<string>("");
  return (
    <ProjectContext.Provider value={{ videoUrl, setVideoUrl }}>
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

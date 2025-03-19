import MaxWidthWrapper from "./components/maxWidthWrapper";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Homepage from "./pages/homepage";

function App() {
  return (
    <div className="flex h-screen overflow-hidden w-screen">
      <Sidebar />
      <MaxWidthWrapper>
        <Navbar />
        <Homepage />
      </MaxWidthWrapper>
    </div>
  );
}

export default App;

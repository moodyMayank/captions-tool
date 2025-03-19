import MaxWidthWrapper from "./components/maxWidthWrapper";
import Navbar from "./components/navbar";
import Homepage from "./pages/homepage";

function App() {
  return (
    <MaxWidthWrapper>
      <Navbar />
      <Homepage />
    </MaxWidthWrapper>
  );
}

export default App;

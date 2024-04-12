import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
function App() {
  const [openModel, setOpenModel] = useState(false)

  return (
    <div className="App">
      <Header setOpenModel={setOpenModel} openModel={openModel} />
      <div className="flex mt-16 ">
        <Sidebar setOpenModel={setOpenModel} openModel={openModel} />
        <Section/>
      </div>
    </div>
  );
}

export default App;

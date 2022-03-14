import React from "react";

import { Header } from "./component/Header/Header";
import { Job } from "./pages/Job/job";

export const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Job />
    </div>
  );
};

export default App;

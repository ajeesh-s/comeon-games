import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "primereact/resources/themes/lara-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { AppStateProvider } from "./Framework/Context/Context";
import AppRoutes from "./Framework/Routes/AppRoutes";

const App: React.FC = () => {
  return (
    <Router>
      <AppStateProvider>
          <AppRoutes />
      </AppStateProvider>
    </Router>
  );
};

export default App;

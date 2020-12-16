import React from 'react';
import Routes from "./routes/Routes";
import MainLayout from "./components/MainLayout/MainLayout";
import AppContextState from "./store/AppContextState";

function App() {
  return (
    <AppContextState>
      <MainLayout>
        <Routes/>
      </MainLayout>
    </AppContextState>
  );
}

export default App;

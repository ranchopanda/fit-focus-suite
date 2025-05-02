
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import { DataProvider } from "@/context/DataContext";

const Index = () => {
  return (
    <DataProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* Add other routes here as we build them */}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </MainLayout>
      </Router>
    </DataProvider>
  );
};

export default Index;

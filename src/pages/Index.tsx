
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import { DataProvider } from "@/context/DataContext";

const Index = () => {
  return (
    <DataProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add other routes here as we build them */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </DataProvider>
  );
};

export default Index;

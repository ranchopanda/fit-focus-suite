
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Payments from "@/pages/Payments";
import Settings from "@/pages/Settings";
import { DataProvider } from "@/context/DataContext";

const Index = () => {
  return (
    <DataProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
          {/* Add other routes here as we build them */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </MainLayout>
    </DataProvider>
  );
};

export default Index;

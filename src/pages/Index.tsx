
import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Members from "@/pages/Members";
import Attendance from "@/pages/Attendance";
import Reports from "@/pages/Reports";
import Payments from "@/pages/Payments";
import Settings from "@/pages/Settings";
import NotFound from "@/pages/NotFound";
import { DataProvider } from "@/context/DataContext";

const Index = () => {
  return (
    <DataProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/members" element={<Members />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </DataProvider>
  );
};

export default Index;

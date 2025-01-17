import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { RoleGuard } from './components/RoleGuard';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { Tasks } from './pages/Tasks';
import { Procurement } from './pages/Procurement';
import { Maintenance } from './pages/Maintenance';
import { Finance } from './pages/Finance';
import { Contracts } from './pages/Contracts';
import { Reports } from './pages/Reports';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';

function App() {
  return (
    <Router>
      <ToastProvider>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="projects" element={<Projects />} />
              <Route
                path="tasks"
                element={
                  <RoleGuard allowedRoles={['admin', 'contractor', 'consultant']}>
                    <Tasks />
                  </RoleGuard>
                }
              />
              <Route
                path="procurement"
                element={
                  <RoleGuard allowedRoles={['admin', 'contractor']}>
                    <Procurement />
                  </RoleGuard>
                }
              />
              <Route
                path="maintenance"
                element={
                  <RoleGuard allowedRoles={['admin', 'contractor']}>
                    <Maintenance />
                  </RoleGuard>
                }
              />
              <Route
                path="finance"
                element={
                  <RoleGuard allowedRoles={['admin']}>
                    <Finance />
                  </RoleGuard>
                }
              />
              <Route
                path="contracts"
                element={
                  <RoleGuard allowedRoles={['admin', 'client', 'contractor']}>
                    <Contracts />
                  </RoleGuard>
                }
              />
              <Route
                path="reports"
                element={
                  <RoleGuard allowedRoles={['admin', 'client', 'consultant']}>
                    <Reports />
                  </RoleGuard>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
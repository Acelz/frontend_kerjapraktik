import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AddUserPage from "./pages/superadmin/users/AddUserPage";
import UsersPage from "./pages/superadmin/users/UsersPage";
import VehiclePage from "./pages/user/vehicle/VehiclePage";
import AddVehiclePage from "./pages/user/vehicle/AddVehiclePage";
import DistrictPage from "./pages/admin/district/DistrictPage";
import RegencyMunicipalityPage from "./pages/admin/regency-municipality/RegencyMunicipalityPage";
import VillagePage from "./pages/admin/village/VillagePage";
import DetailVechiclePage from "./pages/user/vehicle/DetailVechiclePage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/add" element={<AddUserPage />} />
        <Route path="/vehicles/add" element={<AddVehiclePage />} />
        <Route path="/vehicle/:id" element={<DetailVechiclePage />} />
        <Route path="/vehicles" element={<VehiclePage />} />
        <Route path="/districts" element={<DistrictPage />} />
        <Route
          path="/regency-municipalities"
          element={<RegencyMunicipalityPage />}
        />
        <Route path="/villages" element={<VillagePage />} />
      </Routes>
    </>
  );
}

export default App;

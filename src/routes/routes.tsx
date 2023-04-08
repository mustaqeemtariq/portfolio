import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/auth/login"
import { Register } from "../pages/auth/register"

const PortfolioRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default PortfolioRoutes
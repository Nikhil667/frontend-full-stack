
import Store from "./pages/Store";
import AuthComponent from "./pages/AuthComponent";
import { Routes, Route } from "react-router-dom";
import Account from "./Account";
import ProtectedRoutes from "./ProtectedRoutes";
import Register from "./Register";
import Login from './Login'
import { UserProvider } from "./context/UserContext";
import CartProvider from "./context/CartContext";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";

function App() {
  return (
    <>
      <CartProvider>
        <UserProvider>
          <Routes>
            <Route exact path="/" element={<Account />} />
            <Route exact path="success" element={<Success />} />
            <Route exact path="cancel" element={<Cancel />} />
            <Route exact path="/" element={<Account />} />
            <Route exact path="/free" element={<Store />} />
            <Route path="/auth"element={<ProtectedRoutes><AuthComponent /></ProtectedRoutes>}/>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </UserProvider>
      </CartProvider>
    </>
  );
}

export default App;

import { Container} from "react-bootstrap";
import FreeComponent from "./pages/FreeComponent";
import AuthComponent from "./pages/AuthComponent";
import { Routes, Route } from "react-router-dom";
import Account from "./Account";
import ProtectedRoutes from "./ProtectedRoutes";
import Register from "./Register";
import Login from './Login'
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
          <Routes>
            <Route exact path="/" element={<Account />} />
            <Route exact path="/free" element={<FreeComponent />} />
            <Route
              path="/auth"
              element={
                <ProtectedRoutes>
                  <AuthComponent />
                </ProtectedRoutes>
              }
            />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
      </UserProvider>
    </>
  );
}

export default App;

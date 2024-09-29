import { AuthProvider } from "./context/auth/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;

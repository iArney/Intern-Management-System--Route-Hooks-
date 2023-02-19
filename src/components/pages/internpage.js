import React from "react";
import { createRoutesFromElements, Route, RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";

const internpage = () => {
  // Intern details route
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/intern" element={<InternDetails />}></Route>
      </Route>
    )
  );
  // ... Intern state
  const [navigate, setNavigate] = useState(false);

  useEffect(() => {
    setNavigate(true);
  }, []);
  return <div></div>;
};

export default internpage;

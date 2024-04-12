import Error from "./components/NotFound"
import Home from "./components/Home";
import HomeLayout from './Layouts/HomeLayout'
import About from "./components/About";
import Upload from "./components/Upload";
import Contact from "./components/Contact";
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomeLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="upload" element={<Upload />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
  )
  return (
    <RouterProvider router={router} />
  )
}
export default App

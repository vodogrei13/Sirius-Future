import { Formlogin } from './Components/FormLogin/formlogin'
import { PageCalendar} from './Components/LessonCalendar/PageCalendar'
import { ProfilePage } from './Components/ProfilePage/Profilepage'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
      path: "Home",
      element: <ProfilePage/>
  },
  {
      path: "exit",
      element: <Formlogin/>
  },
  {
    path: "welcome",
    element: <PageCalendar/>
},
  ])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

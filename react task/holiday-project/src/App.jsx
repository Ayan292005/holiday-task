import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Routes from './routes/rootes';
const routes=createBrowserRouter(Routes)


function App() {


  return (
    <>
<RouterProvider router={routes}/>
    </>
  )
}

export default App

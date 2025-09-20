import Navbar from './assets/Pages/Navbar/Navbar'
import Home  from './assets/Pages/Home/Home'
import Blogs  from './assets/Pages/Blogs/Blogs'

import './App.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
{
  path:'/',
  element:<><Home/></>
},
{
  path:'/home',
  element:<><Home/></>
},
{
  path:'/blogs',
  element:<><Blogs/></>
}
])

  return (
    <>
  <div className="app-container">
<RouterProvider router={router} />
  </div>
    </>
  )
}

export default App

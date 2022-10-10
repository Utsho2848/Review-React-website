import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import Review from './components/Review';
import Dashboard from './components/Dashboard';
import Blog from './components/Blog';
import About from './components/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => await fetch('reviewData.json'),
          element: <Home></Home>
        },
        {
          path: '/review',
          loader: async () => await fetch('reviewData.json'),
          element: <Review></Review>
        },
        {
          path: '/dashboard',
          element: <Dashboard></Dashboard>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]
    },


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

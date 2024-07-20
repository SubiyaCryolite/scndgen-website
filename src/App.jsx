import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
  } from 'react-router-dom';

  import {Layout} from './components/Layout';
  import {Landing,Legacy,Legends} from './pages/Legends'
  
  export const App = () => {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='legacy' element={<Legacy />} >
          </Route>
          <Route path='legends' element={<Legends />} >
          </Route>
        </Route>
      )
    );
  
    return <RouterProvider router={router} />;
  };
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductProvider} from './context/ProductContext'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { useEffect } from 'react';
import { AuthProvider } from './context/AuthContext';


function App() {
 
const client = new QueryClient();


  return (
    //Provide the react query client to the app 
    <QueryClientProvider client={client}> 
      //Provide the context to the component tree 
          <ProductProvider>
            <AuthProvider>
              <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/profile" element={<Profile/>} />
                  </Routes>
              </BrowserRouter>
            </AuthProvider>
          </ProductProvider>
    </QueryClientProvider>
    
  );
}

export default App

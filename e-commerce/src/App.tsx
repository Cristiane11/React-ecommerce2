import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Cart from './pages/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ProductProvider} from './context/ProductContext'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import NavBar from './components/NavBar';

import { AuthProvider } from './context/AuthContext';


function App() {
 
const client = new QueryClient();
  return (
    //Provide the react query client to the app 
    <QueryClientProvider client={client}> 
    
          <ProductProvider>
            <AuthProvider>
              <BrowserRouter>
              <NavBar/>
                  <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/profile" element={<Profile/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/logout" element={<Logout/>} />
                  </Routes>
              </BrowserRouter>
            </AuthProvider>
          </ProductProvider>
    </QueryClientProvider>
    
  );
}

export default App

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import Header from "./common/Header"
import RouteSet from "./RouteSet";

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/bridge') 
    }
  }, [location.pathname, navigate])

  return (
    <main>
      <Header />
      <RouteSet />
    </main>
  );
}

export default App;

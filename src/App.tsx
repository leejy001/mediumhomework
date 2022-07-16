import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
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
    <AppContainer>
      <Header />
      <RouteSet />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100%;
  margin: auto;
  padding-top: 50px;
`
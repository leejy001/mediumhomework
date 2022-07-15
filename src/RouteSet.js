import { Route, Routes } from 'react-router-dom';
import { BridgePage, HistoryPage } from './pages';

function RouteSet () {
    return (
        <Routes>
            <Route path="/bridge" element={<BridgePage />}/>
            <Route path="/history" element={<HistoryPage />}/>
        </Routes>
    )
}

export default RouteSet
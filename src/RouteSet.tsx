import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Load from './common/Load';

const BridgePage = lazy(() => import('./pages/BridgePage'))
const HistoryPage = lazy(() => import('./pages/HistoryPage'))

function RouteSet () {
    return (
        <Suspense fallback={<Load/>}>
            <Routes>
                <Route path="/bridge" element={<BridgePage />}/>
                <Route path="/history" element={<HistoryPage />}/>
            </Routes>
        </Suspense>
    )
}

export default RouteSet
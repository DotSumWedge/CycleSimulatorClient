import './App.css';
import Header from './components/Header'
import RiderCardPage from './pages/RiderCardPage';
import BarChartPage from './pages/BarChartPage';
import GroupedBarChartPage from './pages/GroupedBarChartPage';
import ErrorPage from './pages/ErrorPage';
import {Routes, Route, Link} from 'react-router-dom';


const App = () => {
  return (
    <div>
        {/* <nav>   
            <Link to="/RiderCardPage">II Rider Cards II</Link>
            <Link to="/BarChartPage">II Bar Chart II</Link>
            <Link to="/GroupedBarChartPage">II Grouped Bar Chart II</Link>
        </nav> */}

        <div className="container">
            <Header />
        </div>

        <Routes>
            <Route path="/RiderCardPage" element={<RiderCardPage />} />
            <Route path="/BarChartPage" element={<BarChartPage />} />
            <Route path="/GroupedBarChartPage" element={<GroupedBarChartPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  );
}

export default App;

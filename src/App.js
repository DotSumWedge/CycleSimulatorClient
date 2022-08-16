import './App.css';
import Header from './components/Header'
import RiderCardPage from './pages/RiderCardPage';
import BarChartPage from './pages/BarChartPage';
import GroupedBarChartPage from './pages/GroupedBarChartPage';
import ErrorPage from './pages/ErrorPage';
import {Routes, Route, Link} from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={backgroundStyle}>
        <div>
            <Header />
        </div>

        <Routes>
            <Route path="/RiderCardPage" element={<RiderCardPage />} />
            <Route path="/BarChartPage" element={<BarChartPage />} />
            <Route path="/GroupedBarChartPage" element={<GroupedBarChartPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>

        <>
          {[
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
            ].map((variant) => (
              <Alert key={variant} variant={variant}>
                {variant} alert!
              </Alert>
            ))}
        </>
    </div>
  );
}

const backgroundStyle = {
  backgroundColor: '#000000'
}

export default App;

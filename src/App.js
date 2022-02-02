import './App.css';
import Header from './components/Header'
import RiderCard from './components/RiderCard'

function App() {
  return (
    <div className="container">
      <Header />
      <div style={RiderCardsStyle}>
        <div style={RiderCardStyle}>
          <RiderCard />
        </div>
        <div style={RiderCardStyle}>
          <RiderCard />
        </div>
        <div style={RiderCardStyle}>
          <RiderCard />
        </div>
        <div style={RiderCardStyle}>
          <RiderCard />
        </div>
        <div style={RiderCardStyle}>
          <RiderCard />
        </div>
        <div style={RiderCardStyle}>
          <RiderCard />
        </div>
      </div>
    </div>
  );
}

const RiderCardsStyle = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  backgroundColor: '#2196F3',
  padding: '10px',
}

const RiderCardStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '50%'
}

export default App;

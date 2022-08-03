import flat_symbol from '../rider_card_images/flat_symbol.png';
import hill_symbol from '../rider_card_images/hill_symbol.png';
import mountain_symbol from '../rider_card_images/mountain_symbol.png';
import downhill_symbol from '../rider_card_images/downhill_symbol.png';
import sprint_symbol from '../rider_card_images/sprint_symbol.png';
import breakaway_symbol from '../rider_card_images/breakaway_symbol.png';
import cobbleStone_symbol from '../rider_card_images/cobblestone_symbol.png';
import wind_symbol from '../rider_card_images/wind_symbol.png';

const RiderCard = ({rider}) => {
  return (
    <>
        <div key={rider.id} style={RiderCardStyle}>
            <div style={RiderImageStyle}>{rider.image}</div>
            <div style={RiderNameStyle}>{rider.name}</div>
            <div style={RiderModifiers}>
                <div style={GradientModifiers}>
                    <div>
                        <img src={flat_symbol} alt="flat symbol:"/>
                        {rider.flat}
                    </div>
                    <div>
                        <img src={hill_symbol} alt="hill symbol:"/>
                        {rider.hill}
                    </div>
                    <div>
                        <img src={mountain_symbol} alt="mountain symbol:"/>
                        {rider.mountain}
                    </div>
                    <div>
                        <img src={downhill_symbol} alt="downhill_symbol symbol:"/>
                        {rider.downhill}
                    </div>
                </div>
                <div style={EventModifiers}>
                    <div>
                        <img src={sprint_symbol} alt="sprint_symbol symbol:"/>
                        {rider.sprint}
                    </div>
                    <div>
                        <img src={breakaway_symbol} alt="breakaway_symbol symbol:"/>
                        {rider.breakaway}
                    </div>
                </div>
                <div style={ConditionModifiers}>
                    <div>
                        <img src={cobbleStone_symbol} alt="cobbleStone_symbol symbol:"/>
                        {rider.cobbleStone}
                    </div>
                    <div>
                        <img src={wind_symbol} alt="wind_symbol symbol:"/>
                        {rider.wind}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

const RiderCardStyle = {
    backgroundColor: 'yellow', 
    color: 'red',
    width: '450px',
    height: '600px',
    border: '15px solid green',
    padding: '50px',
    margin: '20px'
}

const RiderImageStyle = {
    width: '450px',
    height: '450px',
    border: '5px solid green'
}

const RiderNameStyle = {
    textAlign: 'center',
    color: 'blue',
    fontSize: '30px'
}

const RiderModifiers = {
    textAlign: 'center',
    color: 'red',
    fontSize: '20px'
}

const GradientModifiers = {
    display: 'grid',
    gridTemplateAreas:`
        'flat hill mountain downhill'`,
    gridGap: '10px'
}

const EventModifiers = {
    display: 'grid',
    gridTemplateAreas:`
        'sprint breakaway'`,
    gridGap: '10px'
}

const ConditionModifiers = {
    display: 'grid',
    gridTemplateAreas:`
        'cobbleStone wind'`,
    gridGap: '10px'
}

export default RiderCard;

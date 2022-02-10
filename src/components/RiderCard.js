const RiderCard = ({rider}) => {
  return (
    <>
        <div key={rider.id} style={RiderCardStyle}>
            <div>{rider.image}</div>
            <div style={RiderNameStyle}>{rider.name}</div>
            <div style={RiderModifiers}>
                <div style={GradientModifiers}>
                    <div>{rider.flat}</div>
                    <div>{rider.hill}</div>
                    <div>{rider.mountain}</div>
                    <div>{rider.downhill}</div>
                </div>
                <div style={EventModifiers}>
                    <div>{rider.sprint}</div>
                    <div>{rider.breakaway}</div>
                </div>
                <div style={ConditionModifiers}>
                    <div>{rider.cobbleStone}</div>
                    <div>{rider.wind}</div>
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
    height: '600px'
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

// Not sure if needed

// gradient modifiers
//
// const flat = {
//     gridArea: flat,
// }
// const hill = {
//     gridArea: hill,
// }
// const mountain = {
//     gridArea: mountain,
// }
// const downhill = {
//     gridArea: downhill,
// }

// challange modifiers
//
// const sprint = {
//     gridArea: sprint,
// }
// const breakaway = {
//     gridArea: breakaway,
// }

// condition modifiers
//
// const cobble = {
//     gridArea: cobble,
// }
// const wind = {
//     gridArea: wind,
// }

export default RiderCard;

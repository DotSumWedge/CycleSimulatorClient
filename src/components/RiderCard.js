import PropTypes from 'prop-types';

const RiderCard = ({riders}) => {
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <>
            {riders.map((riders) => (
                <div key={riders.id} style={RiderCardStyle}>
                    <div>{riders.image}</div>
                    <div style={RiderNameStyle}>{riders.name}</div>
                    <div style={riderModifiers}>
                        <div style={gradientModifiers}>
                            <div>{riders.flat}</div>
                            <div>{riders.hill}</div>
                            <div>{riders.mountain}</div>
                            <div>{riders.downhill}</div>
                        </div>
                        <div style={eventModifiers}>
                            <div>{riders.sprint}</div>
                            <div>{riders.breakaway}</div>
                        </div>
                        <div style={conditionModifiers}>
                            <div>{riders.cobbleStone}</div>
                            <div>{riders.wind}</div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

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

const riderModifiers = {
    textAlign: 'center',
    color: 'red',
    fontSize: '20px'
}

const gradientModifiers = {
    display: 'grid',
    gridTemplateAreas:`
        'flat hill mountain downhill'`,
    gridGap: '10px'
}

const eventModifiers = {
    display: 'grid',
    gridTemplateAreas:`
        'sprint breakaway'`,
    gridGap: '10px'
}

const conditionModifiers = {
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

export default RiderCard
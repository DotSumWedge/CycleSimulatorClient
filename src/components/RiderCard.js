import PropTypes from 'prop-types';
import rider_image from '../rider_card_images/Rider_Spear.jpg';

const RiderCard = ({riderData}) => {
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <div
            onClick={onClick}
            style={RiderCardStyle}>
                <div><img src={rider_image} alt="Portrait of rider"/></div>
                <div style={RiderNameStyle}>{riderData[0]}</div>
                <div style={gradientModifiers}>
                    <div>{}{riderData[1]}</div>
                    <div>{riderData[2]}</div>
                    <div>{riderData[3]}</div>
                    <div>{riderData[4]}</div>
                </div>
        </div>
    )
}

RiderCard.defaultProps = {
    riderData: [
        'Joe Shmoh',
        '10',
        '10',
        '10',
        '10'
    ],
}

RiderCard.propTypes = {
    riderData: PropTypes.array,
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

const gradientModifiers = {
    display: 'grid',
    gridTemplateAreas:`
        'flat hill mountain downhill'`,
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
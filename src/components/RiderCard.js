import PropTypes from 'prop-types';
import rider_image from '../rider_card_images/Rider_Spear.jpg';

const RiderCard = ({}) => {
    const onClick = (e) => {
        console.log(e)
    }

    return (
        <div
            onClick={onClick}
            style={{backgroundColor: 'yellow'}}>
                {"Rider Card"}
                <img src={rider_image} />
        </div>
    )
}

export default RiderCard
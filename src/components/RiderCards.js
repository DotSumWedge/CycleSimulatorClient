import RiderCard from './RiderCard';

const RiderCards = ({riders}) => {

    return (
        <>
            {riders.map((rider) => (
                <RiderCard key={rider.id} rider={rider}/>
            ))}
        </>
    )
}

export default RiderCards
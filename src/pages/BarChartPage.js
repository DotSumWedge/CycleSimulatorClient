import React, { useState } from 'react'
import Chart from '../components/ResponsiveBar';
import rider_image from '../rider_card_images/Rider_Spear.jpg';

function BarChartPage() {

    const [riders, setRiders] = useState ([
        {
            id: 1,
            name: "Sprimli",
            race: "Dwarf",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 13,
            hill: 7,
            mountain: 0,
            downhill: 3,
            sprint: 25,
            breakaway: 9,
            cobbleStone: 11,
            wind: 14
        },
        {
            id: 2,
            name: "Hofbrow",
            race: "Dwarf",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 12,
            hill: 17,
            mountain: 10,
            downhill: 7,
            sprint: 18,
            breakaway: 8,
            cobbleStone: 3,
            wind: 13
        },
        {
            id: 3,
            name: "Ultstone",
            race: "Dwarf",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 10,
            hill: 11,
            mountain: 12,
            downhill: 4,
            sprint: 15,
            breakaway: 11,
            cobbleStone: 17,
            wind: 9
        },
        {
            id: 4,
            name: "Windorf",
            race: "Dwarf",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 14,
            hill: 10,
            mountain: 4,
            downhill: 6,
            sprint: 14,
            breakaway: 16,
            cobbleStone: 5,
            wind: 17
        },
        {
            id: 5,
            name: "Florfindailyan",
            race: "Elf",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 17,
            hill: 7,
            mountain: 3,
            downhill: 3,
            sprint: 16,
            breakaway: 17,
            cobbleStone: 12,
            wind: 13
        },
        {
            id: 6,
            name: "Imin",
            race: "Elf",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 7,
            hill: 11,
            mountain: 12,
            downhill: 12,
            sprint: 12,
            breakaway: 15,
            cobbleStone: 10,
            wind: 15
        },
        {
            id: 7,
            name: "Tata",
            race: "Elf",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 8,
            hill: 10,
            mountain: 17,
            downhill: 5,
            sprint: 12,
            breakaway: 15,
            cobbleStone: 6,
            wind: 5
        },
        {
            id: 8,
            name: "Enel",
            race: "Elf",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 10,
            hill: 15,
            mountain: 15,
            downhill: 10,
            sprint: 14,
            breakaway: 10,
            cobbleStone: 6,
            wind: 8
        },
        {
            id: 9,
            name: "Joe",
            race: "Human",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 13,
            hill: 12,
            mountain: 12,
            downhill: 12,
            sprint: 12,
            breakaway: 11,
            cobbleStone: 11,
            wind: 11
        },
        {
            id: 10,
            name: "George",
            race: "Human",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 10,
            hill: 14,
            mountain: 11,
            downhill: 14,
            sprint: 15,
            breakaway: 6,
            cobbleStone: 10,
            wind: 10
        },
        {
            id: 11,
            name: "Vander",
            race: "Human",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 15,
            hill: 10,
            mountain: 4,
            downhill: 4,
            sprint: 20,
            breakaway: 12,
            cobbleStone: 15,
            wind: 10
        },
        {
            id: 12,
            name: "Spear",
            race: "Human",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 11,
            hill: 12,
            mountain: 16,
            downhill: 10,
            sprint: 12,
            breakaway: 8,
            cobbleStone: 8,
            wind: 9
        },
        {
            id: 13,
            name: "Grazar",
            race: "Ork",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 15,
            hill: 10,
            mountain: 5,
            downhill: 15,
            sprint: 14,
            breakaway: 4,
            cobbleStone: 18,
            wind: 9
        },
        {
            id: 14,
            name: "Gork",
            race: "Ork",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 10,
            hill: 10,
            mountain: 10,
            downhill: 17,
            sprint: 10,
            breakaway: 14,
            cobbleStone: 13,
            wind: 8
        },
        {
            id: 15,
            name: "Mork",
            race: "Ork",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 12,
            hill: 15,
            mountain: 7,
            downhill: 18,
            sprint: 7,
            breakaway: 7,
            cobbleStone: 15,
            wind: 11
        },
        {
            id: 16,
            name: "Speed Dok",
            race: "Ork",
            image: <img src={rider_image} alt="Portrait of rider"/>,
            flat: 8,
            hill: 11,
            mountain: 13,
            downhill: 21,
            sprint: 8,
            breakaway: 5,
            cobbleStone: 14,
            wind: 8
        }
      ])

    //prints out the key value pairs for the attributes of the first rider in the list of riders
    // trying to figure out how to create a chart for every key that has a numerical value
    // ie make a chart for flat, hill, mountain, downhill, ...
    const riderStats = [];
    for (const [key, value] of Object.entries(riders[0])) {
        //console.log(`${key}: ${value}`);
        riderStats.push(key);
    }

  return (
    <div style={barChartPageStyle}>
        {riderStats.map((riderStat) => {
            if(isNaN(riders[0][riderStat]) || riderStat === "id"){
                console.log("don't create chart")
                return;
            }
            return <Chart key={riderStat} riders={riders} riderStat={riderStat}/>;
        }
        )}
    </div>
  )
}

const barChartPageStyle = {
    backgroundColor: '#262623', 
    border: '15px solid #630c01',
    padding: '50px'
}

export default BarChartPage
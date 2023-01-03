import React from "react";
import PropTypes from 'prop-types';
import Button from './Button';
import {useNavigate} from 'react-router-dom';

const Header = ({title}) => {

  let navigate = useNavigate();

  return(
    <header style={headingStyle}>
      <div>{title}</div>
      <nav>
        <Button color='#ffb3c4' text='Rider Cards' 
          onClick={() => {navigate("/RiderCardPage")}}
        />
        <Button color='#b3e1ff' text='Bar Chart' 
          onClick={() => {navigate("/BarChartPage")}}
        />
        <Button color='#b3ffe1' text='Grouped Bar Chart' 
          onClick={() => {navigate("/GroupedBarChartPage")}}
        />
        <Button color='#cfb3ff' text='Transition Matrix Graph' 
          onClick={() => {navigate("/TransitionMatrixGraphPage")}}
        />
      </nav>
    </header>
  )
}

Header.defaultProps = {
    title: 'Cycle Simulator',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: '#453b01',
    textAlign: 'center',
    fontSize: '50px'
}

export default Header

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
        <Button color='#8718C5' text='Rider Cards' 
          onClick={() => {navigate("/RiderCardPage")}}
        />
        <Button color='#EC1153' text='Bar Chart' 
          onClick={() => {navigate("/BarChartPage")}}
        />
        <Button color='#5BCA00' text='Grouped Bar Chart' 
          onClick={() => {navigate("/GroupedBarChartPage")}}
        />
        <Button color='#9D9D00' text='Transition Matrix Graph' 
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
    color: '#FFFF00',
    backgroundColor: '#262623',
    textAlign: 'center',
    fontSize: '50px'
}

export default Header

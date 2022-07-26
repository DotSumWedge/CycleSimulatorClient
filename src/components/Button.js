import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

const Button = ({color, text}) => {

  let navigate = useNavigate();

  const onClick = (e) => {
      console.log(text)
      if(text === "Rider Cards"){
        navigate("/RiderCardPage")
      }
      else if(text === "Bar Chart"){
        navigate("/BarChartPage")
      }
      else if(text === "Grouped Bar Chart"){
        navigate("/GroupedBarChartPage")
      }
  }
  
  return (
    <button
      onClick={onClick}
      style={{backgroundColor: color}} 
      className='btn'>
        {text}
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue'

}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button

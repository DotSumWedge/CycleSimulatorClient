import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({title}) => {
  return(
    <header className='header' style={headingStyle}>
      <h1>{title}</h1>
      <Button color='purple' text='Team' />
      <Button color='pink' text='Upcoming Races' />
      <Button color='brown' text='Results' />
      <Button color='red' text='Art' />
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
    color: 'blue',
    backgroundColor: 'black',
    textAlign: 'center'
}


export default Header

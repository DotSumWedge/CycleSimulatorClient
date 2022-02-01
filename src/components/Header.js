import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({title}) => {
  return(
    <header className='header'>
      <h1>{title}</h1>
      <Button color='purple' text='Team' />
      <Button color='pink' text='Upcoming Races' />
      <Button color='brown' text='Results' />
    </header>
  )
}

Header.defaultProps = {
    title: 'Cycle Simulator',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }


export default Header

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Button(props) {
  function handleClick(event) {
    if (event.target.name === "prev") {
      props.func((prev) => (prev === 0 ? 4 : prev - 1));
    } else {
      props.func((prev) => (prev === 4 ? 0 : prev + 1));
    }
  }
  return (
    // <button className="btn" onClick={handleClick} name={props.action}>
    //   {props.name}
    // </button>
    <NavigateNextIcon onClick={handleClick}/>
  );
}

export default Button;

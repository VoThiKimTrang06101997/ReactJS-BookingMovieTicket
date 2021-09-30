import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles({
  carousel: {
    position: 'relative'
  },
  Arrow: {
    position: "absolute",
    top: "48%",
    transform: "translateY(-50%)",

    zIndex: 2,
    width: "50px",
    height: "100px",
    color: "#d8d8d8 !important",
    cursor: "pointer",
    transition: "all .2s",
    '&:hover': { color: '#fb4226 !important' }
  },

  play: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    border: '2px solid white',
    borderRadius: '50%',
    transition: 'all 0.2s',
    opacity: 0,
    zIndex: 2,
    color: 'white',
    display: 'none',
    cursor: 'pointer'
  },
  showTime__Item: {
    position: 'relative',
    '&:hover i': {
      display: 'block',
      opacity: 1
    }
  }
})
export default useStyles

import { createMuiTheme, makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
  root: {
    display: 'flex',

    maxWidth: "940px",
    margin: "auto",
    height: "80px",
    position: "absolute",
    bottom: "0",
    width: "100%",
    left: "50%",
    transform: "translate(-50%,50%)",

    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: '0 0 10px rgb(0 0 0 / 30%)',

    alignItems: "center",
  },
  selectFilm: {
    flex: '30%'
  },
  item: {
    flex: "calc(70% / 4)"
  },
  label: {
    display: 'none'
  },
  buyButton: {
    marginLeft: '15px',
    width: '140px',
    height: '45px',
    textAlign: 'center',
    color: 'white',
    textDecoration: 'none',
    lineHeight: '45px',
    borderRadius: '5px',
    '&:hover': {
      color: 'white',
      textDecoration: 'none'
    }
  },
  buyButton__disabled: {
    backgroundColor: '#00000078'
  },
  buyButton_active: {
    backgroundColor: 'black'
  }
})
export default useStyle

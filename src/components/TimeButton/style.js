import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
    theaterMovieTime: {
        fontSize: '15px',
        margin: '0 10px 10px 0',
        padding: '5px 0',
        transition: 'all .2s',
        textDecoration: 'none',
        display: 'block',
        textAlign: 'center',
        backgroundColor: 'rgba(246,246,246,.5)',
        borderRadius: '7px',
        color: '#9b9b9b',
        border: '1px solid #e4e4e4',
        '&:hover': {
            textDecoration: 'none',
            color: 'red'

        }
    }
})
export default useStyle
import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({

    // style của ads, chưa sửa lại, để sửa sau
    theater: {
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        marginTop: '20px',
        border: '1px solid #ebebec'
    },

    theaterMovieList: {
        overflowY: 'scroll',
        height: '500px',
        '&::-webkit-scrollbar': {
            width: '5px',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: '#ebebec',
            borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '10px',
            backgroundColor: '#00000038',
        },
        '& span': {
            color: 'white',
            backgroundColor: 'red',
            borderRadius: '5px',
            fontSize: '15px',
            fontWeight: 'bold',
            padding: '3px 5px',
        },
        '& p': {
            margin: 0,
            lineHeight: 1.7,
            fontSize: '12px',
            color: '#9b9b9b',
        }
    },
    theaterChildList: {
        overflowY: 'scroll',
        height: '500px',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        '&::-webkit-scrollbar-track': {
            display: 'none',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#00000038',
        },
        '& p': {
            fontSize: '11px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontWeight: '300'
        }

    },
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
    },
})
export default useStyle
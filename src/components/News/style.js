import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(news => ({
    root: {
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        padding: '70px 0',
        // chua responsive
        '@media (max-width:768px)':{
            display:'none'
        }
    },

    fullImg: {
        width: '100%',
        height: '100%',
    },

    appBar: {
        backgroundColor: 'transparent',
        color: 'black',
        boxShadow: 'none',
        justifyContent: 'center',
        alignItem: 'center',
    },

    tabBar: {
        justifyContent: 'space-evenly',
        width: '50%',
        margin: '0 auto',
    },

    tabButton: {
        width: '33%'
    },

    hotNews: {
        color: 'black',
        width: '95%',
        '& img': {
            width: '100%',
            height: '280px'
        },
        '&:hover': {
            color: 'black',
            textDecoration: 'none',
        },
        '& div': {
            marginTop: '20px',
            '& h4': {
                fontSize: '17px',
                fontWeight: 'bold',
                height: '45px'
            },
            '& p': {
                fontSize: '13px',
                height: '45px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            }
        },


    },

    latestNews: {
        color: 'black',
        width: '100%',
        '& img': {
            width: '100%',
            height: '180px'
        },
        '&:hover': {
            color: 'black',
            textDecoration: 'none',
        },
        '& div': {
            marginTop: '20px',
            '& h4': {
                fontSize: '17px',
                fontWeight: 'bold',
                height: '45px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            },
            '& p': {
                fontSize: '13px',
                height: '45px',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
            }
        },
    },

    bonusNews: {
        color: 'black',
        '&:hover': {
            color: 'black',
            textDecoration: 'none',
        },
        '& p': {
            fontSize: '13px',
        },
        '& img': {
            width: '100%',
            height: '100%'
        }
    }
}))
export default useStyle
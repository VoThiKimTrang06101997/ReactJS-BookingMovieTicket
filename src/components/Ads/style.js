import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles(theme => ({

    mobileApp: {
        backgroundImage: 'url("../img/mobile/backapp.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        height: 650,
        '@media (max-width:991px)': {
            height: '100%'
        }
    },
    mainMaxWidth: {
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        paddingTop: 60,
        paddingBottom: 60,
    },
    mobileApp__right: {
        backgroundImage: 'url("../img/mobile/mobile.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 7,
        width: '50%',
        margin: '0 auto',
        '@media (max-width:991px)': {
            width: '38%'
        },
        '@media (max-width:425px)':{
            width:'50%'
        }
    },

    mobileApp__left: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& a': {
            color: 'white',
        },
        '@media (max-width: 991px)': {
            textAlign: 'center'
        }
    },
    textLeft: {
        fontWeight: 700,
        fontSize: 30,
    },

    'slick-mobile': {
        minWidth: '236px',
        '@media (max-width:425px)':{
            minWidth:'100%'
        },
        maxWidth: '350px',
        margin: '0 auto',
        '& img': {
            width: '100%',
            height: '100%',
            display: 'block',
            borderRadius: 20
        },
    }
}))
export default useStyle
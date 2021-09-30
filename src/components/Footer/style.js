import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({

    logo: {
        width: '30px',
        height: '30px',
        borderRadius: '50%',
    },

    footer: {
        backgroundColor: '#222',
        color: 'white',
        fontSize: '12px',
        padding: '20px 0',
        '& a': {
            color: '#949494',
            display: 'block',
        }
    },

    footer__content: {
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto'
    },

    footer__up: {
        '@media (max-width: 767px)': {
            justifyContent: 'center'
        },
        '@media (max-width:991px)': {
            alignItems: 'center'
        }
    },

    footer__tix: {
        fontWeight: '700',
        // paddingRight: '40px',
        '@media (max-width:991px)': {
            justifyContent: 'center',
        }
    },

    tix__policy: {
        '@media (max-width:991px)': {
            display: 'flex',
            justifyContent: 'space-around',
            '& a': {
                marginRight: '30px'
            }
        },
        '@media (max-width:767px)': {
            display: 'inline-flex',
            margin: '0 auto'
        }
    },

    footer__social: {
        display: 'flex',
        justifyContent: 'space-between',
        textAlign: 'center',
        '@media (max-width:991px)': {
            '& a': {
                marginRight: '15px'
            }
        }
    },

    /* footer-down */
    footer__down: {
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        paddingTop: '20px',
        position: 'relative',
        '&::before': {
            content: "",
            width: '100%',
            height: '1px',
            backgroundColor: 'white',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
        }
    },

    down__left: {
        '& img': {
            width: '130px',
            borderRadius: '10px'
        },
        '@media (max-width:767px)': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 0'
        }

    },

    down__middle: {
        '& p:first-child': {
            fontWeight: 'bold',
            color: 'white'
        },
        '& p': {
            marginBottom: 0,
            color: '#949494'
        },
        '& span': {
            color: 'red'
        },
        '@media (max-width:991px)': {
            textAlign: 'center'
        }
    },

    down__right: {
        '& img': {
            width: '130px',
            float: 'right'
        },
        '@media (max-width:767px)': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px 0'
        }
    }
})
export default useStyle
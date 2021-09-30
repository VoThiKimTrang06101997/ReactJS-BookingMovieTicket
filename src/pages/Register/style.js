import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
    label: {
        textTransform: 'uppercase',
        width: '30%',
        color: '#fff',
        display: 'block',
        // color: 'white',
        fontSize: '12px',
        paddingLeft: '10px',
    },
    input: {
        width: '100%',
        color: 'black',
        display: 'block',
        border: 'none',
        padding: '15px 20px',
        borderRadius: '25px',
        background: 'white',
    },
    button: {
        textTransform: 'uppercase',
        width: '100%',
        color: '#fff',
        display: 'block',
        border: 'none',
        padding: '15px 20px',
        borderRadius: '25px',

        background: '#1161ee',
    },
    // loginWrap: {
    //     width: '100%',
    //     margin: 'auto',
    //     maxWidth: '525px',
    //     // minHeight: '850px',
    //     height: '100vh',
    //     position: 'relative',
    //     boxShadow: ' 0 12px 15px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19)',
    // },
    // loginHtml: {
    //     width: '100%',
    //     height: '100%',
    //     position: 'absolute',
    //     padding: '90px 70px 50px 70px',
    //     background: 'transparent',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    // },
    loginHtml: {
        width: '35%',
        margin: '0 auto',
        paddingTop: '50px',
        '@media (max-width:768px)': {
            width: '50%'
        },
        '@media (max-width:425px)': {
            width: '90%'
        }
    },

    // signInHtml: {
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    //     position: 'absolute',
    // },

    signUp: {
        fontSize: '22px',
        marginRight: '15px',
        paddingBottom: '5px',
        margin: '0 15px 20px 0',
        display: 'inline-block',
        borderBottom: '2px solid transparent',
        color: 'white',
        textTransform: 'uppercase',
        width: '100%',
        textAlign: 'center'
    },

    // loginForm: {
    //     minHeight: '345px',
    //     position: 'relative',
    //     perspective: '1000px',
    //     transformStyle: 'preserve-3d',
    // },

    group: {
        marginBottom: '15px',
    },

    // check: {
    //     color: 'white',
    // },

    devide: {
        height: '2px',
        margin: '30px 0',
        background: 'rgba(255, 255, 255, 0.2)',
    },

    footLnk: {
        textAlign: 'center',
        color: 'white',
        width: '100%',
        '& a': {
            color: 'white',
            textDecoration: 'none'
        }
    }

})
export default useStyle
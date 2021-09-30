import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
    mainOfRoom: {
        padding: '30px'
    },
    name__room: {
        '& p:first-child': {
            fontSize: '18px'
        },
        '& p:last-child': {
            color: '#9b9b9b'
        }
    },
    topRoom__screen: {
        '& img': {
            display: 'block',
            width: '100%',
            height: '100px',
        }
    },

    mainOfRoom__midRoom: {
        padding: '10px 130px 35px',
        '@media (max-width:768px)': {
            padding: '10px 30px 35px',
        },
        '@media (max-width:425px)': {
            padding: '10px 0px 35px',
        },

    },
    seat: {
        width: '6%',
        padding: '3px',
        height: '30px',
        lineHeight: 1,
        display: 'block',
        overflow: 'hidden',
        borderRadius: '5px',
        '& button': {
            width: '100%',
            height: '100%',
            borderRadius: '5px',
            padding: '2px',
            '&:focus': {
                outline: 'none',
                border: 'none'
            }
        }
    },
    seatCanNotSelect: {
        backgroundColor: 'rgba(16,34,53,.2)',
        cursor: 'no-drop',
    },

    seatSelected: {
        backgroundColor: 'green',
    },
    seatCanSelect: {
        // backgroundColor: '#3e515d',
        backgroundColor: 'yellow'
    },

    midRoom__note: {
        margin: '0 auto',
    },
    note__item: {
        position: 'relative',
        '& div': {
            width: '25%',
            margin: '0 auto',
            '@media (max-width:425px)': {
                width: '60%'
            },

        },
        '& span': {
            position: 'absolute',
            top: '50px',
            width: '100%',
            textAlign: 'center'
        }
    },

    mainOfBill: {
        position: 'relative',
        width: '100%',
        height: '130vh',
        paddingLeft: '15px',
        paddingRight: '15px',
        boxShadow: ' 0 0 15px rgb(0 0 0 / 30%)',
        borderRadius: '0 0 15px 15px',
        '& h1': {
            textAlign: 'center',
            marginBottom: 0,
            lineHeight: '113px'
        },
        '@media (max-width: 767px)': {
            position: 'relative',
            padding: '50px',
            boxShadow: 'none'
        }
    },
    mainOfBill__item: {
        height: '113px',
        position: 'relative',
        '&::after': {
            content: "''",
            display: 'block',
            width: '100%',
            height: '1px',
            borderBottom: '1px dashed #e9e9e9',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transform: 'translate(-50%, -50%)',
        }
    },
    mainOfBill__total: {
        color: 'green',
    },
    mainOfBill__infoMovie: {
        '& p:first-child': {
            fontSize: '18px',
            fontWeight: '700',
            '& span': {
                backgroundColor: 'red',
                color: 'white',
                borderRadius: '5px',
                padding: '2px 5px',
                fontWeight: '700',
            }
        },
    },
    seatSelect__name: {
        color: 'green',
        fontSize: "20px"
    },
    buyTickketButton: {
        paddingtop: '15px',
        height: '60px',
        cursor: 'pointer',
        fontSize: '24px',
        textAlign: 'center',
        width: '100%',
        border: 'none',
        borderRadius: '10px',
        position: 'absolute',
        right: 0,
    },
    disableButton: {
        color: '#e9e9e9',
        backgroundColor: '#afafaf',
    },
    activeButton: {
        color: '#e9e9e9!important',
        backgroundImage: 'linear-gradient( 223deg, #b4ec51 0, #429321 100%)',
    }
})
export default useStyle
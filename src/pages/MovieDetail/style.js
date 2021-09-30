import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles((theme) => ({

    ul: {
        listStyle: 'none'
    },
    movieDetail: {
        backgroundColor: 'rgb(10, 32, 41)',
        height: '1075px',
        // height: '625px',
    },
    movieDetail__up: {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '450px',
        position: 'relative',
        '@media (max-width:767px)': {
            height: '350px'
        }
    },
    up__content: {
        maxWidth: '1000px',
        width: '100%',
        height: '100%',
        margin: '0 auto',
        color: 'white'
    },
    content__left: {
        alignItems: 'center',
        height: '100%',
        padding: '0 20px',
        '@media (max-width:768px)': {
            padding: '0 0 0 70px'
        },
        '@media (max-width:425px)': {
            alignItems: 'flex-end',
            padding: '0 0 0 25px'
        }

    },
    leftImg: {
        width: '260px',
        height: '350px',
        border: '2px solid white',
        // marginRight: '25px',
        borderRadius: '10px',
        '& img': {
            borderRadius: '10px',
            width: '100%',
            height: '100%'
        },
        '@media (max-width:768px)': {
            width: '180px',
            height: '290px'
        },
    },
    leftName: {
        color: '#e9e9e9',
        fontWeight: 'bold',
        paddingLeft: '20px',
        '& p:first-child': {
            fontSize: '16px'
        },
        '& div': {
            display: 'flex',
            alignItems: 'center',
            '& p': {
                marginBottom: 0,
                fontSize: '22px',
            },
            '& span': {
                fontSize: '14px',
                backgroundColor: 'red',
                borderRadius: '5px',
                padding: '2px 5px',
                marginRight: '5px'
            }
        }
    },
    leftName__button: {
        fontSize: '16px',
        borderRadius: '4px',
        textAlign: ' center',
        background: ' 0 0',
        padding: '7px 25px',
        transition: 'all 0.2s',
        marginTop: '25px',
        marginBottom: ' 20px',
        backgroundColor: ' #fb4226',
        border: 'none',
        color: '#fff',
    },

    content__right: {
        paddingRight: '20px'
    },

    play: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '50px',
        opacity: 0,
        zIndex: 2,
        color: 'white',
        cursor: 'pointer',
        display: 'none',
        '&:hover': {
            color: '#ff7668'
        },
        '@media (max-width:767px)': {
            opacity: 1,
            display: 'block'
        },
    },

    movieRating__circle: {
        width: '120px',
        height: '120px',
        border: '9px solid #44c020',
        borderRadius: '50%',
        position: 'absolute',
        // vì border của tag h1 dày 9px -> nội dung bị đẩy vào 9px, làm top 0, left 0 bắt đầu bị lệch đi 9 px, vì vậy ta -9px đi để nó trở lại vị trí gốc bị ảnh hưởng bởi border
        left: '-9px',
        top: '-9px'
    },
    movieRating__point: {
        position: 'relative',
        width: '120px',
        height: '120px',
        border: '9px solid #3a3a3a',
        borderRadius: '50%',
        lineHeight: '108px',
        textAlign: 'center',
        float: 'right',
        fontWeight: 'bold',
        fontSize: '60px',
        color: '$e9e9e9'
    },

    movieDetail__down: {
        maxWidth: '1000px',
        with: '100%',
        margin: '0 auto'
    },
    movieInfo: {
        color: 'white',
        fontWeight: 'bold',
        width: '100%',
        maxWidth: '480px',
        margin: '0 auto',
    },
    movieValues: {
        padding: '20px',
        maxWidth: '1000px',
        width: '100%',
        margin: '0 auto',
        '& ul': {
            listStyle: 'none'
        },
        '& ul:first-child': {
            marginRight: '50px'
        }
    },

    theaterMovieDetail: {
        overflowY: 'scroll',
        height: '500px',
        padding: '0 20px',
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
        },
        '@media (max-width:425px)': {
            height: '450px'
        }
    },
    theaterMovieDetailTime: {
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
    evaluate: {
        backgroundColor: 'white',
        width: '70%',
        margin: '0 auto',
        minWidth: '300px',
        padding: '20px 0',
        borderRadius: '15px',
        '& div': {
            width: '90%'
        },
        '& span': {
            backgroundColor: 'green',
            color: 'white',
            padding: '12px 15px',
            borderRadius: '50%',
            marginRight: '7px'
        }

    }
}))
export default useStyle
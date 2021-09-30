import { Dialog } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
// import CloseIcon from '@material-ui/icons/Close';
import React from 'react'
import useStyle from './style';


export default function PopUp(props) {
    const { trailer, open } = props
    const classes = useStyle()
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const md = useMediaQuery(theme.breakpoints.up('md'));

    const handleButton = () => {
        props.onHandleButton(!open)
    }
    return (
        <Dialog
            onClick={() => handleButton()}
            open={open}
            maxWidth='md'
        >
            <iframe title="Trailer Movie" className={`${sm && classes.downRangeSm} ${md && classes.upKeyMd}`} src={trailer.indexOf('https') > -1 ? trailer : "https://www.youtube.com/embed/fB8TyLTD7EE"} frameBorder="0" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></iframe>
            {/* <IconButton className={classes.closeButton} onClick={() => handleButton()} >
                <CloseIcon style={{ color: 'white' }} fontSize='small' />
            </IconButton> */}
        </Dialog>
    )
}

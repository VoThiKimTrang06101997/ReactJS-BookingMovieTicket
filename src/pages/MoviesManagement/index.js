import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createMuiTheme, Dialog, MuiThemeProvider } from '@material-ui/core';
import Form from './Form';
import { deleteMovie, getMovieList } from '../../reducers/actions/Movie';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FormAddShowTime from './FormAddShowtime';
const columns = [

  { id: 'tenPhim', label: 'Tên Phim', Width: '20%', align: 'center', },
  {
    id: 'hinhAnh',
    label: 'Hình Ảnh',
    Width: '14%',
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },

  {
    id: 'moTa',
    label: 'Mô Tả',
    Width: '25%',
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'ngayKhoiChieu',
    label: 'Ngày Chiếu',
    minWidth: '11%',
    align: 'center',
    format: (value) => value.toLocaleString('en-US', { timeZone: 'UTC' }),
  },
  {
    id: 'danhGia',
    label: 'Đánh Giá',
    minWidth: '14%',
    align: 'center',
    format: (value) => value.toFixed(1),
  },
  { id: 'action', label: 'Hành Động', Width: '10%', align: 'center', },
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  box: {
    backgroundColor: "#F4F6F8",
    minHeight: '90vh',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: "translate(50%,-50%)",

    border: '2px solid white',
    '&:focus': {
      outline: 'none'
    },
    '&:hover': { opacity: 0.7 },
    transition: "all .2s",

  },
  downRangeSm: {
    width: "598px",
    height: "336px"
  },
  upKeyMd: {
    width: "898px",
    height: "505px"
  },
});

export default function UsersManagement() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const theme = createMuiTheme({

    overrides: {

      MuiIconButton: {
        root: {
          padding: '12px 0'
        }
      },
      MuiTableCell: {
        root: {
          padding: '16px 0'
        }
      }

    }
  });
  useEffect(() => {
    document.title = 'Quản lý phim'
  })
  // biến set đóng mở cái dialog
  const [open, setOpen] = useState(false);
  const [openFormShowTime, setOpenFormShowTime] = useState(false)
  const [movieAddShowTime, setMovieAddShowTime] = useState(0)
  // biến chứa movie được chọn để update
  const [movieSelect, setMovieSelect] = useState({})

  // biến set TH disable cái taiKhoan khi tiến hành update tài khoản
  const [isActive, setIsActive] = useState(false)

  // lấy usersList trên store về
  const { movieList, loading, error } = useSelector((state) => state.movieReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovieList())
  }, [])

  // biến chứa giá trị khi nhập vào ô input search
  const [valueTarget, setValueTarget] = useState("")

  // khi nhấn mũi tên tăng hoặc giảm số page
  const handleChangePage = (event, newPage) => {
    setPage(newPage);// tự tăng số page lên 1 từ mặc định 0
    console.log('action 1')
  };
  // khi thay đổi Rows per page
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    console.log('action 2')
  };

  // XÓA PHIM
  const handleDelete = (movieId) => {
    dispatch(deleteMovie(movieId))
  }

  // TRUYỀN DATA XUỐNG FORM VÀ BUNG FORM RA: NHẤN VÀO NÚT EDIT
  const handleUpdate = (movie) => {
    setMovieSelect(movie)
    handleButton()
    setIsActive(!isActive)
  }

  // hàm set đóng mở của dialog
  const handleButton = () => {
    setOpen(!open)
  }

  const handleButtonAddShowtime = () => {
    setOpenFormShowTime(!openFormShowTime)
  }

  // nhấn nút close sẽ thay đổi trạng thái của dialog và biến input Tài khoản
  const handleClose = () => {
    handleButton()
    setIsActive(false)

    // set biến userSlect về rỗng lại, tránh bị ghi đè giá trị trc lên
    setMovieSelect({})
  }

  const addMovie = () => {
    // vì data truyền xuống ban đầu là rỗng ( hoặc cũng bị xóa sạch khi update xong) nên ta cho nó thêm biến maNhom để có thể nhận data ở trường hợp select-option
    setMovieSelect({
      maNhom: 'GP01'
    })
    handleButton()
  }

  const handleAddShowtime = (movieId) => {
    handleButtonAddShowtime()
    setMovieAddShowTime(movieId)
  }

  const handleCloseFormAddMovieShowTime = () => {
    handleButtonAddShowtime()
    setMovieAddShowTime(0)
  }

  return (

    <MuiThemeProvider theme={theme}>

      <Box px={3} className={classes.box}>

        <Paper className={classes.root}>

          <Grid container justify='space-between' alignItems='center'>
            <Grid item >
              <button className="btn btn-success" onClick={() => addMovie()}>Thêm phim</button>
            </Grid>
            <Grid item>
              <h4>Thông báo: {error ? error : null}</h4>
            </Grid>
            <Grid item>
              <input type='text' placeholder='Nhập vào tên phim' onChange={(evt) => setValueTarget(evt.target.value)} />
            </Grid>
          </Grid>

          <TableContainer className={classes.container}>
            <TableContainer stickyHeader aria-label="sticky table">

              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ width: column.Width }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>

                {/* chức năng search dùng đc cho cả chữ hoa chữ thường */}
                {movieList.filter((movieItem) => {
                  return movieItem.tenPhim.toLowerCase().trim().indexOf(valueTarget.toLowerCase().trim()) !== -1
                }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.maPhim}>
                      {columns.map((column) => {
                        const value = row[column.id];

                        // vì value của côt hinhAnh là một chuỗi nên ta cần biến nó thành 1 tag <img>
                        if (column.id === "hinhAnh")
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <img style={{ width: '100px', height: '100px' }} src={typeof (value) === 'object' ? window.URL.createObjectURL(value) : value} alt="IMG" />
                            </TableCell>
                          )

                        // sửa cái ngayKhoiChieu cho nó đẹp hơn tí :))
                        if (column.id === "ngayKhoiChieu") {
                          const dateAndTime = value.split('T')
                          return (
                            <TableCell className="text-center">
                              <p>{dateAndTime[0]}</p>
                              <p>{dateAndTime[1]}</p>
                            </TableCell>
                          )
                        }
                        return (
                          <TableCell key={column.id} align={column.align}>

                            {/* nếu không tồn tại props thì in ra hành động xóa và chỉnh sửa */}
                            { typeof value !== "undefined" ? value :
                              <Grid container direction="row" justify="space-around" alignItems="center" >

                                {/* NÚT EDIT */}
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                  <EditIcon color="primary" disabled={loading} onClick={() => handleUpdate(row)} />
                                </IconButton>

                                {/* NÚT DELETE */}
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                  <DeleteForeverIcon color="primary" disabled={loading} onClick={() => handleDelete(row.maPhim)} />
                                </IconButton>

                                <IconButton color="primary" aria-label="upload picture" component="span" >
                                  <DateRangeIcon color="primary" disabled={loading} onClick={() => handleAddShowtime(row.maPhim)} />
                                </IconButton>

                              </Grid>}

                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>

            </TableContainer>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={movieList.length} // độ dài
            rowsPerPage={rowsPerPage}
            page={page}// trang hiện tại
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />

        </Paper>

      </Box>

      <Dialog open={open} maxWidth='md'>

        <Form key={movieSelect.maPhim} movieUpdate={movieSelect} onChangeMaPhim={isActive} onChangeIsActive={handleClose} />

      </Dialog>

      <Dialog open={openFormShowTime} maxWidth='md' >
        <FormAddShowTime movieIdAddShowTime={movieAddShowTime} onCloseForm={handleCloseFormAddMovieShowTime} />

      </Dialog>



    </MuiThemeProvider>
  );
}

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
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
import { deleteUser, getUsersList } from "../../reducers/actions/User";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createMuiTheme, Dialog, MuiThemeProvider } from '@material-ui/core';
import FormUser from './Form';
const columns = [

  { id: 'taiKhoan', label: 'Tài Khoản', Width: '14%', align: 'center' },
  { id: 'matKhau', label: 'Mật khẩu', Width: '13%', align: 'center' },
  {
    id: 'hoTen',
    label: 'Họ Tên',
    Width: '15%',
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'email',
    label: 'Email',
    Width: '15%',
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'soDt',
    label: 'Số Điện Thoại',
    Width: '15%',
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'maLoaiNguoiDung',
    label: 'Loại Người Dùng',
    Width: '15%',
    align: 'center',
    format: (value) => value.toFixed(2),
  },
  { id: 'action', label: 'Hành Động', Width: '13%', align: 'center' },
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
    document.title = 'Quản lý người dùng'
  })
  // biến set đóng mở cái dialog
  const [open, setOpen] = useState(false);
  // const [openMessage, setOpenMessage] = useState(false)
  // biến chứa user được chọn để update
  const [userSelect, setUserSelect] = useState({})

  // biến set TH disable cái taiKhoan khi tiến hành update tài khoản
  const [isActive, setIsActive] = useState(false)

  // lấy usersList trên store về
  const { usersList, loading, error } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersList())
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

  // XÓA NGƯỜI DÙNG
  const handleDelete = (taiKhoan) => {
    dispatch(deleteUser(taiKhoan))
  }

  // TRUYỀN DATA XUỐNG FORM VÀ BUNG FORM RA: NHẤN VÀO NÚT EDIT
  const handleUpdate = (user) => {

    // thêm giá trị mã nhóm vào vì user đẩy lên ko có mã nhóm
    const updateUser = { ...user, maNhom: 'GP01' } // sửa ở đây
    setUserSelect(updateUser)
    handleButton()
    setIsActive(!isActive)
  }

  // hàm set đóng mở của dialog
  const handleButton = () => {
    setOpen(!open)

  }

  // nhấn nút close sẽ thay đổi trạng thái của dialog và biến input Tài khoản
  const handleClose = () => {
    handleButton()

    setIsActive(false)

    // set biến userSlect về rỗng lại, tránh bị ghi đè giá trị trc lên
    setUserSelect({})
  }

  const addUser = () => {
    // data truyền xuống không có biến maNhom với maLoaiNguoiDung nên ta thêm vào
    let updateUser = {}
    updateUser = { ...updateUser, maNhom: 'GP01', maLoaiNguoiDung: 'KhachHang' }

    setUserSelect(updateUser)
    handleButton()
  }

  return (

    <MuiThemeProvider theme={theme}>

      <Box px={3} className={classes.box}>

        {/* <Typography variant="h2" gutterBottom>
          Thông báo: {error ? error : "Không có lỗi"}
        </Typography> */}

        <Paper className={classes.root}>
          <Grid container justify='space-between' alignItems='center'>
            <Grid item >
              <button className="btn btn-success" onClick={() => addUser()}>Thêm người dùng</button>
            </Grid>
            <Grid item>
              <h4>Thông báo: {error ? error : null}</h4>
            </Grid>
            <Grid item>
              <input type='text' placeholder='Nhập vào tài khoản' onChange={(evt) => setValueTarget(evt.target.value)} />
            </Grid>
          </Grid>

          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
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

                {/* Mảng sau khi chạy qua filter mới được dàn ra */}
                {usersList.filter((user) => {
                  return user.taiKhoan.toLowerCase().indexOf(valueTarget.toLowerCase()) !== -1
                }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.taiKhoan}>
                      {columns.map((column) => {
                        const value = row[column.id];

                        return (
                          <TableCell key={column.id} align={column.align}>
                            {/* nếu không tồn tại props thì in ra hành động xóa và chỉnh sửa */}
                            { typeof value !== "undefined" ? value :
                              <Grid container direction="row" justify="space-around" alignItems="center" >

                                {/* NÚT EDIT */}
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                  <EditIcon color="primary" onClick={() => handleUpdate(row)} disabled={loading} />
                                </IconButton>

                                {/* NÚT DELETE */}
                                <IconButton color="primary" aria-label="upload picture" component="span">


                                  <DeleteForeverIcon color="primary" onClick={() => handleDelete(row.taiKhoan)} disabled={loading} />

                                </IconButton>

                              </Grid>}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={usersList.length} // độ dài
            rowsPerPage={rowsPerPage}
            page={page}// trang hiện tại
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />

        </Paper>

      </Box>

      <Dialog open={open} style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        {/* onClose={handleButton} */}
        <FormUser userUpdate={userSelect} onChangeTK={isActive} onChangeIsActive={handleClose} />
      </Dialog>

    </MuiThemeProvider>
  );
}

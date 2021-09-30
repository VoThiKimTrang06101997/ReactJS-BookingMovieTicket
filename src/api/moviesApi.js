import axiosClient from "./axiosClient";
const moviesApi = {

  getDanhSachPhim: () => {
    const path = "/QuanLyPhim/LayDanhSachPhim?maNhom=GP03";
    return axiosClient.get(path);
  },

  //========================================= KHÔNG SỬ DỤNG =========================================
  //lấy thông tin của 1 phim, bao gồm 1 mảng lichChieu<obj> không phân biệt cụm rạp
  getThongTinPhim: (maPhim) => {
    const path = `/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
    return axiosClient.get(path);
  },

  //không co param sẽ 1 trang, 10 phần tử
  getDanhSachPhimPhanTrang: (param) => {
    const path = `/QuanLyPhim/LayDanhSachPhimPhanTrang`;
    // param = ?maNhom=GP09&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`
    return axiosClient.get(path, { param });
  },
  //==================================================================================================

  postThemPhim: (movie) => {
    const path = `/QuanLyPhim/ThemPhimUploadHinh`;
    //trong obj movie có key hinhAnh là file nên phải chuyển sang formData
    const formData = new FormData();
    for (const key in movie) {
      formData.append(key, movie[key]);
    }
    return axiosClient.post(path, formData);
  },

  postCapNhatPhim: (movie) => {
    const path = `/QuanLyPhim/CapNhatPhimUpload`;
    const formData = new FormData();
    for (const key in movie) {
      formData.append(key, movie[key]);
    }
    return axiosClient.post(path, formData);
  },

  deleteMovie: (maPhim) => {
    const path = `/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    return axiosClient.delete(path);
  },
};

export default moviesApi;

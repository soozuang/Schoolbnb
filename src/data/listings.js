
import colors from '../styles/colors';

const listings = [
  {
  	title: 'Theo ',
  	boldTitle: false,
  	showAddToFav: true,
  	listings: [
  	  {
      }
  	]
  },
  {
  	title: 'Theo nhóm ngành',
  	boldTitle: false,
  	showAddToFav: true,
  	listings: [
   	  {
  	  	
  	  }
  	]
  },
  {
  	title: 'Các trường hot!',
  	boldTitle: true,
  	showAddToFav: true,
  	listings: [
  	  {
        tentruong: "Trường Đại học Sư phạm Thành phố Hồ Chí Minh",
        tentruong2: "Ho Chi Minh City University of Education",
        matruong: "SPS",
        loai: "Công lập",
        taichinh: "27000000",
        diachi: "280 An Dương Vương, Phường 4, Quận 5, Thành phố Hồ Chí Minh",
        dienthoai: "02838352020",
        website: "hcmue.edu.vn",
        logo: "http://fixi.vn/wp-content/uploads/2016/07/sps_logo.png",
        banner: "https://edu2review.com/upload/article-images/2017/09/6005/600x315_1504946758-dh-su-pham-1.jpg",
        stars: 29,
      },
      {
        tentruong: "Trường Đại học Giao thông Vận tải Thành phố Hồ Chí Minh",
        tentruong2: "HO CHI MINH CITY UNIVERSITY OF TRANSPORT",
        matruong: "GTS",
        loai: "Công lập",
        taichinh: "11000000",
        diachi: "Số 2, đường D3, Phường 25, Bình Thạnh, TP Hồ Chí Minh",
        dienthoai: "0868924555",
        website: "www.ut.edu.vn",
        logo: "https://thituyensinh.vn/frontendTs/viewimageservlet?path=/app/moet/uploadFiles/GTS/2018/3/28/20180328151128_logo.png",
        banner: "http://img2.news.zing.vn/2012/03/27/gt1.jpg",
        stars: 29,
      },
      {
        tentruong: "Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội",
        tentruong2: "VNU University of Economics and Business",
        matruong: "QHE",
        loai: "Công lập",
        taichinh: "19000000",
        diachi: "số 144 đường Xuân Thủy, Cầu Giấy, Hà Nội",
        dienthoai: "02437547506",
        website: "ueb.vnu.edu.vn",
        logo: "https://thituyensinh.vn/frontendTs/viewimageservlet?path=/app/moet/uploadFiles/QHE/2018/3/30/20180330094613_logo.JPG",
        banner: "http://austrong.com.vn/Images/Projects/D%E1%BB%B1%20%C3%A1n%20Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Kinh%20t%E1%BA%BF%20Tp.HCM%20-%20UEH/Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20h%E1%BB%8Dc%20Kinh%20t%E1%BA%BF%20Tp.HCM%20-%20UEH%20copy.jpg",
        stars: 29,
      },
      {
        tentruong: "Trường Đại học Kinh tế Thành phố Hồ Chí Minh",
        tentruong2: "University of Economics Ho Chi Minh City",
        matruong: "DPQ",
        loai: "Công lập",
        taichinh: "12290000",
        diachi: "59C Nguyễn Đình Chiểu, phường 6, quận 3, TP Hồ Chí Minh",
        dienthoai: "02822441993",
        website: "www.ueh.edu.vn",
        logo: "https://thituyensinh.vn/frontendTs/viewimageservlet?path=/app/moet/uploadFiles/KSA/2018/3/27/20180327191851_logo.jpg",
        banner: "http://img.giaoduc.net.vn/Uploaded/thuylinh/2017_07_13/dhqghn.jpg",
        stars: 29,
      },
      {
        tentruong: "Trường Đại học Bách Khoa Hà Nội",
        tentruong2: "Hanoi University of Science and Technology",
        matruong: "BKA",
        loai: "Công lập",
        taichinh: "16000000",
        diachi: "Số 1 Đại Cồ Việt",
        dienthoai: "02438692008",
        website: "hust.edu.vn",
        logo: "https://thituyensinh.vn/frontendTs/viewimageservlet?path=/app/moet/uploadFiles/BKA/2018/3/28/20180328151429_image_gallery.png",
        banner: "https://dantricdn.com/thumb_w/600/2018/3/5/dh-bach-khoa-15202657356981019689985.jpg",
        stars: 29,
      },
      {
        tentruong: "Trường Đại học Bách Khoa - Đại học Quốc gia TP.HCM",
        tentruong2: "Ho Chi Minh City University of Technology",
        matruong: "QSB",
        loai: "Công lập",
        taichinh: "19268000",
        diachi: "268 Lý Thường Kiệt, TP Hồ Chí Minh",
        dienthoai: "02438692008",
        website: "hust.edu.vn",
        logo: "https://thituyensinh.vn/frontendTs/viewimageservlet?path=/app/moet/uploadFiles/QSB/2018/3/28/20180328140623_LogoBK_mau.png",
        banner: "http://www.aao.hcmut.edu.vn/image/cache/data/tuyensinh/ts2017/5-NhaH6-378x235.jpg",
        stars: 29,
      },
      {
        tentruong: "Trường Đại học Cần Thơ",
        tentruong2: "Can Tho University",
        matruong: "TCT",
        loai: "Công lập",
        taichinh: "9769000",
        diachi: "Khu II, đường 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ",
        dienthoai: "02923832663",
        website: "www.ctu.edu.vn",
        logo: "https://thituyensinh.vn/frontendTs/viewimageservlet?path=/app/moet/uploadFiles/TCT/2018/3/28/20180328103414_CTU.jpg",
        banner: "http://cdn.baogiaothong.vn/files/doan.le/2015/08/17/diem-chuan-dai-hoc-can-tho-1-1653.jpg",
        stars: 29,
      },
      {
        tentruong: "Trường Đại học Khoa học Tự nhiên - Đại học Quốc gia TP.HCM",
        tentruong2: "University of Natural Sciences",
        matruong: "QST",
        loai: "Công lập",
        taichinh: "15000000",
        diachi: "227 Nguyễn Văn Cừ, Phường 4",
        dienthoai: "0971522917",
        website: "tuyensinh.hcmus.edu.vn",
        logo: "https://thituyensinh.vn/frontendTs/viewimageservlet?path=/app/moet/uploadFiles/QST/2018/3/28/20180328100252_logo-khtn.png",
        banner: "http://www.itec.hcmus.edu.vn/vn/images/stories/truongDH.jpg",
        stars: 29,
      },
      {
        tentruong: "Trường Đại học Y Hà Nội",
        tentruong2: "Ha Noi Medical University",
        matruong: "YHB",
        loai: "Công lập",
        taichinh: "44877000",
        diachi: "Số 01, Phố Tôn Thất Tùng, Quận Đống Đa, Hà Nội",
        dienthoai: "02438523798 ",
        website: "www.hmu.edu.vn",
        logo: "https://thituyensinh.vn/frontendTs/viewimageservlet?path=/app/moet/uploadFiles/YHB/2018/3/28/20180328163255_AnhHMU.png",
        banner: "http://yduochn.com.vn/wp-content/uploads/dh-y-hn.jpg",
        stars: 29,
      },

      {
        tentruong: "Trường Đại học Y dược Thành phố Hồ Chí Minh",
        tentruong2: "HCMC University of Medicine and Pharmacy",
        matruong: "YDS",
        loai: "Công lập",
        taichinh: "25200000",
        diachi: "217 Hồng Bàng, Q.5, TP. Hồ Chí Minh",
        dienthoai: "02438523798 ",
        website: "www.yds.edu.vn",
        logo: "https://thituyensinh.vn/frontendTs/viewimageservlet?path=/app/moet/uploadFiles/YDS/2018/3/30/20180330103617_LogoTruong-300.png",
        banner: "https://dantricdn.com/thumb_w/640/2017/truong-dh-y-duoc-tphcm-1497500352814.jpg",
        stars: 29,
      }

  	]
  }
];

export default listings;
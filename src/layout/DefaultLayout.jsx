import { useState, useEffect } from "react";
import { MdDashboard, MdLogout } from "react-icons/md";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe, logout, reset } from "../features/authSlice";
import NotFound from "../pages/NotFound";
import propTypes from "prop-types";
import ModalLogout from "../components/modal/ModalLogout";

const DefaultLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [isModalLogout, setIsModalLogout] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const openModal = () => {
    setIsModalLogout(true);
  };

  const closeModal = () => {
    setIsModalLogout(false);
  };
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  if (!user) {
    return <NotFound />;
  }

  let menu;

  const menuAdmin = [
    {
      title: "Dasbor",
      icon: <MdDashboard />,
      to: "/dashboard",
    },
    {
      title: "Kode Kabupaten/Kota",
      icon: <MdDashboard />,
      to: "/regency-municipalities",
    },
    {
      title: "Kode Kecamatan",
      icon: <MdDashboard />,
      to: "/districts",
    },
    {
      title: "Kode Kelurahan/Desa",
      icon: <MdDashboard />,
      to: "/villages",
    },
  ];

  const menuSuperadmin = [
    {
      title: "Dasbor",
      icon: <MdDashboard />,
      to: "/dashboard",
    },
    {
      title: "Data Pengguna",
      icon: <MdDashboard />,
      to: "/users",
      isAdmin: true,
    },
    {
      title: "Data Kendaraan",
      icon: <MdDashboard />,
      to: "/vehicles",
      isAdmin: true,
    },
  ];

  const menuUser = [
    {
      title: "Dasbor",
      icon: <MdDashboard />,
      to: "/dashboard",
    },
    {
      title: "Data Kendaraan",
      icon: <MdDashboard />,
      to: "/vehicles",
    },
  ];

  switch (user && user?.role) {
    case "admin":
      menu = menuAdmin;
      break;
    case "superadmin":
      menu = menuSuperadmin;
      break;
    default:
      menu = menuUser;
      break;
  }

  return (
    <>
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-20 "
          } bg-white h-screen p-5 shadow-md  pt-8 relative duration-300`}
        >
          <IoIosArrowDroprightCircle
            className={`absolute cursor-pointer -right-3 top-9 w-8 bg-white h-8 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
          />

          <div className="flex items-center gap-x-4">
            <h1
              className={` origin-left font-medium text-xl duration-200 ${
                !open && "scale-0"
              }`}
            ></h1>
          </div>
          <ul className="pt-6">
            {menu.map((Menu, index) => (
              <Link
                to={Menu?.to}
                key={index}
                className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white font-medium text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <span>{Menu.icon}</span>
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </Link>
            ))}
          </ul>
          <div className="mt-4">
            <button
              onClick={openModal}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white font-medium text-sm items-center gap-x-4 `}
            >
              <span>
                <MdLogout />
              </span>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                Keluar
              </span>
            </button>
          </div>
        </div>
        <div className="flex-1 h-screen p-7">{children}</div>
      </div>
      <ModalLogout
        isOpen={isModalLogout}
        onClose={closeModal}
        logout={handleLogout}
      />
    </>
  );
};

DefaultLayout.propTypes = {
  children: propTypes.node,
};

export default DefaultLayout;

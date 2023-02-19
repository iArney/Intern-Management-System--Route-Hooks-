import NavBtn from "./Dashboard/NavBtn";

const SideNavbar = ({ openSideBar }) => {
  const btnName = [
    {
      id: 1,
      name: "Dashboard",
      icon: "fa-solid fa-house",
    },
    {
      id: 2,
      name: "Interns Info",
      icon: "fa-solid fa-list",
    },
  ];

  return (
    <>
      <div
        className={` w-72 md:w-96 h-full bg-slate-100 transition-all ease-in-out fixed top-20 bottom-0 z-50 ${
          openSideBar ? `translate-x-0` : `-translate-x-full`
        }`}
      >
        <div>
          {openSideBar
            ? btnName.map((btnName, index) => (
                <NavBtn
                  key={btnName.id}
                  name={btnName.name}
                  icon={btnName.icon}
                />
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default SideNavbar;

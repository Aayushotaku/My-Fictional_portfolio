const Navbar = () => {
  const navList = ["Home", "About", "Contact", "Resume", "Project"];
  return (
    <nav className="flex justify-center">
      <div className="border-single border-2 border-white w-[50%] justify-center rounded-full py-2 px-2 ">
        <ul className="flex gap-4 justify-around ">
          {navList.map((item, index) => (
            <li className="text-white hover:text-yellow-600 hover:scale-110 transition-all duration-500 font-semibold" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
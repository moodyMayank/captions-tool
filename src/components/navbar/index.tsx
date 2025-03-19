const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full my-6">
      <h1 className="text-5xl font-extrabold text-black text-center">
        Video Captions Editor
      </h1>
      <div>
        <button>Download Video</button>
        <button>Download Captions</button>
      </div>
    </nav>
  );
};

export default Navbar;

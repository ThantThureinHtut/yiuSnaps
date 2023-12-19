import logo from "../public/img/YIU.jpeg";
function welcome() {
  return (
    <>
      <div className=" flex flex-col text-center items-center h-screen justify-center ">
        <img src={logo} alt="" width={100} className="mb-2 animate-fad" />
        <h1 className="mb-4 text-4xl text-yiumaincolor font-semibold ">
          Welcome To YIU Snaps
        </h1>
      </div>
    </>
  );
}

export default welcome;

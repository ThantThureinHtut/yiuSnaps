function student(props) {
  const { name, about, img, error } = props.student;
  console.log(img.length);
  return (
    <>
      <div className="   flex justify-center">
        <div className="p-4 shadow-md m-4  flex justify-center text-center items-center w-1/2">
          <div className="text-center flex flex-col justify-center  items-center">
            <h1 className="text-3xl font-semibold text-yiumaincolor ">
              {name}
            </h1>
            <p className="text-yiumaincolor">{about}</p>
            <p
              className={
                error.length > 0
                  ? "text-red-500 p-2 bg-red-200 rounded-sm mt-4"
                  : "text-white "
              }
            >
              {error}
            </p>
            <div
              className={
                img.length > 1
                  ? "grid grid-cols-3 text-center items-center justify-center"
                  : "bg-white grid grid-cols-1 items-center justify-center text-center "
              }
            >
              {img.map((imgs) => (
                <img key={imgs} src={imgs} width={200} className="mt-10" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default student;

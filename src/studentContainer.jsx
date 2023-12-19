import data from "./studentdata.json";
import Student from "./student";
function studentContainer() {
  return (
    <>
      <div>
        {data.map((datas) => {
          return <Student key={datas.id} student={datas} />;
        })}
      </div>
    </>
  );
}

export default studentContainer;

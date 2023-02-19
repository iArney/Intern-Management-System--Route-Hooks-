import CircularBar from "./CircularBar";

const TotalInterns = () => {
  console.log("reached");
  return (
    <div className="md:flex justify-around mx-auto">
      <div>
        <div className="p-3 w-full">
          <h2 className="text-blue-900 text-3xl font-bold">
            Total Applied Interns{" "}
            <span className=" text-blue-200  md:text-slate-100 p-3"> 250 </span>{" "}
          </h2>{" "}
        </div>{" "}
        <div className=" p-3 block mt-6 bg-slate-100 px-1 rounded-md shadow-md mx-auto w-60 font-medium text-blue-500 -z-10">
          <div className="p-3 flex justify-between">
            <div> UI / UX </div> <div> 100 </div>{" "}
          </div>{" "}
          <div className="p-3 flex justify-between">
            <div> Frontend Dev </div> <div> 80 </div>{" "}
          </div>{" "}
          <div className="p-3 flex justify-between">
            <div> Backend Dev </div> <div> </div> 50{" "}
          </div>{" "}
          <div className="p-3 flex justify-between">
            <div> Web3 </div> <div> 20 </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="p-3">
        <h2 className="text-blue-900 text-3xl font-bold">
          Present{" "}
          <span className=" text-blue-200  md:text-slate-100 p-3"> 200 </span>{" "}
        </h2>{" "}
        <div className="w-72 mx-auto mt-7 shadow-md p-3 bg-slate-100">
          <CircularBar />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default TotalInterns;

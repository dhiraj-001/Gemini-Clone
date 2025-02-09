import React, { useContext } from "react";
import { Context } from "../context/context";

function ResultBox() {
  const { result, setResult, input, prevQ, loading, setLoading } =
    useContext(Context);

  return (
    <div className="mx-8 h-[75vh] w-[85vw] overflow-auto scr-n font-body">
      {result ? (
        <div className="flex flex-col items-end ">
          <div className=" border-[#ce9dff] border-1 transition duration-300 ease-in-out p-3 rounded-2xl rounded-r-none shad-result rounded-b-2xl mb-5">
            {prevQ}
          </div>

          <div className="flex items-start w-full backdrop-blur-4xl">
            <div
              className=" text-[#dbdbdbcb] text-sm  font-result overflow-auto shad-result md:text-lg  border-[#ce9dff] border-1 p-3 rounded-2xl rounded-l-none rounded-b-2xl "
              dangerouslySetInnerHTML={{ __html: result }}
            ></div>
          </div>
        </div>
      ) : (
     
        <div>
          <h1 className={`text-5xl font-head font-semibold text-gradient dev-pos ${loading ? "hidden" : ""}`}>
            Hello, Dev ...
          </h1>
        </div>
      )}
    </div>
  );
}

export default ResultBox;

import React, { useContext } from "react";
import { Context } from "../context/context";

function ResultBox() {
  const { result, prevQ, loading } =
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
          <h1
            className={`text-5xl font-head font-semibold text-gradient dev-pos ${
              loading ? "hidden" : ""
            }`}
          >
            Hello, Dev ...
          </h1>
          <div className="text-[#943be25a] text-[8px]  md:text-sm font-mini absolute w-[80vw] bottom-5 backdrop-blur-2xl border-1 rounded-2xl p-4">
            <h2 className="font-extrabold text-[#ffffff5a]">Disclaimer</h2>
            <p className="text-[#ffffff5a]">
              The <strong className="text-[#ffffff5a]">Geminii </strong>{" "}
              application utilizes the Google Gemini API. While I aim to
              provide accurate and up-to-date information, I do not guarantee
              the accuracy or completeness of the information presented. Users
              should verify any information obtained from this application
              before making decisions based on it.
            </p>
            <h3 className="text-[#ffffff5a] font-bold my-2">Key Points:</h3>
            <ul className="text-[#ffffff5a] flex flex-col gap-1.5">
              <li className="text-[#ffffff5a]">
                <strong className="text-[#ffffff5a]">Data Usage:</strong> Data
                provided by the Google Gemini API is subject to Google's terms
                of service and privacy policies.
              </li>
              
              <li className="text-[#ffffff5a]">
                <strong className="text-[#ffffff5a]">Third-Party Services:</strong>{" "}
                We are not responsible for any issues arising from third-party
                services integrated with this application.
              </li>
              <li className="text-[#ffffff5a]">
                <strong className="text-[#ffffff5a]">No Warranty:</strong> The
                application is provided "as-is" without any warranties, express
                or implied.
              </li>
              <li className="text-[#ffffff5a]">
                <strong className="text-[#ffffff5a]">Liability:</strong> We are not
                liable for any damages arising from the use of this application.
              </li>
              <li className="text-[#ffffff5a]">
                <strong className="text-[#ffffff5a]">Compliance:</strong> Users
                must ensure their use of the application complies with all
                applicable laws and regulations.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultBox;

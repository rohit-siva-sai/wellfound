import React from "react";

const Candidate = () => {
  return (
    <div className="grid grid-cols-2 gap-x-12 justify-items-center py-12 px-24">
      <div className="w-3/4 flex flex-col space-y-11 self-center">
        <p className="font-semibold text-4xl">
          Unique candidate details you can't find anywhere else
        </p>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-5">
            <picture>
              <img
                src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/646d73bb4fc8cb7461f6ac35_tabler-icon-toggle-right.svg"
                alt=""
                className="bg-rose-200 rounded-full p-2 w-16"
              />
            </picture>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Job search status</p>
              <p className="text-gray-600 font-medium leading-5">
                We'll tell you if a candidate is ready to interview or open to
                offers
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <picture>
              <img
                src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/646d724af6ec1718221569a2_tabler-icon-world-check.svg"
                alt=""
                className="bg-rose-200 rounded-full p-2 w-24"
              />
            </picture>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Skills & experience</p>
              <p className="text-gray-600 font-medium leading-5">
                We give candidates the ability to showcase this in unique ways,
                like detailing their biggest accomplishment
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <picture>
              <img
                src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/646d7562a70a1bf8dc6253c0_clock.svg"
                alt=""
                className="bg-rose-200 rounded-full p-2 w-20"
              />
            </picture>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Timezones</p>
              <p className="text-gray-600 font-medium leading-5">
                You can filter by timezones and see exactly how many hours ahead
                or behind a candidate is
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <picture>
              <img
                src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/646d75631aaeadb21e18efc6_settings.svg"
                alt=""
                className="bg-rose-200 rounded-full p-2 w-24"
              />
            </picture>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Remote preferences</p>
              <p className="text-gray-600 font-medium leading-5">
                Search by candidates who are open to remote work and see what
                kind of remote culture they're looking for
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <picture>
              <img
                src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/646d756228c11bc7c68dc0cb_checklist.svg"
                alt=""
                className="bg-rose-200 rounded-full p-2 w-16"
              />
            </picture>
            <div className="flex flex-col space-y-1">
              <p className="font-semibold">Assessments</p>
              <p className="text-gray-600 font-medium leading-5">
                See video and engineering assessments to help you evaluate
                skills further
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center">
        <picture>
          <img
            src="https://assets-global.website-files.com/64626a4a74818ca87606a29e/64626a4a74818ca87606a318_AssessmentsProfile.png"
            alt=""
            className="w-10/12 self-center"
          />
        </picture>
      </div>
    </div>
  );
};

export default Candidate;

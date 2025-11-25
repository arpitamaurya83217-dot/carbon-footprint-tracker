import React from "react";
import { Link, NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <main className="bg-white block">
        {/* First Section */}
        <section className="pt-12">
          <div className="w-full px-4 mb-16 flex flex-col items-center text-center">
            <h2 className="text-3xl sm:text-5xl font-bold uppercase text-green-700 tracking-tight">
              Carbon Footprint Calculator
            </h2>
            <p className="mt-4 sm:mt-7 mb-4 text-base sm:text-lg max-w-[600px]">
              Small actions, big change: the way you live, travel, and eat can
              either harm or heal the planet. Make sustainable choices and fight
              climate change every day.
            </p>

            <div
              className="w-full bg-green-700 bg-cover bg-center relative flex justify-center items-center py-16 sm:py-24"
              style={{
                backgroundImage:
                  "url('../../public/images/forests-background.png')",
              }}
            >
              <div className="bg-white bg-opacity-80 w-11/12 sm:w-3/5 text-center p-6 sm:p-12 rounded">
                <h3 className="text-xl sm:text-3xl font-semibold">
                  Calculate Carbon Footprint for:
                </h3>
                <Link
                  to="/calculate"
                  className="mt-4 sm:mt-5 bg-green-700 hover:bg-green-500 text-white block w-full py-3 sm:py-4 px-4 sm:px-8 text-lg rounded transition duration-100 ease-out"
                >
                  An Individual
                </Link>
                <Link
                  to="/calculate-household"
                  className="mt-4 sm:mt-5 bg-green-700 hover:bg-green-500 text-white block w-full py-3 sm:py-4 px-4 sm:px-8 text-lg rounded transition duration-100 ease-out"
                >
                  A Household
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* second section */}
        <section className="mb-16">
          <div className="mb-6.5">
            <div className="max-w-[96%] mx-[4%]">
              <h2 className="text-3xl leading-[1] text-center font-bold font-proxima-nova uppercase text-green-700 mb-2">
                How it works
              </h2>
              <div className="max-w-[96%] mx-[4%] mt-3 font-light leading-[1.5] text-center">
                <p className="max-w-[96%] mx-[4%] mt-6 font-light leading-[1.5] text-center mb-6">
                  Solving climate change requires reducing carbon emissions.
                  When you offset your footprint, you neutralize your emissions
                  by protecting forests that absorb carbon from the atmosphere.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col">
            <div className="flex items-center flex-col flex-grow-0 max-w-[210px] text-center">
              <img
                src="../../public/images/calculate-carbon-footprint.png"
                alt="calculate your carbon footprint"
                className="h-24"
              />
              <p className="font-light leading-[1.5] m-0">
                Calculate Your Carbon Footprint
              </p>
              <div className="text-5xl font-bold">+</div>
            </div>

            <div className="flex items-center flex-col flex-grow-0 max-w-[210px] text-center">
              <img
                className="h-24"
                src="../../public/images/offset-your-climate-impact.png"
                alt="offset-Climate-Impact"
              />
              <p className="font-light leading-[1.5] m-0">
                Offset your Climate Impact
              </p>
              <div className="text-5xl font-bold">=</div>
            </div>

            <div className="flex items-center flex-col flex-grow-0 max-w-[210px] text-center">
              <img
                src="../../public/images/help-fight-climate-change.png"
                alt="help-fight-climate-change"
                className="h-24"
              />
              <p className="font-light leading-[1.5] m-0">
                Help fight climate change by protecting vital forests
              </p>
            </div>
          </div>
        </section>

        {/* third section */}
        <section className="mb-16">
          <div className="max-w-[96%] mx-[4%]">
            <div className="mb-6.5">
              <h2 className="text-3xl leading-[0.94] text-center font-bold font-proxima-nova-condensed uppercase text-green-700">
                OFFSET YOUR FOOTPRINT. PROTECT FORESTS.
              </h2>

              <div className="max-w-[96%] mx-[4%]">
                <p className="max-w-[96%] mx-[4%] mt-3 font-light leading-[1.5] text-center">
                  We need healthy, intact ecosystems — from mangroves to
                  rainforests to grasslands — that absorb and store immense
                  amounts of carbon if we are to prevent climate change from
                  causing irreparable harm humanity. The protection and
                  restoration of these climate-critical ecosystems also directly
                  benefits the local communities who rely on them for food,
                  fresh water and livelihoods.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-between">
              {/* Protect Forests Section */}
              <div className="overflow-hidden relative w-full md:w-1/2 mb-6 md:mb-0">
                {/* Image Section */}
                <div className="bg-[url('../../public/images/forest.png')] bg-gray-300 relative bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-between w-full h-64 md:h-[60vh] text-white mt-11 p-6 md:p-12">
                  <h3 className="w-full uppercase text-center md:text-left">
                    Protect
                    <span className="block text-4xl md:text-6xl leading-8 md:leading-8">
                      Forests
                    </span>
                  </h3>
                </div>

                {/* Text Section */}
                <div className="bg-[#303030] p-4 md:p-9 flex flex-col items-center md:items-start justify-between w-full text-white">
                  <div className="flex flex-col items-center md:items-start w-full text-white">
                    <p className="w-full mb-2 text-xl md:text-2xl uppercase leading-6 text-center md:text-left">
                      PROTECT FORESTS THAT ABSORB CARBON
                    </p>

                    <p className="leading-5 m-0 text-sm md:text-base text-center md:text-left">
                      Forests are essential for life, providing homes for
                      wildlife, clean air, and a stable climate. Protecting them
                      means creating laws, restoring trees, managing resources
                      wisely, and involving local communities. When people value
                      forests through eco-tourism and research, it creates
                      reasons to conserve them. Global cooperation is key to
                      ensuring forests continue to support nature and human life
                      for generations.
                    </p>
                  </div>
                </div>
              </div>
              
                {/* Protect Forests Section */}
                <div className="overflow-hidden relative w-full md:w-1/2 mb-6 md:mb-0">
                  {/* Image Section */}
                  <div className="bg-[url('../../public/images/working_women.jpg')] bg-gray-300 relative bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col items-center justify-between w-full h-64 md:h-[60vh] text-white mt-11 p-6 md:p-12">
                    <h3 className="w-full uppercase text-center md:text-left">
                      Local Benefit
                      <span className="block text-4xl md:text-6xl leading-8 md:leading-8">
                        COMMUNITIES
                      </span>
                    </h3>
                  </div>

                  {/* Text Section */}
                  <div className="bg-[#303030] p-4 md:p-9 flex flex-col items-center md:items-start justify-between w-full text-white">
                    <div className="flex flex-col items-center md:items-start w-full text-white">
                      <p className="w-full mb-2 text-xl md:text-2xl uppercase leading-6 text-center md:text-left">
                        BENEFIT LOCAL COMMUNITIES WHO RELY ON NATURE FOR
                        LIVELIHOODS
                      </p>

                      <p className="leading-5 m-0 text-sm md:text-base text-center md:text-left">
                        One of the impacts of validated and verified carbon
                        projects is improving the well-being of resident
                        communities by enabling the sustainable use of nature
                        and by maintaining healthy ecosystems. Funds from carbon
                        credits are used to improve health care facilities and
                        schools; start local environmental education programs;
                        and support local income-generating activities that
                        promote conservation, such as ecotourism, tree
                        nurseries, beekeeping and sustainable crafts.
                      </p>
                    </div>
                  </div>
                </div>
              
            </div>
          </div>
        </section>

        {/* fourth section */}
        <section className="mb-2 bg-white block isolate">
          <div className="mb-6">
            <h2 className="text-4xl leading-[0.94] font-bold text-center uppercase text-[#4bc36b]">
              More About this Calculator
            </h2>
          </div>

          <div className="min-h-[336px] max-w-[96%] mx-[4%]">
            <div className="mt-4">
              <p className="mb-6 leading-6 m-0">
                Our carbon calculator is easy to use — and it will deliver your
                total estimated personal carbon emissions about as accurately as
                many hours of data-gathering and fact-finding.
              </p>

              <p className="mb-6 leading-6 m-0">
                As with any online carbon calculator, ours includes a margin of
                error due to the difficulty and imprecision inherent in
                measuring the carbon dioxide (CO<sub>2</sub>) output of your
                morning commute or your dietary decisions. We combine the best
                available data and a range of informed assumptions to form the
                basis of our calculations and to provide you an emissions
                estimate you can rely on — and begin to neutralise.
              </p>

              <p className="mb-6 leading-6 m-0">
                Because this is a personal carbon calculator, it does not
                account for emissions related to commercial or industrial energy
                or transportation. Our focus is on those everyday variables you
                can influence the most — namely, your residential energy,
                personal travel and food-related emissions.
              </p>

              <p className="mb-3 leading-6 m-0">
                To avoid confusion, we express greenhouse gas (GHG) emissions
                figures in CO<sub>2</sub> equivalents (CO<sub>2</sub>e), where 1
                metric ton of carbon = 3.67 metric ton of carbon dioxide.
              </p>
            </div>
          </div>
        </section>
        {/* Fifth Section */}
        <section className="bg-white">
          <div
            className="relative w-full h-[400px] sm:h-[700px] bg-cover bg-center"
            style={{
              backgroundImage: "url('../../public/images/green-field.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-60 flex flex-col justify-center items-center p-4 sm:p-12 text-gray-700 text-center">
              <p className="text-xl sm:text-2xl font-semibold mb-4">
                A global conservation story
              </p>
              <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
                "A global conservation story" typically refers to efforts and
                achievements in preserving biodiversity, ecosystems, and natural
                resources worldwide. These narratives often highlight successful
                initiatives in protecting endangered species, restoring
                habitats, combating climate change impacts, and promoting
                sustainable practices. These stories underscore international
                cooperation, community engagement, and technological innovations
                that contribute to safeguarding the planet's natural heritage
                for future generations. They inspire hope and demonstrate the
                positive impact of collective action in addressing environmental
                challenges on a global scale.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;

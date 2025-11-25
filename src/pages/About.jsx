import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <main className="bg-white block">
        {/* first section */}
        <section className="bg-[url('/images/forests-main.png')] bg-center bg-no-repeat bg-cover w-full text-white mb-16">
          <div className="flex flex-col sm:flex-row mx-auto px-4 sm:px-0 text-white">
            {/* left content */}
            <div className="px-[4%] py-[40px] text-center flex-1">
              <h2 className="text-2xl sm:text-4xl leading-tight mb-11 max-w-[450px] mx-auto font-bold shadow-lg">
                CALCULATE YOUR CARBON FOOTPRINT WITH OUR TEAM - TechCodeCrafters
              </h2>

              <div className="bg-[url('/images/results-tree.78168e82.png')] bg-top bg-no-repeat bg-contain h-[200px] mx-auto mb-4 w-[250px] sm:w-[300px] relative text-center">
                <p className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 leading-[1.33] px-4 w-full text-sm sm:text-base">
                  Deforestation contributes nearly 10% of global carbon emissions.
                </p>
              </div>

              <p className="leading-6 bg-[rgba(0,0,0,0.35)] p-3 rounded-md text-sm sm:text-base">
                On average, a hectare of tropical forest stores 550 metric tons of CO2. With an annual deforestation rate of 0.5%, around 2.75 metric tons of CO2 are emitted per hectare each year.
              </p>
            </div>

            {/* right content */}
            <div className="bg-[rgba(0,0,0,0.5)] p-4 sm:p-6 rounded-xl h-auto mx-4 sm:mx-20 my-6 sm:my-24 flex-1">
              <h3 className="mb-3 text-lg sm:text-xl font-semibold">Protect + Restore Our Planet</h3>

              <p className="mb-4 leading-6 text-sm sm:text-base">
                Nature is one of the strongest ways to fight climate change. But we are losing forests faster than ever.
              </p>

              <p className="mb-4 leading-6 text-sm sm:text-base">
                To avoid climate breakdown, we must stop deforestation and protect natural habitats. The planet needs your support.
              </p>

              <p className="leading-6 text-sm sm:text-base">
                When you reduce your carbon footprint, you help protect forests and our environment.
              </p>
            </div>
          </div>
        </section>

        {/* second section */}
        <section className="mb-16 bg-white px-4">
          <div>
            <h2 className="text-2xl sm:text-3xl text-center uppercase text-green-700 font-bold mb-3">
              Tips to decrease your footprint
            </h2>

            <p className="text-center mb-10 leading-relaxed text-sm sm:text-base">
              Reducing your environmental impact is easier than it seems.
            </p>

            {/* Tips Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16 place-items-center">
              {/* Tip 1 */}
              <div className="text-center max-w-[250px]">
                <img src="/images/cow.png" alt="animal" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Try consuming less meat</h3>
                <p className="text-sm leading-relaxed">Skipping red meat just one day a week can save:</p>
                <p className="font-bold">0.4 metric tons annually</p>
              </div>

              {/* Tip 2 */}
              <div className="text-center max-w-[250px]">
                <img src="/images/mail.png" alt="animal" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Clean your inbox</h3>
                <p className="text-sm leading-relaxed">Deleting junk emails can save:</p>
                <p className="font-bold">0.07 metric tons annually</p>
              </div>

              {/* Tip 3 */}
              <div className="text-center max-w-[250px]">
                <img src="/images/clothes.png" alt="animal" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Buy second-hand clothing</h3>
                <p className="text-sm leading-relaxed">Buying thrift clothes can save:</p>
                <p className="font-bold">0.5 metric tons annually</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-16 place-items-center">
              {/* Tip 4 */}
              <div className="text-center max-w-[250px]">
                <img src="/images/tyre.png" alt="animal" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Keep tires inflated</h3>
                <p className="text-sm leading-relaxed">Properly inflated tires can save:</p>
                <p className="font-bold">0.4 metric tons annually</p>
              </div>

              {/* Tip 5 */}
              <div className="text-center max-w-[250px]">
                <img src="/images/thermostat.png" alt="animal" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Change thermostat</h3>
                <p className="text-sm leading-relaxed">Lowering temperature 1° saves:</p>
                <p className="font-bold">0.06 metric tons annually</p>
              </div>

              {/* Tip 6 */}
              <div className="text-center max-w-[250px]">
                <img src="/images/fuel.png" alt="animal" className="mx-auto h-20 w-20 mb-3" />
                <h3 className="text-lg font-semibold mb-2">Improve fuel economy</h3>
                <p className="text-sm leading-relaxed">Improving 5 km/L can save:</p>
                <p className="font-bold">0.9 metric tons annually</p>
              </div>
            </div>
          </div>
        </section>

        {/* third section */}
        <section className="bg-white">
          <div className="bg-[#1a5eab] relative">
            <img src="/images/plant.avif" alt="green-field" className="w-full" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;

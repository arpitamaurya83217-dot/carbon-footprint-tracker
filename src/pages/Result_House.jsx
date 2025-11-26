import React from "react";
import { useLocation } from "react-router-dom";
import { PieChart } from "@mui/x-charts";

function Result() {
    const location = useLocation();
    const { carbonFootprintCalculated, requiredToucanTokensCalculated, costCalculated } =
        location.state || {
            carbonFootprintCalculated: null,
            requiredToucanTokensCalculated: null,
            costCalculated: null,
        };

    return (
        <div>
            <main className="bg-white block">

                {/* first section */}
                <section className="bg-[url('/images/forests-main.png')] bg-center bg-no-repeat bg-cover w-full text-white mb-16">
                    <div className="flex flex-col lg:flex-row mx-auto px-4 lg:px-0 text-white">

                        {/* left */}
                        <div className="px-[4%] py-[40px] pb-[20px] text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl leading-[1] uppercase mb-11 max-w-[400px] mx-auto font-bold">
                                <div className="bg-[rgba(100,255,255,0.40)] max-w-[170px] h-[40px] flex justify-center items-center mx-auto mb-4">
                                    Result :
                                </div>
                                Your carbon impact for your household is {carbonFootprintCalculated.toFixed(2)} kg C0<sub>2</sub>e
                            </h2>

                            <div className="bg-[url('../../public/images/results-tree.78168e82.png')] bg-top bg-no-repeat bg-contain h-[182px] mx-auto mb-4 w-[291px] relative">
                                <p className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 leading-[1.33] px-[22px] w-full text-center">
                                    Deforestation contributes nearly 10% of global carbon emissions.
                                </p>
                            </div>

                            <p className="text-sm sm:text-base leading-6 bg-[rgba(0,0,0,0.35)] px-2 py-1">
                                On average, a hectare of tropical forest stores carbon equating to 550 metric tons of CO
                                <sub>2</sub>. With annual tropical deforestation rates averaging 0.5%, this results in 2.75 metric tons of CO<sub>2</sub> emitted per hectare each year.
                            </p>
                        </div>

                        {/* right */}
                        <div className="bg-[rgba(0,0,0,0.5)] p-5 lg:h-[400px] mx-auto lg:mx-20 my-10 lg:my-24 w-[90%] lg:w-auto rounded-lg">
                            <h3 className="mb-3 text-xl font-semibold">Protect + Restore Our Planet</h3>

                            <p className="mb-6 leading-6">
                                Nature is the most powerful technology to fight climate change. Yet we are losing vital ecosystems at alarming rates.
                            </p>

                            <p className="mb-6 leading-6">
                                To prevent complete climate breakdown, we must halt the degradation and deforestation of habitats and restore nature. The planet is at a tipping point, and we need your help.
                            </p>

                            <p className="leading-6">
                                When you neutralize your footprint, you will protect forests around the world — a critical step in our fight against climate change.
                            </p>
                        </div>

                    </div>
                </section>


                {/* second section */}
                <section className="mb-24 bg-white">
                    <div className="text-3xl text-center text-green-700 font-bold uppercase mb-12">
                        How Do You Compare ?
                    </div>

                    <div className="flex justify-center">
                        <PieChart
                            className="mx-auto"
                            colors={["lightgreen", "green"]}
                            series={[
                                {
                                    data: [
                                        { id: 0, value: carbonFootprintCalculated, label: "Your carbon footprint", color: "lightgreen" },
                                        { id: 1, value: 48000, label: "Average world footprint", color: "green" },
                                    ],
                                    innerRadius: 90,
                                    outerRadius: 120,
                                },
                            ]}
                            width={350}
                            height={250}
                        />
                    </div>
                </section>


                {/* third section */}
                <section className="mb-24 bg-white">
                    <div className="text-3xl text-center text-green-700 font-bold uppercase mb-10">
                        Neutralize Your Carbon Footprint
                    </div>

                    <div className="text-center px-3">
                        <p className="text-lg sm:text-xl">
                            To offset your carbon footprint of {carbonFootprintCalculated?.toFixed(2)} kg CO<sub>2</sub>e, you would need approximately {requiredToucanTokensCalculated?.toFixed(2)} Toucan tokens.
                        </p>
                        <p className="text-lg sm:text-xl">
                            The estimated cost for the required Toucan tokens is ₹{costCalculated?.toFixed(2)}.
                        </p>
                    </div>
                </section>


                {/* fourth section */}
                <section className="mb-16 bg-white px-4">
                    <h2 className="text-3xl font-bold text-center uppercase text-green-700 mb-2">
                        Tips to decrease your footprint
                    </h2>
                    <p className="text-center mb-10">Decreasing your impact on the climate could be easier than you think.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">

                        {/* first */}
                        <div>
                            <img src="/images/cow.png" className="h-20 w-20 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Try consuming less meat</h3>
                            <p className="text-sm">For every day of the week where you eliminate red meat:</p>
                            <p className="font-bold">0.4 metric tons saved annually</p>
                        </div>

                        {/* second */}
                        <div>
                            <img src="/images/mail.png" className="h-20 w-20 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Clean your inbox</h3>
                            <p className="text-sm">Delete your archived emails and unsubscribe from junk email:</p>
                            <p className="font-bold">0.07 metric tons saved annually</p>
                        </div>

                        {/* third */}
                        <div>
                            <img src="/images/clothes.png" className="h-20 w-20 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Purchase consignment clothing</h3>
                            <p className="text-sm">For buying second-hand clothing:</p>
                            <p className="font-bold">0.5 metric tons saved annually</p>
                        </div>

                        {/* fourth */}
                        <div>
                            <img src="/images/tyre.png" className="h-20 w-20 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Keep inflated</h3>
                            <p className="text-sm">By keeping your car tires properly inflated:</p>
                            <p className="font-bold">0.4 metric tons saved annually</p>
                        </div>

                        {/* fifth */}
                        <div>
                            <img src="/images/thermostat.png" className="h-20 w-20 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Change your thermostat</h3>
                            <p className="text-sm">For every degree you turn down your thermostat:</p>
                            <p className="font-bold">0.06 metric tons saved annually</p>
                        </div>

                        {/* sixth */}
                        <div>
                            <img src="/images/fuel.png" className="h-20 w-20 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold mb-2">Improve your fuel economy</h3>
                            <p className="text-sm">For every 5 km/L fuel economy improvement:</p>
                            <p className="font-bold">0.9 metric tons saved annually</p>
                        </div>

                    </div>
                </section>


                {/* fifth section */}
                <section className="mb-10 px-4">
                    <h2 className="text-3xl font-bold text-center uppercase text-[#4bc36b] mb-6">
                        More About this Calculator
                    </h2>

                    <div className="max-w-3xl mx-auto text-justify">
                        <p className="mb-6 leading-6">
                            Our carbon calculator is easy to use — and it will deliver your total estimated personal carbon emissions about as accurately as many hours of data-gathering and fact-finding.
                        </p>

                        <p className="mb-6 leading-6">
                            As with any online carbon calculator, ours includes a margin of error due to the difficulty and imprecision inherent in measuring the carbon dioxide (CO<sub>2</sub>) output of your morning commute or your dietary decisions. We combine the best available data and a range of informed assumptions to form the basis of our calculations and to provide you an emissions estimate you can rely on — and begin to neutralise.
                        </p>

                        <p className="mb-6 leading-6">
                            Because this is a personal carbon calculator, it does not account for emissions related to commercial or industrial energy or transportation. Our focus is on those everyday variables you can influence the most — namely, your residential energy, personal travel and food-related emissions.
                        </p>

                        <p className="leading-6 mb-3">
                            To avoid confusion, we express greenhouse gas (GHG) emissions figures in CO<sub>2</sub> equivalents (CO<sub>2</sub>e), where 1 metric ton of carbon = 3.67 metric ton of carbon dioxide.
                        </p>
                    </div>
                </section>


                {/* sixth section */}
                <section className="bg-white">
                    <div className="bg-[url('/images/green-field.jpg')] bg-cover bg-center w-full py-20 px-4">
                        <div className="max-w-2xl bg-[rgba(255,255,255,0.65)] p-6 mx-auto rounded-md">
                            <p className="text-2xl font-semibold mb-2">A global conservation story</p>

                            <p className="leading-tight">
                                "A global conservation story" typically refers to efforts and achievements in preserving biodiversity, ecosystems, and natural resources worldwide. These narratives often highlight successful initiatives in protecting endangered species, restoring habitats, combating climate change impacts, and promoting sustainable practices.
                            </p>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Result;

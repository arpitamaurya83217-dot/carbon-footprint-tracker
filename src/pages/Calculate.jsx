import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

function Calculate() {
  const navigate = useNavigate();

  const [energyUsage, setEnergyUsage] = useState("");
  const [transportation, setTransportation] = useState("");
  const [wasteGeneration, setWasteGeneration] = useState("");
  const [foodConsumption, setFoodConsumption] = useState("");
  const [waterUsage, setWaterUsage] = useState("");
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const [toucanTokenPrice, setToucanTokenPrice] = useState(0);
  const [requiredToucanTokens, setRequiredToucanTokens] = useState(0);
  const [cost, setCost] = useState(0);

  const calculateCarbonFootprint = useCallback(() => {
    const energyEmissionFactor = 0.0007867;
    const transportationEmissionFactor = 2.31;
    const wasteEmissionFactor = 1.2;
    const foodConsumptionEmissionFactor = 12.5;
    const waterUsageEmissionFactor = 0.5;

    const totalEmissions =
      parseFloat(energyUsage || 0) * energyEmissionFactor +
      parseFloat(transportation || 0) * transportationEmissionFactor +
      parseFloat(wasteGeneration || 0) * wasteEmissionFactor +
      parseFloat(foodConsumption || 0) * foodConsumptionEmissionFactor +
      parseFloat(waterUsage || 0) * waterUsageEmissionFactor;

    setCarbonFootprint(totalEmissions);
    return totalEmissions;
  }, [energyUsage, transportation, wasteGeneration, foodConsumption, waterUsage]);

  async function fetchToucanTokenPrice() {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=toucan-protocol-base-carbon-tonne&vs_currencies=inr"
    );
    const data = await response.json();
    return data["toucan-protocol-base-carbon-tonne"].inr;
  }

  useEffect(() => {
    fetchToucanTokenPrice().then((price) => setToucanTokenPrice(price));
  }, []);

  useEffect(() => {
    if (carbonFootprint !== null) {
      const requiredTokens = carbonFootprint / 1000;
      setRequiredToucanTokens(requiredTokens);
      setCost(requiredTokens * toucanTokenPrice);
    }
  }, [carbonFootprint, toucanTokenPrice]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const footprint = calculateCarbonFootprint();
    const requiredTokens = footprint / 1000;
    const totalCost = requiredTokens * toucanTokenPrice;

    navigate("/result", {
      state: {
        carbonFootprint: footprint,
        requiredToucanTokens: requiredTokens,
        cost: totalCost,
      },
    });
  };

  return (
    <main>
      <div className="bg-[url('/images/individual_impact.jpg')] bg-center bg-cover text-white h-40 p-3 flex flex-col justify-center items-center text-center">
        <h2 className="text-xl sm:text-2xl mb-2 capitalize">Carbon Footprint Calculator</h2>
        <p className="text-3xl sm:text-5xl leading-tight uppercase font-bold">
          Individual Impact
        </p>
      </div>

      <div className="text-center m-6 mt-12 text-2xl sm:text-4xl font-semibold font-sans">
        For a month:
      </div>

      <div className="flex justify-center p-4">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="p-6 w-full max-w-xl flex flex-col gap-6 bg-white shadow-md rounded-xl"
        >
          {/* first */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="energy"
              className="text-lg sm:text-xl font-semibold text-[#5c5c61]"
            >
              Total energy usage (kWh):
            </label>

            <input
              type="number"
              id="energy"
              value={energyUsage}
              placeholder="Energy Usage"
              onChange={(e) => setEnergyUsage(e.target.value)}
              className="w-full py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-medium focus:border-green-500 focus:outline-none"
            />
          </div>

          {/* second */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="transport"
              className="text-lg sm:text-xl font-semibold text-[#5c5c61]"
            >
              Transportation fuel used (liters):
            </label>

            <input
              type="number"
              id="transport"
              value={transportation}
              placeholder="Transportation"
              onChange={(e) => setTransportation(e.target.value)}
              className="w-full py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-medium focus:border-green-500 focus:outline-none"
            />
          </div>

          {/* third */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="waste"
              className="text-lg sm:text-xl font-semibold text-[#5c5c61]"
            >
              Waste generated (kg):
            </label>

            <input
              type="number"
              id="waste"
              value={wasteGeneration}
              placeholder="Waste Generated"
              onChange={(e) => setWasteGeneration(e.target.value)}
              className="w-full py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-medium focus:border-green-500 focus:outline-none"
            />
          </div>

          {/* fourth */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="food"
              className="text-lg sm:text-xl font-semibold text-[#5c5c61]"
            >
              Food consumed (kg):
            </label>

            <input
              type="number"
              id="food"
              value={foodConsumption}
              placeholder="Food Consumption"
              onChange={(e) => setFoodConsumption(e.target.value)}
              className="w-full py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-medium focus:border-green-500 focus:outline-none"
            />
          </div>

          {/* fifth */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="water"
              className="text-lg sm:text-xl font-semibold text-[#5c5c61]"
            >
              Water usage (liters):
            </label>

            <input
              type="number"
              id="water"
              value={waterUsage}
              placeholder="Water Usage"
              onChange={(e) => setWaterUsage(e.target.value)}
              className="w-full py-3 px-3 rounded-lg border border-gray-400 text-gray-800 font-medium focus:border-green-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white font-bold py-3 rounded-lg mt-4 hover:bg-green-600 transition duration-300"
          >
            Calculate
          </button>
        </form>
      </div>
    </main>
  );
}

export default Calculate;
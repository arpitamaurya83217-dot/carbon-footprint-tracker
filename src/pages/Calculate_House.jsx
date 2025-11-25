import React, {useState, useEffect, useCallback} from "react";
import { useNavigate } from "react-router-dom";

function Calculate_House() {
    const navigate = useNavigate()

    // states
    const [people, setPeople] = useState('')
    const [energyUsage, setEnergyUsage] = useState('');
    const [transportation, setTransportation] = useState('');
    const [wasteGeneration, setWasteGeneration] = useState('');
    const [foodConsumption, setfoodConsumption] = useState('');
    const [waterUsage, setWaterUsage] = useState('')
    const [carbonFootprintCalculated, setCarbonFootprintCalculated] = useState(null);

    const [toucanTokenPrice, setToucanTokenPrice] = useState(0);
    const [requiredToucanTokensCalculated, setRequiredToucanTokens] = useState(0)
    const [costCalculated, setCost] = useState(0)

    const calculateCarbonFootprint = useCallback(() => {
        const energyEmissionFactor = 0.0007867;     //  kg CO2e per kWh
        const transportationEmissionFactor = 2.31;   // kg CO2e per liter for gasoline vehicles
        const wasteEmissionFactor = 1.2;         // kg CO2e per kg
        const foodConsumptionEmissionFactor = 12.5;     // kg CO2e per kg
        const waterUsageEmissionFactor = 0.5;   // 

        const totalEmissions = 
        ((parseFloat(energyUsage) || 0) * energyEmissionFactor) + 
        ((parseFloat(transportation) || 0) * transportationEmissionFactor) + 
        ((parseFloat(wasteGeneration) || 0) * wasteEmissionFactor) +
        ((parseFloat(foodConsumption) || 0) * foodConsumptionEmissionFactor) +
        ((parseFloat(waterUsage) || 0) * waterUsageEmissionFactor);

        setCarbonFootprintCalculated(totalEmissions)
        return totalEmissions
    }, [energyUsage, transportation, wasteGeneration, foodConsumption, waterUsage])

    async function fetchToucanTokenPrice() {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=toucan-protocol-base-carbon-tonne&vs_currencies=inr')
        const data = await response.json()
        return data['toucan-protocol-base-carbon-tonne'].inr;
    }

    useEffect(() => {
        fetchToucanTokenPrice().then(price => setToucanTokenPrice(price));
    }, [])

    useEffect(() => {
        if (carbonFootprintCalculated !== null) {
            const requiredTokens = carbonFootprintCalculated / 1000;     // 1 token = 1 tCO2e
            setRequiredToucanTokens(requiredTokens);
            setCost(requiredTokens * toucanTokenPrice);
        }
    }, [carbonFootprintCalculated, toucanTokenPrice]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const footprint = calculateCarbonFootprint();
        const requiredTokens = footprint / 1000;
        const totalCost = requiredTokens * toucanTokenPrice;
    
        navigate('/result-household', {
            state: {
                carbonFootprintCalculated : footprint,
                requiredToucanTokensCalculated: requiredTokens,
                costCalculated : totalCost,
        },
        });
    };

    return(
        <main>
            <div className="bg-[url('../../public/images/individual_impact.jpg')] bg-center bg-no-repeat bg-cover text-white h-40 p-3">
                <h2 className="mb-7 capitalize">Carbon Footprint Calculator</h2>
                <p className="text-[50px] leading-[0.87] text-center uppercase">Household Impact</p>
            </div>

            <div className="text-center m-6 mt-24 text-4xl font-semibold font-sans">For a month :</div>

            <div className="flex justify-center min-h-[500px] bg-white sm:pt-0 p-4">
                <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col w-full max-w-3xl">

                    {/* Household Members */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                        <label htmlFor="people" className="text-lg sm:text-2xl font-semibold text-[#5c5c61] mb-2 sm:mb-0 sm:mr-4">
                            Total number of people in your household:
                        </label>
                        <input
                            type="number"
                            id="people"
                            value={people}
                            placeholder="Total people"
                            onChange={(e) => setPeople(e.target.value)}
                            className="w-full sm:flex-1 py-3 px-3 rounded-lg border border-gray-400 focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Energy Usage */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                        <label htmlFor="energy" className="text-lg sm:text-2xl font-semibold text-[#5c5c61] mb-2 sm:mb-0 sm:mr-4">
                            Total energy usage (kWh):
                        </label>
                        <input
                            type="number"
                            id="energy"
                            value={energyUsage}
                            placeholder="Energy Usage"
                            onChange={(e) => setEnergyUsage(e.target.value)}
                            className="w-full sm:flex-1 py-3 px-3 rounded-lg border border-gray-400 focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Transportation */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                        <label htmlFor="transport" className="text-lg sm:text-2xl font-semibold text-[#5c5c61] mb-2 sm:mb-0 sm:mr-4">
                            Total transportation (l):
                        </label>
                        <input
                            type="number"
                            id="transport"
                            value={transportation}
                            placeholder="Transportation usage"
                            onChange={(e) => setTransportation(e.target.value)}
                            className="w-full sm:flex-1 py-3 px-3 rounded-lg border border-gray-400 focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Waste */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                        <label htmlFor="waste" className="text-lg sm:text-2xl font-semibold text-[#5c5c61] mb-2 sm:mb-0 sm:mr-4">
                            Total waste (kg):
                        </label>
                        <input
                            type="number"
                            id="waste"
                            value={wasteGeneration}
                            placeholder="Waste generated"
                            onChange={(e) => setWasteGeneration(e.target.value)}
                            className="w-full sm:flex-1 py-3 px-3 rounded-lg border border-gray-400 focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Food */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                        <label htmlFor="food" className="text-lg sm:text-2xl font-semibold text-[#5c5c61] mb-2 sm:mb-0 sm:mr-4">
                            Total food consumption (kg):
                        </label>
                        <input
                            type="number"
                            id="food"
                            value={foodConsumption}
                            placeholder="Food consumption"
                            onChange={(e) => setfoodConsumption(e.target.value)}
                            className="w-full sm:flex-1 py-3 px-3 rounded-lg border border-gray-400 focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    {/* Water */}
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                        <label htmlFor="water" className="text-lg sm:text-2xl font-semibold text-[#5c5c61] mb-2 sm:mb-0 sm:mr-4">
                            Total water usage (l):
                        </label>
                        <input
                            type="number"
                            id="water"
                            value={waterUsage}
                            placeholder="Water usage"
                            onChange={(e) => setWaterUsage(e.target.value)}
                            className="w-full sm:flex-1 py-3 px-3 rounded-lg border border-gray-400 focus:border-green-500 focus:outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full sm:w-32 bg-green-700 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-6 self-center transition ease-in-out duration-300"
                    >
                        Calculate
                    </button>

                    {carbonFootprintCalculated !== null && (
                        <div className="mt-4 text-center text-lg sm:text-xl font-semibold">
                            Total Carbon Footprint: {carbonFootprintCalculated.toFixed(2)} kg CO<sub>2</sub>e
                        </div>
                    )}
                </form>
            </div>
        </main>
    )
}

export default Calculate_House

import {NextResponse} from "next/server";
import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

export async function POST(request: Request, res: NextApiResponse, req: NextApiRequest) {
    const body = await request.json();
    const {
        noOfPeople,
        milesDriven,
        milesPerGallon,
        homeSize,
        heatingFuel,
        aluminumSteel,
        plastic,
        paper,
        glass,
        newspaper,
        magazines
    } = body;
    console.log(body)

    // Vehicles Calculations
    const gallonsUsed = milesDriven / milesPerGallon;
    const totalLbsCO2ForVehicles = gallonsUsed * 19.6;
    const avgLbsCO2PerDayForVehicles = totalLbsCO2ForVehicles / 365;


    const totalYearlyUsage = homeSize * 877;
    let emissionsFactor;
    switch (heatingFuel) {
        case "Electricity":
            emissionsFactor = 0.954;
            break;
        case "Natural Gas":
            emissionsFactor = 11.7;
            break;
        case "Heating Oil":
            emissionsFactor = 22.2;
            break;
    }

    const avgLbsCO2PerKWhDayForHome = (totalYearlyUsage * emissionsFactor!) / 365;

    const emissionsForWaste = noOfPeople * 1.9;
    let totalWasteEmissions = 0;

    if (aluminumSteel) totalWasteEmissions -= emissionsForWaste;
    else totalWasteEmissions += emissionsForWaste;

    if (plastic) totalWasteEmissions -= emissionsForWaste;
    else totalWasteEmissions += emissionsForWaste;

    if (paper) totalWasteEmissions -= emissionsForWaste;
    else totalWasteEmissions += emissionsForWaste;

    if (glass) totalWasteEmissions -= emissionsForWaste;
    else totalWasteEmissions += emissionsForWaste;

    if (newspaper) totalWasteEmissions -= emissionsForWaste;
    else totalWasteEmissions += emissionsForWaste;

    if (magazines) totalWasteEmissions -= emissionsForWaste;
    else totalWasteEmissions += emissionsForWaste;


    const totalAvgLbsCO2PerDay = avgLbsCO2PerDayForVehicles + avgLbsCO2PerKWhDayForHome + totalWasteEmissions;
    const yearlyCO2 = totalAvgLbsCO2PerDay * 365;

    const roundedTotalAvgLbsCO2PerDay = Number(totalAvgLbsCO2PerDay.toFixed(2));
    const roundedYearlyCO2 = Number(yearlyCO2.toFixed(2));

    console.log(roundedTotalAvgLbsCO2PerDay, roundedYearlyCO2)

    //API added here
    const prompt = `The user's estimated yearly carbon footprint is ${yearlyCO2} kg a year. Provide 5 specific, actionable suggestions the user can take to reduce their carbon footprint.`;

    const openai = new OpenAI({
        apiKey: process.env.apiKey
    });

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `${prompt}`}],
        model: "gpt-3.5-turbo",
    })

    const aiSuggestions = chatCompletion.choices[0].message.content;

    return NextResponse.json({
        dailyCO2: roundedTotalAvgLbsCO2PerDay,
        yearlyCO2: roundedYearlyCO2,
        recommendations: aiSuggestions
    }, {status: 200});
}
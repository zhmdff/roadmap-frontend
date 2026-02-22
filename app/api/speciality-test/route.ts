import { NextResponse } from "next/server";
import { callAI, parseJsonResponse } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { answers, lang = "az" } = body;

    if (!answers) {
      return NextResponse.json({ error: "Answers are required" }, { status: 400 });
    }

    const answersText = Object.entries(answers)
      .map(([id, text]) => `Sual ${id}: ${text}`)
      .join("\n");

    const languageContext = lang === "en" ? "English" : "Azerbaijani";
    
    // Extract all program names from local education data
    const { specialities } = await import("@/lib/groups");
    const specsData = specialities("az")[0];
    const allPrograms = Object.values(specsData).flatMap((group: any) => group.programs);
    const validProgramsString = allPrograms.join(", ");

    const systemPrompt = `
You are a professional career counselor. Analyze the provided test answers and determine the most suitable career field. 

CRITICAL INSTRUCTION:
You MUST recommend careers ONLY from the following list of valid specialities in our education system:
[${validProgramsString}]

Provide the response in EXACTLY the following JSON format structure, in ${languageContext} language:

{
  "recommendedSpeciality": "Must be exactly one of the valid specialities from the list above",
  "confidenceScore": 0.85,
  "analysis": "Detailed explanation of why this field fits the user",
  "topSkills": ["Skill 1", "Skill 2"],
  "alternatives": [
    {
      "speciality": "Second best career field",
      "matchPercentage": 80,
      "reason": "Brief reason why this fits"
    },
    {
      "speciality": "Third best career field",
      "matchPercentage": 75,
      "reason": "Brief reason why this fits"
    }
  ],
  "suggestedRoadmap": [
    {
      "step": "Specific Skill or Concept (e.g., 'Learn Data Structures' NOT 'Get a Bachelor Degree')",
      "description": "A descriptive explanation of the specific technical or theoretical skills to learn in this phase. Do NOT provide generic life advice like 'do an internship' or 'go to university'. Focus strictly on the actual knowledge progression.",
      "status": "completed" // Set first 1-2 steps 'completed', the next 'current', and rest 'locked'
    }
  ]
}

CRITICAL: For the suggestedRoadmap, provide at least 5 strict technical or professional MILESTONES. Absolutely NO generic steps like "Bakalavr Pilləsi", "Magistratura", or "Təcrübə".
`;

    const userPrompt = `User Answers:\n${answersText}`;

    const textResult = await callAI(systemPrompt, userPrompt);
    const jsonResult = parseJsonResponse(textResult);

    return NextResponse.json(jsonResult);
  } catch (error: any) {
    console.error("Speciality Test API Error:", error);
    return NextResponse.json(
      { error: "Failed to analyze results", details: error.message },
      { status: 500 }
    );
  }
}

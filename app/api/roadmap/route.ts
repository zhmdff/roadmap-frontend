import { NextResponse } from "next/server";
import { callAI, parseJsonResponse } from "@/lib/gemini";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { speciality } = data;

    if (!speciality) {
      return NextResponse.json({ error: "Speciality is required" }, { status: 400 });
    }

    const systemPrompt = `
      Create a detailed learning roadmap for the following speciality.
      Focus on a timeline of 6-12 months.
      Provide specific resources (links or site names) for each milestone if possible.
      Language: Azerbaijani.

      Provide the response in EXACTLY the following JSON format structure:
      {
        "title": "Roadmap Title",
        "description": "Short description of the roadmap journey",
        "estimatedMonths": 6,
        "milestones": [
          {
            "month": 1,
            "task": "Title of the task",
            "details": "A VERY DETAILED, multi-paragraph explanation (at least 5-8 sentences). Explain exactly what this month's objective is, what specific concepts the user must learn, what they should practice or do practically, and how this prepares them for the next stages. Do NOT give a short one-sentence answer. Be as comprehensive and descriptive as an expert mentor.",
            "keyConcepts": ["Concept 1", "Concept 2", "Concept 3"],
            "practicalProject": "Name and brief description of a small project or exercise to practically apply this month's skills."
          }
        ]
      }
    `;

    const textResult = await callAI(systemPrompt, `Speciality: ${speciality}`);
    const jsonResult = parseJsonResponse(textResult);

    return NextResponse.json(jsonResult);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

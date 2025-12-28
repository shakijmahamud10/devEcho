import { GoogleGenAI, Type, Schema } from "@google/genai";
import { ProjectEstimation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const estimationSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING, description: "A professional title for the project." },
    summary: { type: Type.STRING, description: "A concise executive summary of the software solution." },
    recommendedTechStack: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "List of modern technologies recommended (e.g., React, Node.js, AWS)."
    },
    estimatedTimelineWeeks: { type: Type.STRING, description: "Estimated duration range in weeks (e.g., '8-12 weeks')." },
    keyFeatures: { 
      type: Type.ARRAY, 
      items: { type: Type.STRING },
      description: "List of 4-6 critical features required for MVP."
    },
    complexityScore: { type: Type.NUMBER, description: "Complexity score from 1 (Simple) to 10 (Enterprise)." }
  },
  required: ["title", "summary", "recommendedTechStack", "estimatedTimelineWeeks", "keyFeatures", "complexityScore"]
};

export const generateProjectEstimation = async (userPrompt: string): Promise<ProjectEstimation> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `The user wants to build software with this description: "${userPrompt}". 
      Act as a Senior Solution Architect. Analyze this request and provide a high-level technical estimation.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: estimationSchema,
        systemInstruction: "You are an expert software consultant. Be realistic, modern, and concise. Assume high quality standards.",
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as ProjectEstimation;
  } catch (error) {
    console.error("Error generating estimation:", error);
    throw error;
  }
};
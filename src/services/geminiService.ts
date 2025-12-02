import { GoogleGenAI } from "@google/genai";

export interface EcoResult {
    valid?: boolean;
    traditional: number;
    molecular: number;
    savings: number;
    message: string;
}

export const getEcoInsight = async (itemDescription: string): Promise<EcoResult> => {
    // Note: In a real Next.js app, you should use NEXT_PUBLIC_API_KEY or a server action to hide the key.
    // For this demo, we'll assume it's available or use a mock.
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY && !process.env.API_KEY) {
        console.warn("API_KEY not found. Returning mock data.");
        return mockResponse(itemDescription);
    }

    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || process.env.API_KEY;

    try {
        const ai = new GoogleGenAI({ apiKey: apiKey! });
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: [
                {
                    role: 'user',
                    parts: [
                        {
                            text: `
                Atue como um especialista em sustentabilidade da SwissEcoClean.
                O usuário inseriu: "${itemDescription}".
                
                PASSO 1: VALIDAÇÃO
                Verifique se o input se refere a um item passível de limpeza profissional (ex: sofás, tapetes, colchões, poltronas, cadeiras, cortinas, interior de veículos, pelúcias, carrinhos de bebê).
                Se for algo aleatório, ofensivo, ou que não seja lavável (ex: "banana", "céu", "política", "carro" (o carro todo não, só estofado), "celular"), retorne um JSON indicando erro.

                PASSO 2: GERAÇÃO (Apenas se for válido)
                Calcule estimativas de gasto de água.

                SAÍDA ESPERADA (JSON puro):
                
                CASO VÁLIDO:
                {
                  "valid": true,
                  "traditional": [litros gastos na lavagem tradicional],
                  "molecular": [litros gastos na molecular (perto de 0)],
                  "savings": [diferença],
                  "message": "[Frase curta e impactante sobre a economia]"
                }

                CASO INVÁLIDO:
                {
                  "valid": false,
                  "traditional": 0,
                  "molecular": 0,
                  "savings": 0,
                  "message": "Por favor, insira um item válido para limpeza (ex: Sofá, Tapete, Colchão)."
                }
              `
                        }
                    ]
                }
            ],
            config: {
                temperature: 0.7,
            }
        });

        const text = response.text || "{}";
        // Clean up markdown if present (e.g. ```json ... ```)
        const jsonString = text.replace(/```json|```/g, '').trim();
        return JSON.parse(jsonString);

    } catch (error) {
        console.error("Gemini API Error:", error);
        return mockResponse(itemDescription);
    }
};

const mockResponse = (item: string): EcoResult => {
    return {
        valid: true,
        traditional: 180,
        molecular: 5,
        savings: 175,
        message: `Ao optar pela tecnologia molecular para o seu ${item}, você preserva recursos vitais.`
    };
}

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
                Agissez comme un expert en durabilité de SwissEcoClean.
                L'utilisateur a saisi : "${itemDescription}".
                
                ÉTAPE 1 : VALIDATION
                Vérifiez si l'entrée fait référence à un article pouvant être nettoyé professionnellement (ex : canapés, tapis, matelas, fauteuils, chaises, rideaux, intérieur de véhicules, peluches, poussettes).
                S'il s'agit de quelque chose d'aléatoire, d'offensant ou de non lavable (ex : "banane", "ciel", "politique", "voiture" (pas toute la voiture, seulement les tissus), "téléphone"), retournez un JSON indiquant une erreur.

                ÉTAPE 2 : GÉNÉRATION (Seulement si valide)
                Calculez des estimations de consommation d'eau.

                SORTIE ATTENDUE (JSON pur) :
                
                CAS VALIDE :
                {
                  "valid": true,
                  "traditional": [litres dépensés en lavage traditionnel],
                  "molecular": [litres dépensés en moléculaire (proche de 0)],
                  "savings": [différence],
                  "message": "[Phrase courte et percutante sur l'économie en français]"
                }

                CAS INVALIDE :
                {
                  "valid": false,
                  "traditional": 0,
                  "molecular": 0,
                  "savings": 0,
                  "message": "Veuillez saisir un article valide pour le nettoyage (ex : Canapé, Tapis, Matelas)."
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
        message: `En optant pour la technologie moléculaire pour votre ${item}, vous préservez des ressources vitales.`
    };
}

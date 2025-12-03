const { GoogleGenAI } = require("@google/genai");
const fs = require('fs');
const path = require('path');

// Load env vars manually
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    const envConfig = fs.readFileSync(envPath, 'utf8');
    envConfig.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            process.env[key.trim()] = value.trim();
        }
    });
}

const calculateEcoInsight = async (itemDescription) => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        console.error("API Key not found");
        return null;
    }

    // Code-based safety filter for specific terms
    const forbiddenTerms = ['bolsonaro', 'trump', 'hitler', 'sexe', 'drogue', 'politique', 'meurtre', 'suicide'];
    const lowerInput = itemDescription.toLowerCase();
    if (forbiddenTerms.some(term => lowerInput.includes(term))) {
        return {
            valid: false,
            traditional: 0,
            molecular: 0,
            savings: 0,
            message: "Veuillez saisir uniquement un article à nettoyer (ex : Canapé, Tapis, Matelas)."
        };
    }

    try {
        const ai = new GoogleGenAI({ apiKey: apiKey });
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
                
                OBJECTIF : Fournir une estimation cohérente et réaliste de la consommation d'eau pour le nettoyage de cet article.
                
                RÈGLES DE CONSISTANCE :
                1. Si la taille n'est pas précisée, supposez TOUJOURS une taille standard moyenne.
                2. RETOURNEZ UNIQUEMENT DES ENTIERS SIMPLES. PAS DE FOURCHETTES (ex: PAS "80-100", MAIS "90").
                3. Ancrage des valeurs (Lavage Traditionnel) :
                   - Canapé 2-3 places : ~180 Litres
                   - Grand Canapé / Angle : ~280 Litres
                   - Fauteuil : ~70 Litres
                   - Chaise : ~15 Litres
                   - Matelas Double : ~110 Litres
                   - Tapis moyen : ~90 Litres
                   - Voiture Citadine (ex: Fiat 500) : ~100 Litres (Intérieur complet)
                   - Voiture Berline (ex: Tesla Model 3, Golf) : ~150 Litres (Intérieur complet)
                   - Voiture SUV/4x4 (ex: Range Rover) : ~200 Litres (Intérieur complet)
                
                ÉTAPE 1 : VALIDATION
                Vérifiez si l'entrée fait référence à un article pouvant être nettoyé professionnellement.
                ACCEPTEZ LES MARQUES ET MODÈLES DE VOITURES (ex: "Tesla", "Golf", "BMW X5"). Dans ce cas, considérez qu'on parle du NETTOYAGE INTÉRIEUR COMPLET des sièges et moquettes.
                
                ÉTAPE 2 : GÉNÉRATION (Seulement si valide)
                Calculez des estimations de consommation d'eau.
                La méthode moléculaire consomme environ 5% à 10% de la méthode traditionnelle.

                SORTIE ATTENDUE (JSON pur) :
                
                CAS VALIDE :
                {
                  "valid": true,
                  "traditional": [nombre entier, ex: 180],
                  "molecular": [nombre entier, ex: 10],
                  "message": "[Phrase courte et percutante sur l'économie en français]"
                }

                CAS INVALIDE :
                {
                  "valid": false,
                  "traditional": 0,
                  "molecular": 0,
                  "message": "Veuillez saisir un article valide pour le nettoyage (ex : Canapé, Tapis, Matelas)."
                }
              `
                        }
                    ]
                }
            ],
            config: {
                temperature: 0.1,
            }
        });

        const text = response.text || "{}";
        const jsonString = text.replace(/```json|```/g, '').trim();
        const data = JSON.parse(jsonString);

        if (data.valid) {
            let traditional = typeof data.traditional === 'number' ? data.traditional : parseInt(data.traditional) || 0;
            let molecular = typeof data.molecular === 'number' ? data.molecular : parseInt(data.molecular) || 0;

            if (traditional > 2000) {
                traditional = Math.round(traditional / 100);
                if (traditional > 2000) traditional = 200;
            }

            if (molecular >= traditional) {
                molecular = Math.round(traditional * 0.05);
            }

            return {
                traditional,
                molecular,
                savings: traditional - molecular
            };
        }
        return data;

    } catch (error) {
        console.error("Error:", error);
        return null;
    }
};

async function runTest() {
    console.log("Testing consistency for 'bolsonaro sofa'...");
    const res1 = await calculateEcoInsight("bolsonaro sofa");
    console.log("Result:", res1);

    console.log("\nTesting consistency for 'banane'...");
    const res2 = await calculateEcoInsight("banane");
    console.log("Result:", res2);
}

runTest();

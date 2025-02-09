import { useEffect, useState } from "react";

const API_KEY = "D15eJL02jp45oLAz02VbNHd8KuKLptQr";
const BASE_URL = "https://api.polygon.io/v2/aggs/ticker/";
const symbols = ["AAPL", "TSLA", "AMZN", "GOOGL", "MSFT", "NFLX", "META", "SPY", "AMT", "NVDA", "TSM", "BABA", "WMT"]; // Puedes añadir más símbolos si lo deseas

interface StockPrice {
    T: string;
    c: number;
    o: number;
}

export const StocksPriceWidgets = () => {
    const [stocksPrice, setStocksPrice] = useState<StockPrice[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Cargar datos desde localStorage si están disponibles
        const storedStocksPrice = localStorage.getItem("stocksPrice");
        if (storedStocksPrice) {
            setStocksPrice(JSON.parse(storedStocksPrice));
            setLoading(false);
            return; // No hace falta hacer la llamada a la API si ya tenemos los datos
        }

        const fetchStockPrice = async (symbol: string): Promise<StockPrice | null> => {
            try {
                const response = await fetch(`${BASE_URL}${symbol}/prev?apiKey=${API_KEY}`);

                if (response.status === 429) {
                    console.warn(`Rate limit exceeded for ${symbol}. Retrying in 60 seconds...`);
                    await new Promise(resolve => setTimeout(resolve, 60000)); // Espera 60s antes de reintentar
                    return fetchStockPrice(symbol); // Reintenta la petición
                }

                const data = await response.json();
                if (!data.results || data.results.length === 0) return null;

                return { T: symbol, c: data.results[0].c, o: data.results[0].o };
            } catch (error) {
                console.error(`Error fetching ${symbol}:`, error);
                return null;
            }
        };

        const fetchAllStocks = async () => {
            setLoading(true);

            const prices: StockPrice[] = [];

            // Agrupar en lotes de 5 para cumplir con el límite de la API
            for (let i = 0; i < symbols.length; i += 5) {
                const batch = symbols.slice(i, i + 5); // Obtener un lote de hasta 5 símbolos

                const batchResults: StockPrice[] = [];

                // Fetch cada símbolo en el lote
                for (const symbol of batch) {
                    const result = await fetchStockPrice(symbol);
                    if (result) {
                        batchResults.push(result);
                    }

                    // Espera 12 segundos entre cada solicitud dentro de un lote para no exceder el límite de 5 llamadas por minuto
                    await new Promise(resolve => setTimeout(resolve, 15000)); // Espera 12s entre solicitudes
                }

                // Añadir los resultados del lote al array global de precios
                prices.push(...batchResults);
                setStocksPrice([...prices]); // Actualiza el estado con los resultados del lote

                // Espera 60 segundos antes de hacer el siguiente lote
                if (i + 5 < symbols.length) {
                    await new Promise(resolve => setTimeout(resolve, 60000)); // Espera 60s entre lotes
                }
            }

            localStorage.setItem("stocksPrice", JSON.stringify(prices)); // Guarda los precios en localStorage
            setLoading(false);
        };

        // Solo se ejecuta si no hay datos en el localStorage
        fetchAllStocks();
    }, []); // Se ejecuta solo cuando el componente se monta

    return (
        <div className="ticker-container overflow-hidden bg-dark p-2">
            {loading ? (
                <p className="text-white">Cargando precios...</p>
            ) : (
                <div className="ticker-wrapper flex whitespace-nowrap">
                    {stocksPrice.map(({ T, c, o }, index) => (
                        <div key={index} className="ticker-item flex text-white gap-1 px-5">
                            <span className="font-secondary text-sm large-desktop:text-base">{T}:</span>
                            <span className="font-secondary text-sm large-desktop:text-base">{c.toFixed(2)}</span>
                            <span className="font-secondary text-sm large-desktop:text-base">{o}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};









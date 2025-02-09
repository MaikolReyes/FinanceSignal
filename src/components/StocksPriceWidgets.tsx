import { useEffect, useState } from "react";
const API_KEY = import.meta.env.API_KEY_STOCKS;

interface StockPrice {
    T: string;
    c: number;
    o: number;
}

const BASE_URL = "https://api.polygon.io/v2/aggs/ticker/";
const symbols = ["AAPL", "TSLA", "AMZN", "GOOGL", "MSFT"]; // Puedes añadir más símbolos si lo deseas


export const StocksPriceWidgets = () => {
    const [stocksPrice, setStocksPrice] = useState<StockPrice[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchStockPrice = async (symbol: string): Promise<StockPrice | null> => {

            try {
                const response = await fetch(`${BASE_URL}${symbol}/prev?apiKey=${API_KEY}`);

                if (response.status === 429) {
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
                            <span className="font-secondary text-sm large-desktop:text-base">{o.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};









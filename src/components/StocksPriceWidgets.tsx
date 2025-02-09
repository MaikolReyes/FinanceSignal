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
        const fetchStockPrices = async () => {
            const prices: StockPrice[] = [];
            const savedPrices = localStorage.getItem("stocksPrice");

            // Si ya tenemos los datos, utilizarlos directamente
            if (savedPrices) {
                setStocksPrice(JSON.parse(savedPrices));
                setLoading(false);
                return;
            }

            setLoading(true); // Mostrar un indicador de carga

            // Llamada a la API en paralelo para obtener todas las acciones
            const requests = symbols.map(symbol =>
                fetch(`${BASE_URL}${symbol}/prev?apiKey=${API_KEY}`).then(response => response.json())
            );

            try {
                const results = await Promise.all(requests); // Esperar todas las respuestas

                // Filtrar los resultados válidos y actualizar el estado
                results.forEach((data, index) => {
                    if (data.results && data.results.length > 0) {
                        prices.push({ T: symbols[index], c: data.results[0].c, o: data.results[0].o });
                    }
                });

                setStocksPrice(prices);
                localStorage.setItem("stocksPrice", JSON.stringify(prices)); // Guardar los datos
            } catch (error) {
                console.error("Error fetching stock prices:", error);
            } finally {
                setLoading(false); // Dejar de mostrar el indicador de carga
            }
        };

        fetchStockPrices();
    }, []);


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









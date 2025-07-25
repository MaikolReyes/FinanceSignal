// src/components/IndexPriceWidget.tsx
import { useEffect, useState } from "react";

interface IndexData {
    ticker: string;
    lastTrade: {
        p: number; // Precio
        t: number; // Timestamp
    };
}

const api_key = 'D15eJL02jp45oLAz02VbNHd8KuKLptQr';

export const StockWidget = () => {
    const [indices, setIndices] = useState<IndexData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIndexPrices = async () => {
            try {
                const res = await fetch(
                    `https://api.polygon.io/v2/snapshot/locale/global/markets/indices/tickers?apiKey=${api_key}`
                );
                const data = await res.json();

                if (data && Array.isArray(data.tickers)) {
                    setIndices(data.tickers.slice(0, 10));
                } else {
                    console.error("La respuesta no contiene 'tickers':", data);
                }
            } catch (error) {
                console.error("Error al obtener los índices:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchIndexPrices();
    }, []);

    return (
        <div className="bg-gray-900 text-white px-4 py-2 shadow-md">
            <div className="flex flex-wrap gap-4 overflow-x-auto text-sm">
                {loading ? (
                    <span>Cargando índices...</span>
                ) : (
                    indices.map((item) => (
                        <div key={item.ticker} className="min-w-max">
                            <span className="font-bold">{item.ticker}</span>: ${item.lastTrade.p.toFixed(2)}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

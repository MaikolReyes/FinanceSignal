import { useEffect, useState } from "react"

interface Ticker {
    symbol: string;
    price: string;
}

export const TickerList = () => {
    const [tickers, setTickers] = useState<Ticker[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTickers = async () => {
            try {
                // Obtener todos los tickers de Binance API
                const response = await fetch('https://data-api.binance.vision/api/v3/ticker/price');
                const data: Ticker[] = await response.json();

                // Filtrar tickers que terminen en "USDT"
                const usdtTickers = data.filter(ticker => ticker.symbol.endsWith('USDT'));

                setTickers(usdtTickers);
            } catch (err) {
                setError('Error al obtener los datos');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchTickers();
    }, []);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="ticker-container overflow-hidden bg-dark p-2">
            <div className="ticker-wrapper flex whitespace-nowrap">
                {tickers.slice(0, 15).map(({ symbol, price }, index) => {
                    // Extraer el nombre de la criptomoneda eliminando la parte "USDT"
                    const cryptoName = symbol.replace('USDT', '');
                    return (
                        <div
                            key={index}
                            className="ticker-item flex text-white gap-1 px-5">
                            <span className="font-secondary text-sm large-desktop:text-base">{cryptoName}: ${parseFloat(price)}</span>
                        </div>
                    );
                })}
            </div>
        </div >
    );
}

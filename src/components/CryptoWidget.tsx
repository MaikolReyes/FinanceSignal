import { useEffect, useState } from "react"

interface Ticker {
    symbol: string;
    price: string;
}

// Define las 15 criptomonedas que quieres mostrar (fuera del componente para evitar recreación)
const SELECTED_CRYPTOS = [
    'BTCUSDT',
    'ETHUSDT',
    'ADAUSDT',
    'DOTUSDT',
    'LINKUSDT',
    'BNBUSDT',
    'LTCUSDT',
    'XRPUSDT',
    'SOLUSDT',
    'MATICUSDT',
    'AVAXUSDT',
    'ATOMUSDT',
    'DOGEUSDT',
    'UNIUSDT',
    'SHIBUSDT'
];

export const CryptoWidget = () => {
    const [tickers, setTickers] = useState<Ticker[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTickers = async () => {
            try {
                // Método 1: Obtener precios específicos usando múltiples símbolos
                const response = await fetch(`https://data-api.binance.vision/api/v3/ticker/price?symbols=[${SELECTED_CRYPTOS.map(s => `"${s}"`).join(',')}]`);

                // Método alternativo si el anterior no funciona:
                // const response = await fetch('https://data-api.binance.vision/api/v3/ticker/price');
                // const allData: Ticker[] = await response.json();
                // const filteredData = allData.filter(ticker => selectedCryptos.includes(ticker.symbol));

                const data: Ticker[] = await response.json();

                // Ordenar según el orden de SELECTED_CRYPTOS
                const orderedTickers = SELECTED_CRYPTOS.map(symbol =>
                    data.find(ticker => ticker.symbol === symbol)
                ).filter(ticker => ticker !== undefined) as Ticker[];

                setTickers(orderedTickers);
            } catch (err) {
                console.error('Error con método 1, intentando método alternativo...' + err);

                try {
                    // Método alternativo: obtener todos y filtrar
                    const response = await fetch('https://data-api.binance.vision/api/v3/ticker/price');
                    const allData: Ticker[] = await response.json();

                    const filteredData = SELECTED_CRYPTOS.map(symbol =>
                        allData.find(ticker => ticker.symbol === symbol)
                    ).filter(ticker => ticker !== undefined) as Ticker[];

                    setTickers(filteredData);
                } catch (secondErr) {
                    setError('Error al obtener los datos');
                    console.error(secondErr);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchTickers();
    }, []);

    if (loading) return <div className="p-4 text-center">Cargando...</div>;
    if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

    return (
        <div className="ticker-container overflow-hidden bg-blue-600 p-2">
            <div className="ticker-wrapper flex whitespace-nowrap animate-scroll">
                {tickers.map(({ symbol, price }, index) => {
                    // Extraer el nombre de la criptomoneda eliminando la parte "USDT"
                    const cryptoName = symbol.replace('USDT', '');
                    const formattedPrice = parseFloat(price).toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 6
                    });

                    return (
                        <div
                            key={`${symbol}-${index}`}
                            className="ticker-item flex text-white gap-1 px-5">
                            <span className="font-secondary text-sm large-desktop:text-base">
                                {cryptoName}: ${formattedPrice}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
// TradingViewWidget.jsx
import { useEffect, useRef, memo, useContext } from 'react';
import { DarkModeContext } from '../context';

function TradingViewWidget() {

    const { darkMode } = useContext(DarkModeContext);
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {

        if (!container.current) return;
        
        container.current.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
            {
            "symbols": [
                { "proName": "NASDAQ:AAPL", "title": "Apple" },
                { "proName": "NASDAQ:GOOGL", "title": "Google" },
                { "proName": "NASDAQ:MSFT", "title": "Microsoft" },
                { "proName": "NASDAQ:META", "title": "Meta" },
                { "proName": "NASDAQ:AMZN", "title": "Amazon" },
                { "proName": "NASDAQ:MELI", "title": "Mercadolibre" },
                { "proName": "NASDAQ:TSLA", "title": "Tesla" },
                { "proName": "NASDAQ:NVDA", "title": "Nvdia" },
                { "proName": "NASDAQ:AMD", "title": "AMD" },
                { "proName": "NASDAQ:INTC", "title": "Intel" },
                { "proName": "NASDAQ:NFLX", "title": "Netflix" },
                { "proName": "SPY", "title": "S&P 500" },
                { "proName": "NYSE:BRK.B", "title": "Berkshire Hathaway" },
                { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
                { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum"}
            ],
                "colorTheme": "${darkMode ? "dark" : "light"}",
                "isTransparent": true,
                "showSymbolLogo":true,
                "displayMode": "compact",
                "locale": "es"
            }`;
        container.current.appendChild(script);
    },
        [darkMode]
    );

    return (
        <div className="tradingview-widget-container border-2" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
}

export default memo(TradingViewWidget);

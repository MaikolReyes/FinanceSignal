// TradingViewWidget.jsx
import { useEffect, useRef, memo, useContext } from 'react';
import { DarkModeContext } from '../context';

function TradingViewWidget() {

    const { darkMode } = useContext(DarkModeContext);

    const container = useRef<HTMLDivElement>(null);

    useEffect(
        () => {

            if (!container.current) return;

            container.current.innerHTML = "";

            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
            {
            "symbols": [
                { "proName": "NASDAQ:AAPL", "title": "AAPL" },
                { "proName": "NASDAQ:GOOGL", "title": "GOOGL" },
                { "proName": "NASDAQ:MSFT", "title": "MSFT" },
                { "proName": "NASDAQ:META", "title": "META" },
                { "proName": "NASDAQ:AMZN", "title": "AMZN" },
                { "proName": "NASDAQ:MELI", "title": "MELI" },
                { "proName": "NASDAQ:TSLA", "title": "TSLA" },
                { "proName": "NASDAQ:NVDA", "title": "NVDA" },
                { "proName": "NASDAQ:AMD", "title": "AMD" },
                { "proName": "NASDAQ:INTC", "title": "INTC" },
                { "proName": "NASDAQ:NFLX", "title": "NFXL" },
                { "proName": "SPY", "title": "S&P 500" },
                { "proName": "NYSE:BRK.B", "title": "Berkshire Hathaway" }
            ],
                "colorTheme": "${darkMode ? "dark" : "light"}",
                "isTransparent": true,
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

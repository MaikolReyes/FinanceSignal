import { useEffect, useState } from "react"

export const DolarWidget = () => {
    const [dolarApi, setDolarApi] = useState([])

    useEffect(() => {
        fetch('https://dolarapi.com/v1/dolares')
            .then(response => response.json())
            .then(data => setDolarApi(data))
    }, [])

    return (
        <div className="ticker-container overflow-hidden bg-dark p-2">
            <div className="ticker-wrapper flex whitespace-nowrap">
                {dolarApi.slice(0, 6).map(({ id, nombre, compra, venta }, index) => (
                    <div
                        key={`${id}-${index}`}
                        className="ticker-item flex text-white gap-1 px-5">
                        <span className=" desktop:text-sm large-desktop:text-base">Dólar {nombre}:</span>
                        <span className=" desktop:text-sm large-desktop:text-base"> ${compra} -</span>
                        <span className=" desktop:text-sm large-desktop:text-base"> ${venta}</span>
                    </div>
                ))}
            </div>
        </div >

    )
}
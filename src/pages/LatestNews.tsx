import { Helmet } from "react-helmet-async";
import { CarouselSlider, NewsDown, NewsDownLeft, Sidebar } from "../home";


export const LatestNews = () => {

    return (
        <>

            <Helmet>
                <title>FinanceSignal | Últimas noticias</title>
            </Helmet>

            <div className="grid grid-cols-1 tablet:grid-cols-2 w-full mx-auto large-desktop:w-4/5 large-desktop:gap-5">
                <CarouselSlider />
                <Sidebar />
            </div>

            <NewsDown />
            <NewsDownLeft />
        </>
    )
}

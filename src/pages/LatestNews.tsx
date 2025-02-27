import { CarouselSlider } from "../components";
import { NewsDown, NewsDownLeft, SidebarPrincipal } from "./Headlines";



export const LatestNews = () => {


    return (
        <>

            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 tablet:grid-cols-2 w-full mx-auto large-desktop:w-4/5 large-desktop:gap-5">
                    <CarouselSlider />
                    <SidebarPrincipal />
                </div>
            </div>

            <div>
                <NewsDown />
            </div>

            <div>
                <NewsDownLeft />
            </div>

        </>
    )
}

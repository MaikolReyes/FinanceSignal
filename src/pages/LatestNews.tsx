import { CarouselPrincipal, NewsDown, NewsDownLeft, SidebarPrincipal } from "./Headlines";



export const LatestNews = () => {


    return (
        <>

            <div className="w-full mx-auto">
                <div className="grid grid-cols-1 w-full mx-auto desktop:grid-cols-2 large-desktop:gap-5 large-desktop:w-4/5">
                    <CarouselPrincipal />
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

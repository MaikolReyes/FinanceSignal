import { CarouselPrincipal, NewsDown, NewsDownLeft, SidebarPrincipal } from "./Headlines";



export const LatestNews = () => {


    return (
        <>

            <div className="flex justify-center items-center w-full mx-auto">
                <div className="grid grid-cols-2 w-full gap-5">
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

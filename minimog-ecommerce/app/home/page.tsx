import { Button } from "@/components/ui/button";
import BestSellers from "@/Sections/BestSeller";
import MixMatchSection from "@/Sections/CheckOutMixMatch";
import HeroBanner from "@/Sections/HeroBanner"; 
import ReLeatherSection from "@/Sections/ReLeatherSection";
import ShopCategories from "@/Sections/ShopByCategories";
import HotThisWeekSection from "@/Sections/BeautifullyFunctional";
import CoastalEditionSection from "@/Sections/TheCoastalEditio";
import LivingOutSection from "@/Sections/MinimogStore";
import HappyCustomers from "@/Sections/HappyCustomers";

export default function HomePage() {
    return (
        <div>
            <HeroBanner />
            <ShopCategories/>
            <BestSellers/>
            <ReLeatherSection/>
            <MixMatchSection/>
            <HotThisWeekSection/>
            <CoastalEditionSection/>
            <LivingOutSection/>
            <HappyCustomers/>
        </div>
    )
}
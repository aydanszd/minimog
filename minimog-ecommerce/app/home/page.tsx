import BestSellers from "@/features/Sections/BestSeller";
import MixMatchSection from "@/features/Sections/CheckOutMixMatch";
import HeroBanner from "@/features/Sections/HeroBanner"; 
import ReLeatherSection from "@/features/Sections/ReLeatherSection";
import ShopCategories from "@/features/Sections/ShopByCategories";
import HotThisWeekSection from "@/features/Sections/BeautifullyFunctional";
import CoastalEditionSection from "@/features/Sections/TheCoastalEditio";
import LivingOutSection from "@/features/Sections/MinimogStore";
import HappyCustomers from "@/features/Sections/HappyCustomers";
import InstagramFeaturesSection from "@/features/Sections/FollowUsInstagram";
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
            <InstagramFeaturesSection/>
        </div>
    )
}
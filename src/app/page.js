import Faq from "@/components/Faq";
import FirstFold from "@/components/FirstFold";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hotjar from "@/components/Hotjar";
import JoinCommunity from "@/components/JoinCommunity";
import SecondFold from "@/components/SecondFold";
import ThirdFold from "@/components/ThirdFold";
import WellowAtWork from "@/components/WellowAtWork";
import Script from "next/script";

export default function Home() {
  return (
    <>
     <Hotjar/>
      <Header />
      <div className="Mobile:p-4">
        <FirstFold />
        <SecondFold />
        <ThirdFold />
        <WellowAtWork />
        <JoinCommunity />
        <Faq />
      </div>

      <Footer />
    </>
  );
}

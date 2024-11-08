import Faq from "@/components/Faq";
import FirstFold from "@/components/FirstFold";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JoinCommunity from "@/components/JoinCommunity";
import SecondFold from "@/components/SecondFold";
import ThirdFold from "@/components/ThirdFold";
import WellowAtWork from "@/components/WellowAtWork";

export default function Home() {
  return (
    <>
     <Header/>
     <FirstFold/>
     <SecondFold/>
     <ThirdFold/>
     <WellowAtWork/>
     <JoinCommunity/>
     <Faq/>
    <Footer/>
    </>
  );
}

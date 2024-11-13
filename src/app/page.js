import Faq from "@/components/Faq";
import FirstFold from "@/components/FirstFold";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JoinCommunity from "@/components/JoinCommunity";
import SecondFold from "@/components/SecondFold";
import ThirdFold from "@/components/ThirdFold";
import WellowAtWork from "@/components/WellowAtWork";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script
        id="hotjar-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
                   (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:5197726,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                    `,
        }}
      />
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

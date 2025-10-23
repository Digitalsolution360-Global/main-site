import BgLayout from "@/components/layout/bgLayout";
import Blogs from "@/components/sections/blogs";
import Clients from "@/components/sections/clients";
import Faqs from "@/components/sections/faqs";
import MissionVision from "@/components/sections/mission-vision";
import Offering from "@/components/sections/offering";
import Services from "@/components/sections/services";
import { WebDev } from "@/components/sections/web-dev";
import WhyUS from "@/components/sections/why-us";

export default function Home() {
  return (
    <BgLayout>
      <video
          src="/home/videos/hero-video.mp4"
          autoPlay
          loop
          muted
          className="pt-21 lg:pt-18 w-full h-auto max-h-screen object-cover"
        />

        <Services/>
        <WhyUS/>
        <MissionVision/>
        <Clients/>
        <WebDev/>
        <Offering/>
        <Blogs/>
        <Faqs/>
    </BgLayout>
  );
}

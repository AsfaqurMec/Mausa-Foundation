import About from "@/components/About";
import Banner from "@/components/Banner";
import Project from "@/components/Project";
import RecentWork from "@/components/RecentWork";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main>
     <Banner></Banner>
     <About></About>
     <Project></Project>
     <Services></Services>
     <RecentWork></RecentWork>
    </main>
  );
}

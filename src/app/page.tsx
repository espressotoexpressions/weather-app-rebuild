import CurrentWeather from "@/components/CurrentWeather";
import ForecastWeather from "@/components/ForecastWeather";
import MainComponent from "@/components/MainComponent";
import Searchbox from "@/components/Searchbox";
import { Card, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <div className="h-screen w-full flex justify-center items-center">
   <Card className="h-3/4 w-3/4  flex flex-col  items-center  pt-10 sm:p-10  ">
   <MainComponent/>
    </Card>
   </div>
   </>
  );
}

import Image from "next/image";
import CustomAppBar from './CustomAppBar'
import MainPage from "./InputForm"

export default function Home() {
  return (
    <div>
        <CustomAppBar/>
        <MainPage/>
    </div>
  );
}

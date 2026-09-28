import Hero from "@/components/Hero";
import Specialities from "@/components/Specialities";
import Why from "@/components/Why";
const page = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)]">
      <Hero />
      <Specialities />  
      <Why/>
    </div>
  )
}

export default page

import Image from "next/image";

export default function History() {
  return (
    <section className="section-padding mt-20">
      <p className="mb-8 text-center font-bold">🌟 Celebrating Culinary Excellence Since [Year]</p>
      <div className="flex gap-6 flex-wrap">
        <div className="flex-1 min-w-[18rem] flex-center flex-col" data-aos="fade-right">
          <p className="mb-3">At Foodie, our journey began with a simple yet profound passion for creating exceptional dining experiences. Established in [Year], we set out to redefine the local culinary scene, aiming to be more than just a restaurant. Over the years, we've become a hub for gastronomic enthusiasts seeking remarkable flavors and warm hospitality.</p>
          <p>From our humble beginnings to becoming a beloved dining destination, every chapter of our history is etched with the stories of our loyal patrons and the delicious memories we've crafted together.</p>
        </div>
        <div className="img-box w-full aspect-video md:w-1/2 bg-contain" data-aos="fade-left">
          <Image
            src="/images/all/restaurant.jpg"
            width={1600}
            height={900}
            alt="Picture of the Restaurant"
          />
        </div>
      </div>
    </section>
  )
}

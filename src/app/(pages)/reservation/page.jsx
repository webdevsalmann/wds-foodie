import Image from "next/image";
import Form from "./Form";

export default function Page() {
  return (
    <section className="mt-20 section-padding">
      <div className="section-heading">
        <h2 className="mb-6">Book Your Table for a <span className="clr-p"> Culinary Experience</span></h2>
        <p>At Foodie, we understand the importance of creating unforgettable dining moments. To ensure your experience is seamless, we offer a convenient online reservation service. Simply fill out the form below to secure your table.</p>
      </div>

      <div className="my-12 flex gap-8 flex-wrap-reverse">
        <div className="img-box w-full md:w-1/2" data-aos="fade-up">
          <Image
            src="/images/all/restaurant.jpg"
            width={1600}
            height={900}
            alt="Picture of the Restaurant"
          />
        </div>

        <div className="flex-1 w-full md:w-1/2 set-bg-dark rounded" data-aos="fade-up">
          <Form />
        </div>
      </div>
    </section>
  )
}

import { Ifacebook, Iwhatsapp, Iyoutube } from "@/components/svgs/logo";

export default function Page() {

  const socialIconBox = "icon-box text-balance p-2 w-12 h-12 set-bg-light rounded hover:bg-dark";
  return (
    <section className="mt-20 section-padding">
      <h1 className="mb-8 text-center clr-p">Concact Us</h1>

      <div className="mx-auto p-4 w-full md:w-3/4 2xl:w-1/2 set-bg-dark text-neutral-300 rounded-md" data-aos="fade-up">
        <div className="flex flex-wrap gap-4 justify-between ">
          <div>
            <div className="font-bold">Address:</div>
            <div className="">123 Main Street <br />
              Cityville, CA 12345</div>
          </div>
          <div>
            <div className="font-bold">Phone Number:</div>
            <div className="">(555) 123-4567</div>
          </div>
          <div>
            <div className="font-bold">Email:</div>
            <div className="">info@foodie-restaurant.com</div>
          </div>
        </div>

        <div className=" my-6">
          <ul>
            <li><span className="font-bold">General Inquiries: </span>  info@foodie-restaurant.com</li>
            <li><span className="font-bold">Reservation Assistance: </span> reservations@foodie-restaurant.com</li>
            <li><span className="font-bold">Event Bookings: </span> events@foodie-restaurant.com</li>
          </ul>
        </div>

        <div className="">
          <div className="text-center font-bold">Connect With Us</div>
          <div className="flex gap-4">
            <div className="flex-center gap-4 p-2 w-full h-full">
              <a href="#" target="_blank" rel="noreferrer" className={`${socialIconBox} hover:text-green-500`}><Iwhatsapp /></a>
              <a href="#" target="_blank" rel="noreferrer" className={`${socialIconBox} hover:text-red-500`}><Iyoutube /></a>
              <a href="#" target="_blank" rel="noreferrer" className={`${socialIconBox} hover:text-blue-500`}><Ifacebook /></a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

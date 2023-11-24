import Image from "next/image";

export default function Recommendation() {
    return (
        <section className="section-padding pb-0">
            <div className="section-heading">
                <h2><span className="clr-p">Chef&apos;s Recommendation: </span>  Seafood Symphony</h2>
                <p>Join us on weekdays and enjoy exclusive promotions on selected menu items. It&apos;s our way of adding a dash of delight to your ordinary days. Because at Foodie, every day is a celebration of good food and great company.</p>
            </div>

            <div className="mx-auto w-full md:w-3/4 lg:w-1/2"  data-aos="fade-up">
                <div className='p-4 set-bg-light rounded-lg'>
                    <div className="relative img-box aspect-video rounded-md overflow-hidden">
                        <Image
                            className="z-0"
                            src="/images/food/f4.jpg"
                            width={1600}
                            height={900}
                            alt="Picture of the author"
                        />
                        <div className="absolute bottom-0 right-0 left-0 p-4 pt-12 bg-gradient-to-t from-zinc-950 z-10">
                            <div className="my-2 line-clamp-2 font-bold">Lobster Ravioli</div>
                            <div className="my-2 line-clamp-3 text-sm">Delicate lobster-filled ravioli topped with a creamy tomato basil sauce.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

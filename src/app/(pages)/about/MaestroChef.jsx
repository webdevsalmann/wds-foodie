import Image from "next/image";

export default function MaestroChef() {
    return (
        <section className="section-padding mt-20">
            <div className="flex gap-6 flex-wrap">

                <div className="img-box aspect-square w-full md:w-1/2 max-h-96 flex-center" data-aos="fade-right">
                    <Image
                        className="h-full w-fit aspect-[9/16] bg-contain"
                        src="/images/all/chef.jpg"
                        width={900}
                        height={1600}
                        alt="Picture of the Restaurant"
                    />
                </div>
                <div className="flex-1 min-w-[18rem] flex-center flex-col"  data-aos="fade-left">
                    <p className="mb-8 font-bold text-lg text-left ">👨‍🍳 Meet Our Maestro: Chef Miguel Doe</p>

                    <p className="mb-3">At the heart of Foodie's culinary magic is our esteemed Chef Miguel Doe. With a culinary journey spanning 8 years, Chef Miguel brings a wealth of experience and creativity to our kitchen.</p>
                    <p className="mb-3">Trained in the art of sea cuisine Chef Miguel has honed the craft of transforming the finest ingredients into culinary masterpieces. His dedication to innovation and attention to detail shine through in every dish that graces your table.</p>
                    <p>Chef Miguel invites you to embark on a gastronomic adventure, where each bite tells a tale of passion, skill, and a commitment to culinary excellence.</p>
                </div>
            </div>
        </section>
    )
}

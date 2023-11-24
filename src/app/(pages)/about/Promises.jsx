import Image from "next/image";

export default function Promises() {
    return (
        <section className="section-padding mt-20">
            <p className="mb-8 text-center font-bold"></p>
            <div className="flex gap-6 flex-wrap" data-aos="fade-up">
                <div className="flex-1 min-w-[18rem] flex-center flex-col">
                    <p className="mb-8 font-bold text-lg text-left">🌐 Beyond a Meal: A Promise of Quality and Service</p>

                    <p className="mb-3">At Foodie, we hold ourselves to the highest standards, ensuring that every aspect of your dining experience exceeds expectations.</p>
                    <p className="mb-3">At Foodie, we hold ourselves to the highest standards, ensuring that every aspect of your dining experience exceeds expectations.</p>
                    <p className="mb-3"><span className="font-bold">Quality Ingredients:</span>We source only the freshest, highest-quality ingredients to create dishes that not only satisfy your palate but elevate your dining experience.</p>
                    <p className="mb-3"><span className="font-bold">Impeccable Service:</span>Our team is dedicated to providing warm, attentive service from the moment you walk through our doors. Your comfort and enjoyment are our top priorities.</p>
                    <p className="mb-3"><span className="font-bold">Community Connection:</span>Beyond being a restaurant, we strive to be a community gathering place. Foodie is a space where friends and families come together to celebrate special moments and create lasting memories.</p>
                    <p>Thank you for being part of the Foodie family. We look forward to continuing our tradition of culinary excellence and welcoming you into our cozy haven of flavors and hospitality.</p>
                </div>
                <div className="img-box w-full aspect-video md:w-1/2 bg-contain" data-aos="fade-up">
                    <Image
                        src="/images/all/teamhands.jpg"
                        width={1600}
                        height={900}
                        alt="Picture of the Restaurant"
                    />
                </div>
            </div>
        </section>
    )
}

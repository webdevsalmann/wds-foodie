import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

{/* <Image
    key={index + dlaf}
    src={image}
    width={1600}
    height={900}
    alt={`Banner ${index + 1}`}
    className={index === currentImageIndex ? 'visible' : 'hidden'}
/> */}


// Example usage:
const images = [
    '/images/hero/1.jpg',
    '/images/hero/2.jpg',
    '/images/hero/3.jpg',
    '/images/hero/4.jpg',
    '/images/hero/5.jpg',
    '/images/hero/6.jpg',
    '/images/hero/7.jpg',
];


const BannerSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Function to handle next image
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to handle previous image
    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    // Function to handle automatic sliding
    const autoSlide = () => {
        nextImage();
    };

    // Set up automatic sliding interval on component mount
    useEffect(() => {
        const intervalId = setInterval(autoSlide, 9000);

        // Clear interval on component unmount
        return () => clearInterval(intervalId);
    }, [autoSlide]);

    return (
        <div className="banner-slider relative w-full h-full overflow-hidden">
            {images.map((image, index) => (
                <Image
                    key={index + 4321}
                    src={image}
                    width={1600}
                    height={900}
                    alt={`Banner ${index + 1}`}
                    className={` transition-all ${index === currentImageIndex ? 'visible' : 'hidden'}`}
                />
            ))}

            <button className="absolute left-2 sm:left-8 top-1/2 text-shadow text-3xl sm:text-6xl p-2 set-bg bg-opacity-50" onClick={prevImage}>&#x2770;</button>
            <button className="absolute right-2 sm:right-8 top-1/2 text-shadow text-3xl sm:text-6xl p-2 set-bg bg-opacity-50" onClick={nextImage}>&#x2771;</button>
        </div>
    );
};

export default function Hero() {
    return (
        <>
            <section className={`relative section-padding min-h-screen`}>
                {/* <div className="absolute inset-0 bg-[url('/images/hero/1.jpg')] bg-cover brightness-75 z-0"></div> */}
                <div className="absolute inset-0 bg-[url('/images/hero/1.jpg')] bg-cover brightness-75 z-0">
                    <BannerSlider images={images} />
                </div>

                <div className="absolute bottom-32 left-0 right-0 mx-auto w-full  flex-center flex-wrap gap-4 z-10">
                    <Link href="/reservation" className="btn-p">Book A Reservation</Link>
                    <Link href="/menu" className="btn-solid">View Menu</Link>
                </div>

                <a href="#about">
                    <div className="absolute left-0 bottom-0 w-full set-bg-dark py-6"><div className="w-full text-center animate-bounce text-neutral-50 hover:text-red-500 font-bold">&#x21d3; View More &#x21d3;</div></div>
                </a>
            </section>
            {/* <section className="section-padding ">
                <div className="flex gap-4 flex-wrap">
                    <button className="btn-p">Button btn-p</button>
                    <button className="btn-solid">Button btn-solid</button>
                    <button className="btn-soft">Button btn-soft</button>
                    <button className="btn-outline">Button btn-outline</button>
                    <button className="btn-link">Button btn-link</button>
                    <button className="btn-ghost">Button btn-ghost</button>
                    <button className="btn-ghost-link">Button btn-ghost-link</button>
                    <button className="btn-danger">Button btn-danger</button>
                </div>
            </section> */}
        </>
    )
}

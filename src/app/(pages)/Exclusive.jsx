import Image from "next/image"
import Link from "next/link"

const data = [
    {
        id: "m15",
        name: "Chicken Alfredo",
        desc: "Creamy Alfredo sauce with grilled chicken served over fettuccine pasta.",
        price: 16.99,
        image: "/images/food/f5.jpg",
    },
    {
        id: "m16",
        name: "Beef Stir-Fry",
        desc: "Tender strips of beef sautéed with colorful vegetables in a savory stir-fry sauce.",
        price: 17.99,
        image: "/images/food/f6.jpg",
    },
    {
        id: "m18",
        name: "Eggplant Parmesan",
        desc: "Breaded and baked eggplant slices layered with marinara sauce and melted cheese.",
        price: 13.99,
        image: "/images/food/f7.jpg",
    },
]

const Card = ({ item }) => {
    return (
        <div className='relative set-bg-light rounded-lg' data-aos="fade-up">
            <div className="relative img-box aspect-[3/4] rounded-md overflow-hidden">
                <Image
                    src={item.image}
                    width={300}
                    height={400}
                    alt="Picture of the author"
                />
                <div className="absolute top-0 right-0 m-4 px-2 set-bg text-red-500 text-lg font-bold rounded">${item.price}</div>
                <div className="absolute bottom-0 right-0 left-0 p-4 pt-12 bg-gradient-to-t from-zinc-950 z-10">
                    <div className="my-2 line-clamp-2 font-bold">{item.name}</div>
                    <div className="my-2 line-clamp-3 text-sm">{item.desc}</div>
                </div>
            </div>
        </div>
    )
}


export default function Exclusive() {
    return (
        <section className="section-padding pb-0">
            <div className="section-heading">
                <h2><span className="clr-p">Exclusive Promotion:</span> Weekday Delights</h2>
                <p>Indulge in the extraordinary with our chef's specially curated dishes for this month. From succulent seafood to decadent desserts, our specials are designed to tantalize your taste buds and elevate your dining experience.</p>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(item => {
                        return <Card key={item.id + 11} item={item} />
                    })
                }
            </div>
        </section>
    )
}

import Image from 'next/image'
import React from 'react'

const data = [
    {
        id: "m1",
        name: "Grilled Salmon",
        desc: "Succulent salmon fillet seasoned and grilled to perfection.",
        price: 18.99,
        image: "/images/food/f1.jpg",
    },
    {
        id: "m2",
        name: "Pasta Carbonara",
        desc: "Classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.",
        price: 15.99,
        image: "/images/food/f2.jpg",
    },
    {
        id: "m3",
        name: "Filet Mignon",
        desc: "Tender filet mignon steak cooked to your liking, served with a red wine reduction.",
        price: 24.99,
        image: "/images/food/f3.jpg",
    },
]

const Card = ({item}) => {
    return (
        <div className='p-4 set-bg-light rounded-lg'  data-aos="fade-up">
            <div className="img-box aspect-square rounded-md overflow-hidden">
                <Image
                    src={item.image}
                    width={500}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <div className="my-2 line-clamp-2 font-bold">{item.name}</div>
            <div className="my-2 line-clamp-3 text-sm">{item.desc}</div>
        </div>
    )
}

export default function MonthSpecial() {
    return (
        <section className="section-padding pb-0">
            <div className="section-heading">
                <h2>This <span className="clr-p">Month&apos;s Specials:</span>  Unveiling Culinary Delights!</h2>
                <p>Indulge in the extraordinary with our chef&apos;s specially curated dishes for this month. From succulent seafood to decadent desserts, our specials are designed to tantalize your taste buds and elevate your dining experience.</p>
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

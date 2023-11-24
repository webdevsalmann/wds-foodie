import Link from "next/link";

export default function Reserv() {
    return (
        <>
            <div className="mt-8 flex-center">
                <Link className="mx-auto btn-outline" href="/reservation">Book a Reservation</Link>
            </div>
            <section className="section-padding">
                <p className='mx-auto md:w-3/4 w-full text-center font-bold'>Stay tuned for more surprises and promotions throughout the year. Make your reservations now to secure your spot at Foodie, where extraordinary moments happen every day!</p>
            </section>
        </>
    )
}

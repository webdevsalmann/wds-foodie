import React from 'react'

export default function Form() {
    const inputClass = "px-4 h-8 set-bg text-neutral-200 rounded";
    return (
        <form className='p-4 flex flex-col gap-4'>
            <div className="flex-between gap-4">
                <label className='w-1/2 ' htmlFor="rName">
                    <div className='ml-2 mb-1 font-bold text-balance'>Name:</div>
                    <input className={`w-full ${inputClass}`} id='rName' name='rName' type="text" placeholder='Full Name' />
                </label>
                <label className='w-1/2 ' htmlFor="rEmail">
                    <div className='ml-2 mb-1 font-bold text-balance'>Email:</div>
                    <input className={`w-full ${inputClass}`} id='rEmail' name='rEmail' type="text" placeholder='xyz123@mail.com' />
                </label>
            </div>

            <div className="flex-between gap-4">
                <label className='w-1/2 ' htmlFor="rNoOfGuests">
                    <div className='ml-2 mb-1 font-bold text-balance'>Number of Guests:</div>
                    <select className={`w-full ${inputClass}`} name="rNoOfGuests" id="rNoOfGuests">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="more than 6">more than 6</option>
                    </select>
                </label>
                <label className='w-1/2 ' htmlFor="rTime">
                    <div className='ml-2 mb-1 font-bold text-balance'>Time:</div>
                    <select className={`w-full ${inputClass}`} name="rTime" id="rTime">
                        <option value="06:00 to 06:30 PM">06:00 to 06:30 PM</option>
                        <option value="06:30 to 07:00 PM">06:30 to 07:00 PM</option>
                        <option value="07:00 to 07:30 PM">07:00 to 07:30 PM</option>
                        <option value="07:30 to 08:00 PM">07:30 to 08:00 PM</option>
                        <option value="08:00 to 08:30 PM">08:00 to 08:30 PM</option>
                        <option value="08:30 to 09:00 PM">08:30 to 09:00 PM</option>
                        <option value="09:00 to 09:30 PM">09:00 to 09:30 PM</option>
                        <option value="09:30 to 10:00 PM">09:30 to 10:00 PM</option>
                        <option value="10:00 to 10:30 PM">10:00 to 10:30 PM</option>
                        <option value="10:30 to 11:00 PM">10:30 to 11:00 PM</option>
                        <option value="11:00 to 11:30 PM">11:00 to 11:30 PM</option>
                    </select>
                </label>
            </div>

            <div className="flex-between gap-4">
                <label className='w-1/2 ' htmlFor="rPhoneNumber">
                    <div className='ml-2 mb-1 font-bold text-balance'>Phone Number:</div>
                    <input className={`w-full ${inputClass}`} id='rPhoneNumber' name='rPhoneNumber' type="text" placeholder='+91 9898989898' />
                </label>
                <label className='w-1/2 ' htmlFor="rDate">
                    <div className='ml-2 mb-1 font-bold text-balance'>Date:</div>
                    <input className={`w-full ${inputClass}`} id='rDate' name='rDate' type="date" placeholder='xyz123@mail.com' />
                </label>
            </div>

            <div className="">
                <label htmlFor="rSpecialRequests">
                    <div className='ml-2 mb-1 font-bold text-balance'>Special Requests:</div>
                    <textarea className={`w-full resize-y ${inputClass} h-auto`} name="rSpecialRequests" id="rSpecialRequests" cols="30" rows="10" placeholder='I want to...'></textarea>
                </label>
            </div>

            <button className="btn-outline text-neutral-400">Submit</button>
        </form>
    )
}

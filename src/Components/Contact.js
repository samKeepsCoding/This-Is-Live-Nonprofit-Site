import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [emailResults, setEmailResults] = useState(null)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hmi82uj", "template_tmyis8t", form.current,"GweWvnZi20ChG0X7k")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset()
    }


  return (
    <>
        <div className='w-full flex justify-center items-center p-4' id='contact'>
            <div className='w-full max-w-4xl flex flex-col md:flex-row justify-center items-start space-y-16 md:space-y-0 space-x-0 md:space-x-9 '>
                <div className='text-center md:text-start flex flex-col md:w-1/2'>
                    <h1 className='text-4xl font-bold'>
                        Join our Email List
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button  className=' ] rounded-md mt-4 py-3 bg-TILGold hover:bg-TILBlack text-white font-bold hover:text-TILGold hover:border ease-linear duration-100'>SUBSCRIBE</button>
                </div>

                <div className='w-full md:w-1/2'>
                    <h1 className='w-full text-center text-4xl font-bold'><span className='text-TILGold'>OR</span>Contact Us</h1>
                    <form 
                        className='flex flex-col text-sm font-bold w-full'
                        id='form'
                        ref={form}
                        onSubmit={sendEmail}
                    
                    >

                        <label for='first_name'>First Name</label>
                        <input 
                            type='text' 
                            name='first_name' 
                            id='first_name' 
                            required 
                            onChange={(e) => setFirstName(e.target.value)} 
                            className='border-2 hover:border-TIGold rounded-sm font-medium px-3 py-2 mt-2 mb-2 focus:ring-0 text-TILBlack'
                        />
                        
                        <label for='last_name'>Last Name</label>
                        <input 
                            type='text' 
                            name='last_name' 
                            id='last_name' 
                            required 
                            onChange={e => setLastName(e.target.value)}
                            className='border-2 hover:border-TIGold rounded-sm font-medium px-3 py-2 mt-2 mb-2 focus:ring-0 text-TILBlack'
                        />

                        <label for='email'>Email Address</label>
                        <input 
                            type='email' 
                            name='user_email' 
                            required 
                            onChange={e => setEmail(e.target.value)}
                            className='border-2 hover:border-TIGold rounded-sm font-medium px-3 py-2 mt-2 mb-2 focus:ring-0 text-TILBlack' 
                        />

                        <label for='phone_number'>Phone Number</label>
                        <input 
                            type='phone_number' 
                            name='phone_number' 
                            required 
                            onChange={e => setPhoneNumber(e.target.value)}
                            className='border-2 hover:border-TIGold rounded-sm font-medium px-3 py-2 mt-2 mb-2 focus:ring-0 text-TILBlack' 
                        />

                        <label>Message:</label>
                        <textarea 
                            name='message' 
                            rows={6} 
                            className='border-2 p-3 hover:border-black mt-2 mb-2 text-TILBlack'
                            onChange={e => setMessage(e.target.value)}
                        />

                        <input 
                            type='submit' 
                            value='Send'
                            className='w-full rounded-md mt-4 py-3 bg-TILGold hover:bg-TILBlack text-white font-bold hover:text-TILGold hover:border ease-linear duration-100'
                        />
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
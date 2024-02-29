import React from 'react';
import Title from './Title';

function Contact() {
    return (
        <div className='flex flex-col mb-10 mx-auto'>
            <div className='flex justify-center items-center'>
                <form 
                    action="https://getform.io/slug"
                    method="POST"
                    className='flex flex-col w-full md:w-3/12'
                >
                    <Title>Contact</Title>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Name"
                        className='p-2 bg-bgPeach border-1 rounded-md
                        focus:outline-none text-textPeach'

                    />
                    <input 
                        type="text" 
                        name="email"
                        placeholder="EMail"
                        className='my-2 p-2 bg-bgPeach  border-1 rounded-md
                        focus:outline-none text-textPeach'

                    />
                    <textarea 
                        name="message" 
                        id="Message"
                        rows="10"
                        className='p-2 mb-4 bg-bgPeach  border-1 
                        rounded-md focus:outline-none max-h-32 text-textPeach'>

                        </textarea>
                
                    <button
                        type="button"
                        className=' self-center text-center inline-block px-8 py-3
                        w-max text-base font-medium rounded-md text-textPeach
                        bg-gradient-to-r from-darkestSage to-bgPeach
                        drop-shadow-md 
                        dark:bg-gradient-to-r dark:from-bgPeach dark:to-darkestSage'>

                        Contact Me
                    </button> 
                
                </form>
            </div>
        </div>
    )
}
//Probably just change contact to link to my linkedin, indeed, or email
export default Contact;
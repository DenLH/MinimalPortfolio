import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className='text-4xl md:text-7xl
            mb-1 md:mb-3 font-bold text-textPeach dark:text-darkestSage'>Dennis</h1>
            <p className='text-base md:text-xl mb-3
            font-medium text-textBrown dark:text-darkestSage'>Web Dev/Tech Enthusiast</p>
            <p className='text-sm max-w-xl mb-6 font-bold text-textBrown dark:text-cool-Sage'>
                    I have dabbled in web development and general programming off and on since 2018, taking different classes, following tutorials, 
                    building my own little projects at home, and doing Udemy and Coursera courses. I’m finally pushing to do a bit more with it and 
                    trying to design a full scale website that will act as a repository for all my projects.
                     <br />
                    I am hoping to be able to continuously grow and learn, especially through the continued upkeep of this project.
            </p>
        </div>
    )
}

export default Intro;
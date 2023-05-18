import React from 'react';

const Gallary = () => {
    return (
        <div>

            <h1 className='text-5xl my-10 text-center font-bold'>Popular Products Gallary</h1>
            <hr className='my-16'/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-serif justify-center">
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
                    <img src="https://i.ibb.co/dGmQLgn/my-img30.jpg" alt="Toy 1" className="rounded-lg shadow-lg" />
                    <p className="mt-2 text-lg font-bold">The Whimsical Woodland Friends</p>
                    <p className="mt-1">Step into an enchanted forest where adorable woodland creatures come to life. This delightful collection of plush toys features cuddly foxes, wise owls, and playful squirrels, each one ready to be your loyal companion on magical adventures.</p>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
                    <img src="https://i.ibb.co/WptGJ0K/my-img29.jpg" alt="Toy 2" className="rounded-lg shadow-lg" />
                    <p className="mt-2 text-lg font-bold">The Dazzling Princess Castle</p>
                    <p className="mt-1">Enter a world of fairytales with this exquisite princess castle toy. Its shimmering towers and delicate details will transport you to a realm of royalty and elegance. Unleash your inner prince or princess and create enchanting stories in this magical castle.</p>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
                    <img src="https://i.ibb.co/s3YLGsL/my-img14.jpg" alt="Toy 3" className="rounded-lg shadow-lg" />
                    <p className="mt-2 text-lg font-bold">The Adventure Seeker's Kit</p>
                    <p className="mt-1">Calling all adventurers! This kit is designed for the brave souls who seek thrilling quests and daring escapades. With a compass, a treasure map, and a trusty explorer's hat, you'll be ready to conquer uncharted territories and unlock hidden treasures.</p>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
                    <img src="https://i.ibb.co/WvGsc0G/my-img27.jpg" alt="Toy 4" className="rounded-lg shadow-lg" />
                    <p className="mt-2 text-lg font-bold">The Magical Music Box</p>
                    <p className="mt-1">Turn the key and let the enchanting melodies transport you to a world of magic and whimsy. This intricately designed music box features delicate ballerinas twirling gracefully to the soothing tunes, creating a mesmerizing spectacle for the eyes and ears.</p>
                </div>
                <div className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
                    <img src="https://i.ibb.co/ncF91MR/my-img26.jpg" alt="Toy 5" className="rounded-lg shadow-lg" />
                    <p className="mt-2 text-lg font-bold">The Racing Champions Set</p>
                    <p className="mt-1">Rev up your engines and get ready for an adrenaline-fueled race! This dynamic racing set includes sleek cars, a winding track, and a cheering crowd. Experience the thrill of victory as you compete against friends or embark on solo racing adventures.</p>
                </div>
            </div>
        </div>
    );
};

export default Gallary;
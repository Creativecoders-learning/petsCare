import React from 'react';

const VetProfile = ({vetName,specialist,text,img}) => {
    return (
        <div className='relative bg-white rounded-2xl'>
            <div className="pt-24 p-10 border  text-center rounded-2xl border-primary space-y-3">
                <h1 className='text-xl '>{vetName} </h1>
                <h2>{specialist} </h2>
                <div>
                    <hr />
                </div>
                <p>{text} </p>
            </div>
            <img src={img} className='absolute -top-20 right-32 md:right-52 lg:right-20 size-40 border-8 border-white rounded-full mx-auto' alt="" />

        </div>
    );
};

export default VetProfile;
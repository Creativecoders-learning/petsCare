import React from 'react';

const VetProfile = ({vetName,specialist,text,img}) => {
    return (
        <div className='relative bg-gray-100 rounded-2xl'>
            <div className="pt-24 p-10 border  text-center rounded-2xl border-primary space-y-3">
                <h1 className='text-xl '>{vetName} </h1>
                <h2>{specialist} </h2>
                <div>
                    <hr />
                </div>
                <p>{text} </p>
            </div>
            <img src={img} className='absolute -top-20 right-20 size-40 border-4 border-gray-100 rounded-full mx-auto' alt="" />

        </div>
    );
};

export default VetProfile;
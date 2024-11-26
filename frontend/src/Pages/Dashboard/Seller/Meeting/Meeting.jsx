import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import UseAuth from '../../../../Hooks/UseAuth';
import AdoptionButton from '../../../../Components/UI/AdoptionButton';

const Meeting = () => {
    const { meeting } = useParams()
    const { user } = UseAuth()
    console.log(meeting)

    const meetingWithUser = async (element) => {

        const appID = 1643693767;
        const serverSecret = "c409f8977178da423fef1ed603968e9b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, meeting, Date.now().toString(), user?.displayName);
        const z = ZegoUIKitPrebuilt.create(kitToken)
        z.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }
    return (
        <>
            <div className='text-center mx-auto my-5'>
               <Link to={'/'}>
               <AdoptionButton btnStyle={'w-44'} text={"return to Home"}></AdoptionButton>
               </Link>
            </div>

            <div style={{ width: '100vw', height: '100vh' }} className='h-full' ref={meetingWithUser}>

                meeting {meeting}
            </div>
        </>

    );
};

export default Meeting;
import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import UseAuth from '../../../../Hooks/UseAuth';

const Meeting = () => {
    const { meeting } = useParams()
    const {user}=UseAuth()
    console.log(meeting)

    const meetingWithUser = async (element) => {

        const appID = 1643693767;
        const serverSecret = "c409f8977178da423fef1ed603968e9b";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret,meeting, Date.now().toString(),user?.displayName);
        const  z = ZegoUIKitPrebuilt.create(kitToken)
        z.joinRoom({
            container: element,
            scenario:{
                mode: ZegoUIKitPrebuilt.OneONoneCall
            }
        })
    }
    return (
        <div className='h-full my-20' ref={meetingWithUser}>
            meeting {meeting}
        </div>
    );
};

export default Meeting;
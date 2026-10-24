'use client'

import { UserdataContext } from "@/Context/Userdata";
import { useContext } from "react";
import { useEffect } from "react";
import { IoIosVideocam, IoMdText } from "react-icons/io";
import { MdOutlineCall } from "react-icons/md";

const Timeline = () => {
    const { data, QuickCheck, setQuickCheck } = useContext(UserdataContext)
    console.log(QuickCheck)

    return (
        //  friendId: id,
        // friendName: name,
        // actionType: type,
        // timestamp: new Date().toLocaleString(),



        <>
            {(QuickCheck.length === 0) ? (
                <div className="flex flex-col items-center justify-center flex-grow py-20 text-center w-full">
                    <p className="text-5xl font-bold mb-4">Timeline</p>
                    <p className="text-gray-500 text-lg font-medium">No information found in the timeline.</p>
                </div>
            ) : (
                <div className="container h-full mx-auto my-5">
                    <div className="flex flex-col gap-y-4 mb-6">
                        <p className="text-5xl font-bold ">Timeline</p>
                        <input type="text" placeholder="    Filter timeline" className="input" />

                    </div>

                    <div className="flex flex-col gap-4">

                        <div className="flex flex-col gap-4">
                            {QuickCheck.map((info, index) => {
                                return (
                                    <div key={index} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4 hover:shadow-md transition">
                                        <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                                            {
                                                info.actionType?.toLowerCase() === 'call'
                                                    ? <MdOutlineCall className="text-emerald-600 text-xl" />
                                                    : info.actionType?.toLowerCase() === 'text'
                                                        ? <IoMdText className="text-blue-600 text-xl" />
                                                        : <IoIosVideocam className="text-purple-600 text-xl" />
                                            }
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-gray-900 capitalize">
                                                {info.actionType} <span className="font-normal text-gray-500">with {info.friendName}</span>
                                            </h3>
                                            <p className="text-xs text-gray-400 font-medium mt-0.5">
                                                {info.timestamp}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            )}



        </>




    );
};

export default Timeline;
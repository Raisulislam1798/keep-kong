'use client'
import { UserdataContext } from "@/Context/Userdata";
import { useContext } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { GoArchive } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { IoMdText } from "react-icons/io";
import { IoIosVideocam } from "react-icons/io";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FrendsId = ({ }) => {

    const params = useParams();
    const frendsid = params.frendsid;

    const { data, setQuickCheck,QuickCheck  } = useContext(UserdataContext)

    const singleFriend = data.find((datas) => String(datas.id) === String(frendsid))

    const { id, picture, name, email, status, days_since_contact, tags, bio, goal, next_due_date } = singleFriend;

   const ClickInfo = (type, id, name) => {
    const newCheckIn = {
        friendId: id,
        friendName: name,
        actionType: type,
        timestamp: new Date().toLocaleString(),
    };

    setQuickCheck((prev) => [newCheckIn, ...(Array.isArray(prev) ? prev : [])]);

    toast.success(`${type} - ${name}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
    });
};


    return (
        <div>
            <div className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    <div className="lg:col-span-4 flex flex-col gap-4">

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <Image
                                src={picture || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
                                alt={name || "Profile"}
                                width={96}
                                height={96}
                                className="w-24 h-24 rounded-full object-cover mb-4 border border-gray-200"
                            />
                            <h2 className="text-xl font-bold text-gray-900 mb-2">{name || "Emma Wilson"}</h2>

                            <div className="flex gap-2 mb-4">
                                <span className={`px-3 py-1 ${status === 'overdue'
                                    ? 'bg-red-200 text-red-700'
                                    : status === 'on-track'
                                        ? 'bg-emerald-200 text-emerald-800'
                                        : 'bg-amber-200 text-amber-500'
                                    } text-xs font-semibold rounded-full uppercase`}>
                                    {status}
                                </span>
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full uppercase">
                                    {tags || "Family"}
                                </span>
                            </div>

                            <p className="text-gray-500 italic text-sm mb-3">
                                {bio || "Former colleague, great mentor"}
                            </p>
                            <p className="text-xs text-gray-400">Preferred: {email}</p>
                        </div>

                        <button className="bg-white py-3 px-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 font-medium text-gray-700 hover:bg-gray-50 transition">
                            <RiNotificationSnoozeLine /> Snooze 2 Weeks
                        </button>
                        <button className="bg-white py-3 px-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 font-medium text-gray-700 hover:bg-gray-50 transition">
                            <GoArchive /> Archive
                        </button>
                        <button className="bg-white py-3 px-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center gap-2 font-medium text-red-600 hover:bg-red-50 transition">
                            <MdDeleteOutline /> Delete
                        </button>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-y-10 gap-x-6">

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <h3 className="text-3xl font-bold text-gray-900 mb-1">{days_since_contact}</h3>
                                <p className="text-xs text-gray-400 font-medium">Days Since Contact</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <h3 className="text-3xl font-bold text-gray-900 mb-1">{goal}</h3>
                                <p className="text-xs text-gray-400 font-medium">Goal (Days)</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{next_due_date}</h3>
                                <p className="text-xs text-gray-400 font-medium">Next Due</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Relationship Goal</h4>
                                <p className="text-sm text-gray-600">Connect every <span className="font-bold text-gray-900">{goal} days</span></p>
                            </div>
                            <button className="px-4 py-1.5 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                                Edit
                            </button>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-gray-900 mb-4">Quick Check-In</h4>

                            <div className="grid grid-cols-3 gap-4">
                                <div onClick={() => ClickInfo("Call", id,name)} className="border border-gray-100 rounded-xl p-4 text-center hover:bg-gray-50 cursor-pointer flex flex-col items-center gap-2 transition">
                                    <span className="text-xl"><MdOutlineCall /></span>
                                    <span className="text-sm font-medium text-gray-700">Call</span>
                                </div>
                                <div onClick={() => ClickInfo("Text", id,name)} className="border border-gray-100 rounded-xl p-4 text-center hover:bg-gray-50 cursor-pointer flex flex-col items-center gap-2 transition">
                                    <span className="text-xl"><IoMdText /></span>
                                    <span className="text-sm font-medium text-gray-700">Text</span>
                                </div>
                                <div onClick={() => ClickInfo("Video", id,name)} className="border  border-gray-100 rounded-xl p-4 text-center hover:bg-gray-50 cursor-pointer flex flex-col items-center gap-2 transition">
                                    <span className="text-xl"><IoIosVideocam /></span>
                                    <span className="text-sm font-medium text-gray-700">Video</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FrendsId;
'use client'
import { UserdataContext } from "@/Context/Userdata";
import { FiPlus } from "react-icons/fi";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {

    const {data} = useContext(UserdataContext)




    return (
        <>
            <div className="mb-8">
                <div className="py-22 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-extrabold text-black text-center pb-6">Friends to keep close in your life</h1>
                    <p className="text-gray-700 text-center">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                        relationships that matter most.
                    </p>

                    <button className="btn text-white bg-green-900 mt-8"> <FiPlus />Add a Friend</button>

                </div>

                <div className="container mx-auto flex justify-center gap-x-5 ">
                    <div className=" flex flex-col justify-center items-center  hover:shadow-lg transition-shadow p-10 border-2 border-gray-200 rounded-2xl shadow-sm w-fit h-fit">
                        <h1 className="text-green-900 text-3xl font-bold   ">{data.length}</h1>
                        <p className="text-gray-600">Total Friends</p>
                    </div>
                    <div className=" flex flex-col justify-center items-center p-10 border-2 border-gray-200 rounded-2xl  hover:shadow-lg transition-shadow shadow-sm w-fit h-fit">
                        <h1 className="text-green-900 text-3xl font-bold  ">3</h1>
                        <p className="text-gray-600">On Track</p>
                    </div>
                    <div className=" flex flex-col justify-center items-center p-10 border-2 border-gray-200 rounded-2xl  hover:shadow-lg transition-shadow shadow-sm w-fit h-fit">
                        <h1 className="text-green-900 text-3xl font-bold  ">6</h1>
                        <p className="text-gray-600">Need Attention</p>
                    </div>
                    <div className=" flex flex-col justify-center items-center p-10 border-2 border-gray-200 rounded-2xl  hover:shadow-lg transition-shadow shadow-sm w-fit h-fit">
                        <h1 className="text-green-900 text-3xl font-bold  ">12</h1>
                        <p className="text-gray-600">Interactions This Month</p>
                    </div>

                </div >
                <div className="container mx-auto mt-5 border-t-2 w-full flex flex-col justify-center items-center border-gray-200 pt-10">

                    <div className="container mx-auto px-4 mb-6">
                        <h2 className="text-2xl font-bold text-gray-900 text-start">Your Friends</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 justify-items-center">
                        {
                            data.map((info) => {
                                const { id, picture, name, email, status, days_since_contact, tags, bio, goal, next_due_date } = info;

                                return (
                                    <>
                                        <Link href={`/Home/${id}`}>
                                            <div
                                                key={id}
                                               className="bg-white px-6 py-6 border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center w-70"
                                            >
                                                <div className="relative w-20 h-20 mb-3">
                                                    <Image
                                                        src={picture}
                                                        width={80}
                                                        height={80}
                                                        alt={name}
                                                        
                                                        className="rounded-full  w-20 h-20"
                                                    />
                                                </div>

                                                <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>

                                                <p className="text-xs text-gray-400 mb-3">{days_since_contact}</p>

                                                <div className="flex gap-1.5 mb-3 flex-wrap justify-center">
                                                    {Array.isArray(tags) ? (
                                                        tags.map((tag, index) => (
                                                            <span key={index} className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full uppercase">
                                                                {tag}
                                                            </span>
                                                        ))
                                                    ) : (
                                                        <span className="px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-full uppercase">
                                                            {tags || "Work"}
                                                        </span>
                                                    )}
                                                </div>

                                                <span className={`px-4 py-1 text-xs font-medium rounded-full ${status === 'overdue'
                                                    ? 'bg-red-500 text-white'
                                                    : status === 'on-track'
                                                        ? 'bg-emerald-800 text-white'
                                                        : 'bg-amber-500 text-white'
                                                    }`}>
                                                    {status}
                                                </span>
                                            </div></Link>
                                    </>
                                );
                            })
                        }
                    </div>
                </div>

            </div>

        </>
    );
};

export default Home;
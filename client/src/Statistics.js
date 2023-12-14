import React, { useEffect, useState } from 'react';
import {FaPeopleGroup} from 'react-icons/fa6';
import {FaUniversity} from 'react-icons/fa';
import {GoCodeOfConduct} from 'react-icons/go';
import {GiTakeMyMoney} from 'react-icons/gi';
import 'react-circular-progressbar/dist/styles.css';

export default function Statistics() {
    const [percentage, setPercentage] = useState(0);
    const [percentageuni, setPercentageuni] = useState(0);
    const [percentagedrives, setPercentagedrives] = useState(0);
    const [percentagedon, setPercentagedon] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentagedon < 2000) {
                setPercentagedon(percentagedon + 1);
            }
            if (percentage < 1000) {
                setPercentage(percentage + 1);
            }
            if (percentageuni < 100) {
                setPercentageuni(percentageuni + 1);
            }
            if (percentagedrives < 500) {
                setPercentagedrives(percentagedrives + 1);
            }
        }, 2);
    }, [percentage,percentagedon,percentagedrives,percentageuni]);

    return (
        <div className='w-[100%]'>
            <div className='mt-3 font-p text-4xl mb-3 xsm:text-xl xsm:!mt-0'>Overall Stats</div>
            <div className='h-56 flex bgimg bg-no-repeat bg-cover xsm:h-36'>
                <div className='w-[25%] text-2xl p-3 mt-3 xsm:!mt-2 xsm:text-sm xsm:!p-1'>
                    <FaPeopleGroup size={90} className='border-2 border-solid border-black m-auto p-2 rounded-full xsm:h-12 xsm:!p-1 xsm:w-12'/>
                    <div className='mt-3 xsm:!mt-1'>Our Members</div>
                        <div style={{ width: 80}} className='m-auto mt-2 font-bold text-3xl xsm:text-xl'>
                            <div value={percentage}>{`${percentage}`} </div>
                        </div>
                </div>

                <div className='w-[25%] text-2xl p-3 mt-3 xsm:!mt-2 xsm:text-sm xsm:!p-1'>
                    <FaUniversity size={90} className='border-2 border-solid border-black m-auto p-2 rounded-full xsm:h-12 xsm:!p-1 xsm:w-12'/>
                    <div className='mt-3 xsm:!mt-1'>University Associations</div>
                        <div style={{ width: 80}} className='m-auto mt-2 font-bold text-3xl xsm:text-xl'>
                            <div value={percentageuni}>{`${percentageuni}`} </div>
                        </div>
                </div>

                <div className='w-[25%] text-2xl p-3 mt-3 xsm:!mt-2 xsm:text-sm xsm:!p-1'>
                    <GiTakeMyMoney size={90} className='border-2 border-solid border-black m-auto p-2 rounded-full xsm:h-12 xsm:!p-1 xsm:w-12'/>
                    <div className='mt-3 xsm:!mt-1'>Donations Received</div>
                        <div style={{ width: 80}} className='m-auto mt-2 font-bold text-3xl xsm:text-xl'>
                            <div value={percentagedon} className="text-center">{`${percentagedon}`} </div>
                        </div>
                </div>

                <div className='w-[25%] text-2xl p-3 mt-3 xsm:!mt-2 xsm:text-sm xsm:!p-1'>
                    <GoCodeOfConduct size={90} className='border-2 border-solid border-black m-auto p-2 rounded-full xsm:h-12 xsm:!p-1 xsm:w-12'/>
                    <div className='mt-3 xsm:!mt-1'>Drives Conducted</div>
                        <div style={{ width: 80}} className='m-auto mt-2 font-bold text-3xl xsm:text-xl'>
                            <div value={percentagedrives}>{`${percentagedrives}`} </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
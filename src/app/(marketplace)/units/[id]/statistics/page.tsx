"use client";

import { useState } from "react";
import StatisticChart1 from "@/components/common/chart/statistic/chart1";
import StatisticChart2 from "@/components/common/chart/statistic/chart2";
import SelectBox from "@/components/common/selectBox";
import { useThemeContext } from "@/lib/context";

const UnitsAllPage = ({ params }: { params: { id: number } }) => {
    const { isMobile } = useThemeContext();

    const commonSelectBoxProps = {
        options: [
            { value: "0", label: "Estimated market value" },
            { value: "1", label: "Estimated market value0" },
            { value: "2", label: "Estimated market value1" },
        ],
        value: { value: "0", label: "Estimated market value" },
        handleOptionClick: () => console.log(1),
        type: "full-white-md",
    };

    return (
        <>
            <div className={`flex ${isMobile ? 'flex-col space-y-4' : 'flex-row space-x-6'}`}>
                <div className="flex-col space-y-3">
                    <SelectBox {...commonSelectBoxProps} />
                    <StatisticChart1 />
                </div>
                {!isMobile && (
                    <div className="h-full w-[60%]">
                        <StatisticChart2 />
                    </div>
                )}
                {isMobile && <StatisticChart2 />}
            </div>
        </>
    );
};

export default UnitsAllPage;

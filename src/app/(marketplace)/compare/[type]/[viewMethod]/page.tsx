"use client"

import { FC, useEffect, useState } from "react";
import UnitsAllCard from "@/components/comparePage/units/all";
import { mockData } from "@/lib/mockData";
import UnitsOverview from "@/components/comparePage/units/overview";
import UnitsStatistics from "@/components/comparePage/units/statistics";
import UnitsMap from "@/components/comparePage/units/all/map";
import UnitsModel from "@/components/comparePage/units/all/3d";
import UnitsFeatures from "@/components/comparePage/units/features";
import UnitsArea from "@/components/comparePage/units/area";

import DevelopersAll from "@/components/comparePage/developers/all";
import ProjectsAll from "@/components/comparePage/projects/all";

type typeType = "units" | "developers" | "projects";
type viewMethod = "all" | "overview" | "statistics" | "features" | "area" | "map" | "3d";

interface Params {
    type: typeType;
    viewMethod: viewMethod;
}

interface PageProps {
    params: Params;
}

const contentMapping: Record<typeType, Record<viewMethod, any>> = {
    units: {
        all: (data: any) => data.map((item: any, index: number) => <UnitsAllCard key={index} index={index + 1} {...item} />),
        overview: (data: any) => data.map((item: any, index: number) => <UnitsOverview key={index} index={index + 1} {...item} />),
        statistics: (data: any) => data.map((item: any, index: number) => <UnitsStatistics key={index} index={index + 1} {...item} />),
        features: (data: any) => data.map((item: any, index: number) => <UnitsFeatures key={index} index={index + 1} {...item} />),
        area: (data: any) => data.map((item: any, index: number) => <UnitsArea key={index} {...item} />),
        map: (data: any) => data.map((item: any, index: number) => <UnitsMap key={index} />),
        "3d": (data: any) => data.map((item: any, index: number) => <UnitsModel key={index} />),
    },
    developers: {
        all: (data: any) => data.map((item: any, index: number) => <DevelopersAll key={index} index={index + 1} {...item} />),
        overview: (data: any) => data.map((item: any, index: number) => <UnitsOverview key={index} {...item} />),
        statistics: (data: any) => data.map((item: any, index: number) => <UnitsStatistics key={index} {...item} />),
        features: (data: any) => data.map((item: any, index: number) => <UnitsFeatures key={index} {...item} />),
        area: (data: any) => data.map((item: any, index: number) => <UnitsArea key={index} {...item} />),
        map: (data: any) => data.map((item: any, index: number) => <UnitsMap key={index} />),
        "3d": (data: any) => data.map((item: any, index: number) => <UnitsModel key={index} />),
    },
    projects: {
        all: (data: any) => data.map((item: any, index: number) => <ProjectsAll key={index} {...item} />),
        overview: (data: any) => data.map((item: any, index: number) => <UnitsOverview key={index} {...item} />),
        statistics: (data: any) => data.map((item: any, index: number) => <UnitsStatistics key={index} {...item} />),
        features: (data: any) => data.map((item: any, index: number) => <UnitsFeatures key={index} {...item} />),
        area: (data: any) => data.map((item: any, index: number) => <UnitsArea key={index} {...item} />),
        map: (data: any) => data.map((item: any, index: number) => <UnitsMap key={index} />),
        "3d": (data: any) => data.map((item: any, index: number) => <UnitsModel key={index} />),
    },
};


const ComparePage: FC<PageProps> = ({ params }) => {
    const [mobileState, setMobileState] = useState<boolean>();

    useEffect(() => {
        const handleResize = () => setMobileState(window.innerWidth < 1170);

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const renderPCContent = () => {
        const content = contentMapping[params.type]?.[params.viewMethod];
        const data = mockData[params.type]?.[params.viewMethod];
        return <div className="flex flex-row justify-center w-full space-x-8">
            {typeof content === "function" ? content(data) : content}
        </div>
    };
    const renderMobileContent = () => {
        const content = contentMapping[params.type]?.[params.viewMethod];
        const data = mockData[params.type]?.[params.viewMethod].slice(0, 1);
        return <div className="flex flex-row justify-center w-full space-x-1">
            {typeof content === "function" ? content(data) : content}
        </div>
    };

    return (
        <div>
            {mobileState ? renderMobileContent() : renderPCContent()}
        </div>
    );
};

export default ComparePage;

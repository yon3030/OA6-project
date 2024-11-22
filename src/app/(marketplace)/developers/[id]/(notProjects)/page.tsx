"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { useThemeContext } from "@/lib/context";

interface Property {
    title: string;
    description: string;
}

const properties: Property[] = [
    { title: '10+', description: 'Complete' },
    { title: '8', description: 'In process' },
    { title: '$$$', description: 'Foundation' },
    { title: '2019', description: 'In process' },
];

const description = "Welcome to this stunning property featuring a cozy fireplace, complemented by a soothing natural color  throughout. With its  layout and other flexible living spaces, this home offers endless possibilities for customization to suit your unique lifestyle. The primary bathroom is a retreat of its own, with a separate tub and shower, double sinks for added convenience, and ample under sink storage for all your essentials."

interface Props {
    params: {
        id: number;
    };
}

const DevelpersPCPage = ({ params }: Props) => {
    const { isMobile } = useThemeContext();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (isMobile)
            router.push("./mobile/list");
    }, [isMobile]);

    return (
        <div className="flex flex-col items-start w-full space-y-5">
            <div className="flex flex-row items-center justify-between w-full space-x-3">
                {properties.map((item, index) => (
                    <div className="flex flex-col justify-center items-start w-full h-[80px] pl-[14px] rounded-[20px] bg-primary-default" key={index}>
                        <h1 className="text-white text-[30px]">
                            {item.title}
                        </h1>
                        <p className="text-primary-light text-[12px]">
                            {item.description}
                        </p>
                    </div>
                ))}

                <Link href={`${pathname}/map`} className="w-full h-[80px]">
                    <div className="w-full h-full rounded-[20px] flex flex-row items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/imgs/developerMap/explore_map.png)' }}>
                        <Image src="/svgs/drop.svg" width={22.44} height={22.44} alt="Explore Map" className="w-[22.44px] h-[22.44px]" />
                        <h1 className="text-white text-[12px] pl-1">
                            Explorer Map
                        </h1>
                    </div>
                </Link>

            </div>
            <div className="text-white text-[14px] leading-5 w-full">
                {description}
            </div>
        </div >
    );
};

export default DevelpersPCPage;

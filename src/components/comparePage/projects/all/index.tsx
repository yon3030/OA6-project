import Image from "next/image"
import ProjectsAllProps from "./type"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import RowComponent from "../../units/area/row"

const rowItems = [
    { title: '15', description: 'Units', size: 1 },
    { title: '32', description: 'Floors', size: 1 },
    { title: '$1600', description: 'Avrg price / sqft', size: 2 },
];

const rowItems1 = [
    { title: '2020', description: 'Announce', size: 2 },
    { title: '2023', description: 'Complete', size: 2 },
];

const ProjectsAll: React.FC<ProjectsAllProps> = ({ ...props }) => {
    return (
        <div className="flex-grow px-4 py-6 relative bg-primary-default gradient-border gradient-default-border gradient-border-rounded-16px rounded-[16px] overflow-hidden space-y-3 w-full  ">
            <div className="flex flex-row justify-start items-center space-x-2">
                <ArrowBackIosNewIcon className="text-24 text-white" />
                <div>
                    <h1 className="text-white text-[24px] font-sans">Project name</h1>
                    <h2 className="text-white text-opacity-40 text-[12px] font-sans -mt-2">{props.apartmentCnt} Apartment</h2>
                </div>
            </div>

            <RowComponent items={rowItems} />
            <RowComponent items={rowItems1} />

            <div className="w-full gradient-mask">
                <Image
                    src={"/imgs/categories/projects/1/all/1.png"}
                    alt="png"
                    layout="responsive"
                    width={500}
                    height={300}
                    className="w-full h-auto"
                />
            </div>
        </div>

    )
}

export default ProjectsAll

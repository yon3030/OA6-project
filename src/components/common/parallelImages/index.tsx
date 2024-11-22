import Image from "next/image";
import { ParallelImagesProps } from "./parallelImages";
import './index.css'

const ParallelImages: React.FC<ParallelImagesProps> = ({ className, leftImgUrl, rightImgUrl, isMobile }) => {
  return (
    <div className={`${className} flex overflow-hidden ${!isMobile ? "space-x-10" : "space-x-4"}`} >
      <div className="w-full">
        <div className={`skewed-rect-left w-[calc(100%+50px)] -ms-[50px] ${!isMobile ? " h-[250px] rounded-tr-[50px] rounded-br-[50px]" : "h-[118px] -ms-10 rounded-tr-[30px] rounded-br-[30px]"}  `}
          style={{
            backgroundImage: `url(${leftImgUrl})`,
            backgroundSize: "100% 100%", // Set the desired width and height
            backgroundPosition: '100% 50%', // Adjust based on which part of the image you want to show
            backgroundRepeat: 'no-repeat', // Ensure the image does not repeat
          }}
        >
        </div>
      </div >
      <div className="w-full">
        <div className={`right-rectangle w-[calc(100%+50px)] ${!isMobile ? "h-[250px] rounded-tl-[50px] rounded-bl-[50px]" : "h-[118px] rounded-tl-[30px] rounded-bl-[30px]"}  overflow-hidden`}
          style={{
            backgroundImage: `url(${rightImgUrl})`,
            backgroundSize: '100% 200%', // Set the desired width and height
            backgroundPosition: '50% 60%', // Adjust based on which part of the image you want to show
            backgroundRepeat: 'no-repeat', // Ensure the image does not repeat
          }}
        >
        </div>
      </div>
    </div>
  );
}

export default ParallelImages


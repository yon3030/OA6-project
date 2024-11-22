import React from "react";
import Video from "@/components/common/video";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface MediaSliderProps {
  mediaFiles: MediaItem[];
}

const MediaSlider = React.forwardRef<HTMLDivElement, MediaSliderProps>(
  ({ mediaFiles }, ref) => {
    return (
      <div ref={ref} className="relative flex w-full h-full">
        {mediaFiles.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <div className="relative w-full h-full overflow-hidden rounded-[30px]">
              {item.type === 'image' ? (
              <img src={item.src} alt="gallery" className="object-cover w-full h-full" />
            ) : (
              <Video src={item.src} />
            )}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

export default MediaSlider;

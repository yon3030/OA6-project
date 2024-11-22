import Image from "next/image";

const ServiceSectionCardContainer = `relative w-[261px] h-[325px] md:w-[300px] md:h-[387px] flex flex-col bg-primary-default gradient-border gradient-default-border gradient-border-rounded-30px  px-4 mt-5 pt-8 md:pt-10 md:mb-5 border-2 border-transparent hover:border-[#20D795] hover:border-2 active:shadow-[0_0_6px_6px_#20D795] mx-1 lg:mx-2 xl:mx-4 2xl:mx-8`;
const captionStyle = `font-semibold font-sans italic text-2xl text-[#00d69f] py-2`;
const descriptionStyle = `font-montserrat font-light text-white`;
interface ServiceSectionCardProps {
   imageUrl: string;
   alt: string;
   caption: string;
   description: string[];
}

const ServiceSectionCard = ({ imageUrl, alt, caption, description }: ServiceSectionCardProps) => {
   return (
      <div className={ServiceSectionCardContainer}>
         <Image src={imageUrl} alt={alt} width={100} height={100} className="w-[230px] h-[160px] md:w-[267px] md:h-[208px]"/>
         <h3 className={captionStyle}>{caption}</h3>
         {description.map((desc, index) => (
            <p key={index} className={descriptionStyle}>{desc}</p>
         ))}
      </div>
   )
}

export default ServiceSectionCard;
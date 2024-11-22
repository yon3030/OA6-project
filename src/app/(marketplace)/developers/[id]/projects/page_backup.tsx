// "use client"
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Button from '@/components/common/button';
// import CloseIcon from '@mui/icons-material/Close';

// import ProjectsUnits from '@/components/developersPage/projects/projectsUnits';
// import DevProUnitsCatBar from "@/components/developersPage/projects/DevProUnitsCatbar"
// import Card from "@/components/common/card";
// import { mockData } from "@/lib/mockData";
// interface DevelopersProjectsLayoutProps {
//   children: React.ReactNode;
//   params: {
//     id: number;
//   };
// }

// const DevelopersProjectsPage = ({ children, params }: DevelopersProjectsLayoutProps) => {
//   const router = useRouter();
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
//   const handleSelect = (value: string) => {
//     setSelectedCategories((prev) => {
//         if (prev.includes(value)) {
//             return prev.filter((category) => category !== value); // Remove if already selected
//         } else {
//             return [...prev, value]; // Add if not selected
//         }
//     });
// };
//   const goBack = () => {
//     router.back();
//   };
//   return (
//     <>
//       <div className="w-full pb-4 px-7">
//         <div className="flex flex-row items-center justify-between pb-[10px]">
//         <DevProUnitsCatBar selectedCategories={selectedCategories} onSelect={handleSelect} />
//           <div className="flex flex-row space-x-3">
//             <Button
//               handleClick={goBack}
//               prefix={<CloseIcon />}
//               border={{ color: "transparent", width: 0 }}
//               className="h-[30px] w-[30px] bg-white items-center justify-center z-10"
//             >
//             </Button>
//           </div>
//         </div>

//         <div className="w-full h-[500px] overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-green p-3">
//           <div className="grid grid-cols-3 gap-3">
//             {/* <Projects cardInfo={cardInfo} imgWidth={225} imgHeight={130} cardWidth="w-[242px]" cardHeight="h-[270px]" fontSize={24} desSize={14} /> */}
//             <ProjectsUnits projectsUnits={mockData.developers.projectsUnits} imgWidth={255} imgHeight={134} cardWidth="w-[270px]" cardHeight="h-[270px]" fontSize={24} desSize={14} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DevelopersProjectsPage;
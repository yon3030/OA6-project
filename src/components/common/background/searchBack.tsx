"use Client"

interface BackgroundProps {
    children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => (
    <div className="relative flex flex-col justify-center items-center h-screen bg-cover bg-center py-10 slide-in-from-bottom" style={{ backgroundImage: "url('/imgs/search/search_back.png')" }}>
        {children}
    </div>
);

export default Background;

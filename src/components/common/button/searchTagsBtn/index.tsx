import "./index.css";

interface CustomButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean; // new prop to indicate if the button is active
}

const SearchTagBtn: React.FC<CustomButtonProps> = ({ children, onClick, isActive }) => {
  return (
      <button className={`search-tag-btn ${isActive ? 'active' : ''}`} onClick={onClick}>
        {children}
      </button>
  );
};

export default SearchTagBtn;

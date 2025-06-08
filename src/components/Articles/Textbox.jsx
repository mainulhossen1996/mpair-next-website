const TextBox = ({ text }) => {
    return (
      <div className="flex items-center justify-center w-50 h-15 bg-blue-100 text-blue-700 rounded-lg ">
        <p className="text-[14px] font-normal px-2 py-1">{text}</p>
      </div>
    );
  };
  
  export default TextBox; 
  
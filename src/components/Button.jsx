const Button = ({ label, onClick, className = '' , ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;

type ButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  buttonStyle: 'primary' | 'primary-lg' | 'secondary';
  onClick?: () => void;
};

export default function Button({
  text,
  type,
  buttonStyle,
  onClick,
}: ButtonProps) {
  if (buttonStyle === 'primary') {
    return (
      <button
        className="px-3 py-1 bg-orange-500 border-[1.5px] border-orange-500 hover:border-orange-600 hover:bg-orange-600 text-white rounded transition-colors text-base"
        type={type}
        onClick={onClick}>
        {text}
      </button>
    );
  }

  if (buttonStyle === 'primary-lg') {
    return (
      <button
        className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-8 rounded transition-colors text-base"
        type={type}
        onClick={onClick}>
        {text}
      </button>
    );
  }

  if (buttonStyle === 'secondary') {
    return (
      <button
        className="text-sm py-1 px-3 border-[1.5px] border-stone-700 rounded hover:bg-stone-300 transition-colors"
        type={type}
        onClick={onClick}>
        {text}
      </button>
    );
  }

  return <></>;
}

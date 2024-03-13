const Button = ({
  label,
  iconURl,
  backgroundColor,
  borderColor,
  textColor,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4  border rounded-full font-montserrat text-lg leading-none border-coral-red${
        backgroundColor
          ? ` ${textColor} ${backgroundColor} ${borderColor} `
          : ' bg-coral-red  text-white border-coral-red'
      }`}
    >
      {label}
      {iconURl && (
        <img
          src={iconURl}
          alt="arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  )
}

export default Button

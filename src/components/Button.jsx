const Button = ({ label, iconURl }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 bg-coral-red rounded-full border font-montserrat text-lg leading-none text-white border-coral-red">
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
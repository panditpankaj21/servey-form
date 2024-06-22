

const LabelValueDisplay = ({ 
    label, 
    value = "",
}) => {
  return (
    <div className={`flex justify-start items-center   p-4  shadow-md`}>
      <label className="mt-1 text-xl font-semibold text-gray-900">{label}</label>
      <p className="text-xl ml-5">{value}</p>
    </div>
  );
};

export default LabelValueDisplay;

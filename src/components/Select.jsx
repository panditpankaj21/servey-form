

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function Select({
    label,
    onChange,
    options,
    name
}){
    return(
        <div className="mb-2">
            <label htmlFor={name} className="text-xs mb-1 font-semibold block">{label}</label>
            <select
                id={name}
                name={name}
                defaultValue="select"
                onChange={onChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 border-[1.5px]  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
                <option value="select" disabled>Select</option>
                {
                    options.map(option => <option key ={option} value={option}>{capitalizeFirstLetter(option)}</option>)
                }
            </select>
        </div>
    )
}

export default Select
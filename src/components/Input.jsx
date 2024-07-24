export const Input = ({ label }) => {
    return (
        <label className="input input-bordered flex items-center gap-2">
            {label}
            <input type="text" className="grow" placeholder="Daisy" />
        </label>
    )
}
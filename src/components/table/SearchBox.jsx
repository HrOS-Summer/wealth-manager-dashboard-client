export default function SearchBox({ value, onChange, placeholder = "Search by symbol or name..." }) {
return (
<input
value={value}
onChange={(e) => onChange(e.target.value)}
placeholder={placeholder}
className="w-full md:w-80 rounded border px-3 py-2 text-sm"
/>
);
}
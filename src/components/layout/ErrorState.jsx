export default function ErrorState({ message, onRetry }) {
return (
<div className="p-6 text-center">
<div className="text-red-600 font-medium mb-2">Something went wrong</div>
<div className="text-neutral-600 mb-4">{message}</div>
{onRetry && (
<button onClick={onRetry} className="px-3 py-1.5 rounded bg-neutral-900 text-white text-sm">
Retry
</button>
)}
</div>
);
}
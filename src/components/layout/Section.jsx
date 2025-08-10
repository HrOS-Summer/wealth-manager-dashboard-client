export default function Section({ title, subtitle, right, children }) {
return (
    <section className="mb-6">
        <div className="flex items-end justify-between mb-3">
            <div>
                <h2 className="text-lg font-semibold">{title}</h2>
                {subtitle && <p className="text-sm text-neutral-500">{subtitle}</p>}
            </div>
            {right}
        </div>
        <div className="bg-white rounded-lg border shadow-sm p-4">
            {children}
        </div>
    </section>
    );
    }
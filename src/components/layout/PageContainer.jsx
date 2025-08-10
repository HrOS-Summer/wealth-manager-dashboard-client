export default function PageContainer({ children }) {
return (

    <div className="min-h-screen bg-neutral-50"> 
        <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b"> 
            <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between"> 
                <h1 className="text-xl font-semibold">
                    WealthManager Dashboard
                </h1>
                <div className="text-sm text-neutral-500">
                    MERN - Interactive - Responsive
                </div> 
            </div> 
        </header> 
        <main className="mx-auto max-w-7xl px-4 py-6">{children}</main> 
    </div>
    );
}
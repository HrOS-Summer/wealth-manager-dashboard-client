export const formatCurrency = (n) =>
    n?.toLocaleString("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 2 });

export const formatNumber = (n) => n?.toLocaleString("en-IN");

export const pct = (n) => (n == null ? "-" : `${n.toFixed(2)}%`);

export const gainColor = (n) => (n >= 0 ? "text-green-600" : "text-red-600");
export const gainBg = (n) => (n >= 0 ? "bg-green-50" : "bg-red-50");
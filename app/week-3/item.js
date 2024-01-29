
export default function Item({ name, quantity, category }) {
    return (
      <div className="mb-4 p-4 border bg-cyan-900  max-w-md">
      <p className="text-lg font-semibold divide-y divide-slate-300">{name}</p>
      <p className="text-slate-300">Buy {quantity} in {category}</p>
    </div>
    );
  };

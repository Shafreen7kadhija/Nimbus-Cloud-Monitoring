type StatusFilterProps = {
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

function StatusFilter({
  status,
  setStatus,
}: StatusFilterProps) {
  return (
    <select
      value={status}
      onChange={(e) => setStatus(e.target.value)}
      className="bg-[#151c2d] border border-slate-800 rounded-xl px-4 py-3 text-white"
    >
      <option>All Statuses</option>
      <option>Online</option>
      <option>Offline</option>
      <option>Maintenance</option>
      <option>Degraded</option>
    </select>
  );
}

export default StatusFilter;
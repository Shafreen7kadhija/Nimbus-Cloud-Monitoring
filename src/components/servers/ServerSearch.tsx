type ServerSearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

function ServerSearch({
  search,
  setSearch,
}: ServerSearchProps) {
  return (
    <input
      type="text"
      placeholder="Search by name or hostname..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        flex-1
        bg-[#151c2d]
        border
        border-slate-800
        rounded-xl
        px-4
        py-3
        text-white
        placeholder:text-slate-500
        outline-none
        focus:border-blue-500
      "
    />
  );
}

export default ServerSearch;
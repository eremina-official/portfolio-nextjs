interface YearRangeButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

function YearRangeButton({ label, isSelected, onClick }: YearRangeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-2
        font-semibold
        text-sm
        rounded-lg
        border-2
        cursor-pointer
        shadow-lg
        transition-all
        duration-300
        ease-in-out
        ${
          isSelected
            ? "bg-emerald-500 text-white border-emerald-500 scale-105 shadow-emerald-500/30"
            : "bg-gray-100 text-gray-700 border-gray-300 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-xl"
        }
      `}
    >
      {label}
    </button>
  );
}

export default YearRangeButton;

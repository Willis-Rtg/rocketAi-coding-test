interface TableCardProps {
  color: string;
  title: string;
  char: string;
  text: string;
  colorReverse?: boolean;
  borderColor?: string;
}

export default function ({
  color,
  title,
  char,
  text,
  colorReverse = false,
  borderColor = "transparent",
}: TableCardProps) {
  return (
    <div
      className={`flex flex-col justify-center items-center rounded-2xl w-[55.45px] h-[55.45px] border-[1px]`}
      style={{ backgroundColor: color, borderColor }}
    >
      <span
        className="text-[7.6px] font-normal"
        style={{ color: colorReverse ? "#000" : "#FFF" }}
      >
        {title}
      </span>
      <h2
        className="text-[25.11px] font-normal leading-none"
        style={{ color: colorReverse ? "#000" : "#FFF" }}
      >
        {char}
      </h2>
      <span
        className="text-[8.37px] font-normal"
        style={{ color: colorReverse ? "#000" : "#FFF" }}
      >
        {text}
      </span>
    </div>
  );
}

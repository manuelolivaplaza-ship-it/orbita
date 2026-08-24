type Props = {
  value: string;
  onChange: (value: string) => void;
};

/** Campo invisible para bots. No usar display:none: muchos bots lo ignoran. */
export function HoneypotField({ value, onChange }: Props) {
  return (
    <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-0 w-0 overflow-hidden">
      <label>
        Sitio web
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  );
}

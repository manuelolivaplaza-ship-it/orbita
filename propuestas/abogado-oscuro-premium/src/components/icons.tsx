export function PhoneIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.6 3.8c.4-.8 1.4-1.1 2.2-.7l2 1.1c.7.4 1 1.3.7 2.1l-.8 2.2a1.6 1.6 0 0 0 .4 1.6l2.8 2.8c.4.4 1.1.5 1.6.4l2.2-.8c.8-.3 1.7 0 2.1.7l1.1 2c.4.8.1 1.8-.7 2.2l-1.7.8c-2.4 1.2-5.8.3-9.4-3.3S3.6 9.3 4.8 6.9l.8-1.7Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

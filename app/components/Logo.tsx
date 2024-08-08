export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 50"
      width="300"
      height="50"
    >
      <g transform="translate(20, 25) scale(1.5)">
        <ellipse
          cx="0"
          cy="0"
          rx="7.5"
          ry="15"
          fill="none"
          stroke="#115e59"
          strokeWidth="2"
        />
        <ellipse
          cx="0"
          cy="0"
          rx="15"
          ry="7.5"
          fill="none"
          stroke="#115e59"
          strokeWidth="2"
          transform="rotate(45)"
        />
        <circle cx="0" cy="0" r="3" fill="#115e59" />
      </g>

      <text
        x="45"
        y="45"
        fontFamily="Gill Sans, monospace"
        fontSize="48"
        fill="#95a5a6"
      >
        Wizard-GPT
      </text>
    </svg>
  );
}

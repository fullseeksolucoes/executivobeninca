import { InView } from './InView';

/* Drawing data, in car coordinates (the car sits inside translate(200 42)). */
const SHAPES = {
  sedan: {
    body: 'M700 262 L712 248 Q718 236 714 222 L706 206 Q700 196 684 192 L540 170 Q500 132 470 118 Q400 104 330 108 Q280 112 250 140 L215 160 Q160 160 120 168 Q100 172 98 190 L100 228 Q102 248 118 256 L180 258 A50 50 0 0 1 280 258 L530 258 A50 50 0 0 1 630 258 Z',
    windows: 'M262 166 Q286 128 335 120 Q400 114 462 126 Q492 140 518 168 Z',
    pillar: { x: 384, y: 116, w: 10, h: 54 },
    strip: 'M120 196 Q400 186 700 204',
  },
  suv: {
    body: 'M700 262 L712 248 Q718 236 714 220 L708 200 Q702 188 686 184 L580 170 Q548 124 524 102 Q506 92 470 92 L196 94 Q164 96 146 112 L114 152 Q100 162 98 180 L100 228 Q102 248 118 256 L180 258 A50 50 0 0 1 280 258 L530 258 A50 50 0 0 1 630 258 Z',
    windows: 'M160 162 L184 118 Q192 106 208 106 L496 106 Q514 108 526 120 L562 166 Z',
    pillar: { x: 356, y: 106, w: 10, h: 58 },
    strip: 'M118 198 Q400 190 700 206',
  },
};

const WHEELS = [
  { cx: 230, cy: 250 },
  { cx: 580, cy: 250 },
];

const HEADLIGHT = 'M690 200 Q704 204 710 214 L688 214 Z';
const TAILLIGHT = 'M100 182 L118 181 L116 194 L100 196 Z';
const GOLD = '#D6B25E';

function Wheel({ cx, cy, spin }: { cx: number; cy: number; spin: boolean }) {
  const spokes = Array.from({ length: 5 }, (_, k) => {
    const a = ((-90 + k * 72) * Math.PI) / 180;
    return { x: +(cx + Math.cos(a) * 25).toFixed(2), y: +(cy + Math.sin(a) * 25).toFixed(2) };
  });
  return (
    <g>
      <circle cx={cx} cy={cy} r={40} fill="#0D0D0D" stroke={GOLD} strokeWidth={2} pathLength={1} className="car-draw car-draw-late" />
      <g className={spin ? 'wheel-spin loop' : undefined}>
        <circle cx={cx} cy={cy} r={26} fill="none" stroke={GOLD} strokeWidth={1.5} pathLength={1} className="car-draw car-draw-late" />
        {spokes.map((p, i) => (
          <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={GOLD} strokeWidth={1.5} strokeLinecap="round" />
        ))}
        <circle cx={cx} cy={cy} r={5} fill={GOLD} />
      </g>
    </g>
  );
}

function Car({ shape, animated }: { shape: keyof typeof SHAPES; animated: boolean }) {
  const s = SHAPES[shape];
  return (
    <>
      <ellipse cx={405} cy={292} rx={300} ry={9} fill="#000" opacity={0.7} />

      <g className="car-fill">
        <path d={s.body} fill="#171716" />
        <path d={s.windows} fill="#232A2E" />
        <rect x={s.pillar.x} y={s.pillar.y} width={s.pillar.w} height={s.pillar.h} fill="#171716" />
        <path d={s.strip} fill="none" stroke={GOLD} strokeWidth={2.5} strokeLinecap="round" />
      </g>

      <path d={s.body} fill="none" stroke={GOLD} strokeWidth={2} strokeLinejoin="round" pathLength={1} className="car-draw" />
      <path d={s.windows} fill="none" stroke={GOLD} strokeWidth={1.5} strokeLinejoin="round" pathLength={1} className="car-draw car-draw-late" />
      <rect
        x={s.pillar.x}
        y={s.pillar.y}
        width={s.pillar.w}
        height={s.pillar.h}
        fill="none"
        stroke={GOLD}
        strokeWidth={1.5}
        pathLength={1}
        className="car-draw car-draw-late"
      />

      {WHEELS.map((w) => (
        <Wheel key={w.cx} cx={w.cx} cy={w.cy} spin={animated} />
      ))}

      <path d={HEADLIGHT} fill="#F3DFA8" className="car-light" />
      <path d={TAILLIGHT} fill="#C2452F" className="car-light" />
    </>
  );
}

/* Skyline: two identical 1200px tiles, drawn as one path each to keep the DOM small. */
function buildSkyline() {
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  let buildings = '';
  let windows = '';
  let x = 0;
  while (x < 1200) {
    const w = Math.round(44 + rand() * 50);
    const h = Math.round(60 + rand() * 120);
    const top = 332 - h;
    buildings += `M${x} 332V${top}h${w}V332z`;
    for (let wy = top + 14; wy < 318; wy += 20) {
      for (let wx = x + 9; wx < x + w - 10; wx += 14) {
        if (rand() > 0.82) windows += `M${wx} ${wy}h5v7h-5z`;
      }
    }
    x += w + Math.round(4 + rand() * 10);
  }
  return { buildings, windows };
}
const SKYLINE = buildSkyline();

function Skyline() {
  return (
    <g className="skyline loop">
      {[0, 1200].map((dx) => (
        <g key={dx} transform={`translate(${dx} 0)`}>
          <path d={SKYLINE.buildings} fill="#101010" stroke="#1C1C1C" strokeWidth={1} />
          <path d={SKYLINE.windows} fill={GOLD} opacity={0.45} />
        </g>
      ))}
    </g>
  );
}

const LANES = Array.from({ length: 10 }, (_, i) => i * 140);

/** Hero animation. Decorative: the wrapper carries the description. */
export function CarLineArt({ label }: { label: string }) {
  return (
    <InView className="car-stage car-anim" pausedClass="is-paused" role="img" aria-label={label}>
      <svg viewBox="0 0 1200 430" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#F3DFA8" stopOpacity={0.55} />
            <stop offset="1" stopColor="#F3DFA8" stopOpacity={0} />
          </linearGradient>
        </defs>

        <Skyline />

        <rect x={0} y={332} width={1200} height={98} fill="#0E0E0E" />
        <line x1={0} y1={332.5} x2={1200} y2={332.5} stroke="#2A2A2A" />
        <path className="wave-a" d="M0 352 C 200 340, 400 364, 600 352 S 1000 340, 1200 352" fill="none" stroke={GOLD} strokeOpacity={0.45} strokeWidth={1.2} />
        <path className="wave-b" d="M0 362 C 240 370, 480 354, 720 362 S 1080 370, 1200 362" fill="none" stroke="#3A3A3A" strokeWidth={1.2} />
        <g className="lane-dashes loop">
          {LANES.map((x) => (
            <rect key={x} x={x} y={378} width={60} height={4} fill="#3A3A3A" />
          ))}
        </g>

        <g transform="translate(200 42)">
          <polygon points="712,212 1000,160 1000,292" fill="url(#beam)" className="car-light" />
          <g>
            {[190, 214, 238].map((y) => (
              <line key={y} className="car-streak loop" x1={-60} y1={y} x2={70} y2={y} stroke={GOLD} strokeOpacity={0.6} strokeWidth={1.5} strokeLinecap="round" />
            ))}
          </g>
          <Car shape="sedan" animated />
        </g>
      </svg>
    </InView>
  );
}

/** Static drawing used as a photo placeholder in the fleet cards. */
export function CarSketch({ shape }: { shape: keyof typeof SHAPES }) {
  return (
    <svg viewBox="70 70 680 240" className="h-auto w-full" aria-hidden="true" focusable="false">
      <Car shape={shape} animated={false} />
    </svg>
  );
}

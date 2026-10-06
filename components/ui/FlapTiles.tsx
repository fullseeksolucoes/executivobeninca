const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const SPINS = 7;

/** Deterministic "random" letters, so server and client render the same thing. */
function spinLetters(final: string, seed: number): string[] {
  let x = seed * 9301 + 49297;
  const letters: string[] = [];
  for (let i = 0; i < SPINS; i++) {
    x = (x * 9301 + 49297) % 233280;
    letters.push(ALPHABET[x % ALPHABET.length]);
  }
  letters.push(final);
  return letters;
}

interface Props {
  code: string;
  /** Spoken label, e.g. "CWB, Aeroporto de Curitiba". */
  label: string;
  /** Row index, used to stagger the animation across a list. */
  row?: number;
}

/**
 * Airport-board letters. Must be inside an <InView armedClass="flap-armed">
 * to animate; otherwise (and with reduced motion) it shows the final code.
 */
export function FlapTiles({ code, label, row = 0 }: Props) {
  return (
    <span className="flap" role="img" aria-label={label}>
      {code.split('').map((char, i) => {
        const letters = spinLetters(char, code.charCodeAt(0) + i * 7 + row * 13);
        return (
          <span
            key={i}
            className="flap-tile"
            aria-hidden="true"
            style={{ '--n': letters.length - 1, '--i': i, '--row': row } as React.CSSProperties}
          >
            <span className="flap-strip">
              {letters.map((l, j) => (
                <span key={j}>{l}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}

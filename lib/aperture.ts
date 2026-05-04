/**
 * Generates aperture SVG paths server-side — no JS needed at runtime.
 * Matches the drawAperture() spec exactly.
 */
export function getAperturePaths(
  size: number,
  color: string,
  bgColor: string = '#F7F6F2'
): string {
  const c = size / 2;
  const R = size * 0.46;
  const innerR = size * 0.14;
  const count = 6;
  let html = '';

  for (let i = 0; i < count; i++) {
    const a1 = (i / count) * Math.PI * 2 - Math.PI / 2;
    const a2 = ((i + 1) / count) * Math.PI * 2 - Math.PI / 2;
    const offset = (Math.PI / count) * 0.7;

    const px: [number, number][] = [
      [c + Math.cos(a1 + offset) * innerR, c + Math.sin(a1 + offset) * innerR],
      [c + Math.cos(a1) * R,               c + Math.sin(a1) * R],
      [c + Math.cos(a2) * R,               c + Math.sin(a2) * R],
      [c + Math.cos(a2 + offset) * innerR, c + Math.sin(a2 + offset) * innerR],
    ];

    html += `<path d="M ${px[0][0].toFixed(2)} ${px[0][1].toFixed(2)} L ${px[1][0].toFixed(2)} ${px[1][1].toFixed(2)} L ${px[2][0].toFixed(2)} ${px[2][1].toFixed(2)} L ${px[3][0].toFixed(2)} ${px[3][1].toFixed(2)} Z" fill="${color}"/>`;
  }

  html += `<circle cx="${c}" cy="${c}" r="${(innerR * 0.55).toFixed(2)}" fill="${bgColor}"/>`;
  return html;
}

interface ApertureProps {
  size: number;
  color: string;
  bgColor?: string;
  className?: string;
}

export function Aperture({ size, color, bgColor, className }: ApertureProps) {
  const paths = getAperturePaths(size, color, bgColor);
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: paths }}
    />
  );
}

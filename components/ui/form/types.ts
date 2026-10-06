/** "line": underlined, inside the quote sentence. "box": framed field in regular forms. */
export type FieldVariant = 'line' | 'box';

export interface FieldOption {
  value: string;
  label: string;
}

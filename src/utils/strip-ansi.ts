export const ANSI_REGEX = /\x1B\[[0-9;]*m/g;

export function stripAnsi(s: string) {
  return s.replace(ANSI_REGEX, "");
}

/**
 * Simple class name utility for conditionally joining CSS class strings.
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}

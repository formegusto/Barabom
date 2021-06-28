export default function createActions(action: string): string[] {
  return [`${action}`, `${action}/success`, `${action}/failure`];
}

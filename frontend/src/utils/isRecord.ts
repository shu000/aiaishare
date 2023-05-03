export const isRecord = (x: unknown): x is Record<string, unknown> => x != null && typeof x === 'object';

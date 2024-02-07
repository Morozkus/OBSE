export const limitText = (value: string, start: number, end: number) => {
  return value.length > end ? value.slice(start, end) + '...' : value
}
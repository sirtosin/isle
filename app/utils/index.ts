export const addThousandSeparator = (
  integer: string | number,
  separator?: string
): string =>
  integer
    ?.toString()
    ?.replace(/(\d)(?=(?:\d{3})+\b)/gm, `$1${separator ?? ','}`)

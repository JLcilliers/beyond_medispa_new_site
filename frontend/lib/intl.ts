export interface HighlightParts {
  leading: string
  highlight: string
}

/**
 * Splits a translation string into leading and highlight parts using the `|` delimiter.
 * If no delimiter is present the full string is returned as the leading portion.
 */
export function splitHighlight(text: string): HighlightParts {
  if (!text) {
    return { leading: '', highlight: '' }
  }

  const parts = text.split('|')

  if (parts.length === 1) {
    return { leading: text, highlight: '' }
  }

  const highlight = parts.pop() ?? ''
  const leading = parts.join('')

  return { leading, highlight }
}

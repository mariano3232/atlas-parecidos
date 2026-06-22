import { useCallback, useState } from 'react'

export function useImageConnection(maxSelections = 2) {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const toggleSelection = useCallback(
    (id: string) => {
      setSelectedIds((current) => {
        if (current.includes(id)) {
          return current.filter((item) => item !== id)
        }
        if (current.length >= maxSelections) {
          return [current[1], id]
        }
        return [...current, id]
      })
    },
    [maxSelections],
  )

  const clearSelection = useCallback(() => setSelectedIds([]), [])

  return { selectedIds, toggleSelection, clearSelection }
}

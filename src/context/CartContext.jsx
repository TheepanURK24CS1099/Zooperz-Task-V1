import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)
const STORAGE_KEY = 'showcase-cart-v1'

function readStoredCart() {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      // localStorage may be unavailable (private mode, etc.) — cart still works in-memory.
    }
  }, [items])

  const addToCart = useCallback((product) => {
    const { id, title, price, priceValue, currency, imageLabel, brand } = product
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id)
      if (existing) {
        return prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item))
      }
      return [...prev, { id, title, price, priceValue, currency, imageLabel, brand, qty: 1 }]
    })
  }, [])

  const removeFromCart = useCallback((id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }, [])

  const updateQty = useCallback((id, qty) => {
    setItems((prev) => {
      if (qty <= 0) return prev.filter((item) => item.id !== id)
      return prev.map((item) => (item.id === id ? { ...item, qty } : item))
    })
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const itemCount = useMemo(() => items.reduce((sum, item) => sum + item.qty, 0), [items])

  const currencyTotals = useMemo(() => {
    const totals = {}
    for (const item of items) {
      const key = item.currency || '$'
      totals[key] = (totals[key] || 0) + item.priceValue * item.qty
    }
    return totals
  }, [items])

  const value = useMemo(
    () => ({ items, addToCart, removeFromCart, updateQty, clearCart, itemCount, currencyTotals }),
    [items, addToCart, removeFromCart, updateQty, clearCart, itemCount, currencyTotals],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}

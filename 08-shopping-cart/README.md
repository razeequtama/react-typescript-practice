# 8. Shopping Cart

Now introduce **Context**.

Components:

```
App
 ├── ProductList
 │    └── ProductCard
 └── Cart
      └── CartItem
```

You shouldn't have to pass:

```
cart
setCart
addItem
removeItem
...
```

through five levels of props.

Use:

```tsx
createContext()
useContext()
```

### TypeScript

You'll learn to properly type:

```tsx
type CartContext = {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (id: string) => void;
};
```

**Goal:** Understand when state belongs globally.

# Versions
There are no current version.

# What I learned

# Result
There are no current result.
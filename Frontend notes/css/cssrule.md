When you move from standard CSS to **React CSS** (specifically when using inline styles or `style` props in JSX), there are several syntax and format changes you need to make.

Here’s a complete list of **key updates** when switching from traditional CSS to React-style inline CSS:

---

### ✅ 1. **CamelCase Instead of Kebab-Case**

CSS uses kebab-case:

```css
background-color: red;
```

React uses camelCase for inline styles:

```jsx
style={{ backgroundColor: 'red' }}
```

---

### ✅ 2. **Style Values Must Be Strings or Numbers**

In CSS:

```css
margin: 10px;
```

In React:

```jsx
style={{ margin: '10px' }}
```

If a value is unitless and numeric (like `opacity` or `zIndex`), you can omit the quotes:

```jsx
style={{ zIndex: 5, opacity: 0.8 }}
```

---

### ✅ 3. **Objects Instead of CSS Rules**

React inline styles are written as objects:

```jsx
<div style={{
  padding: '20px',
  border: '1px solid black',
  backgroundColor: 'lightblue'
}}>
  Hello
</div>
```

---

### ✅ 4. **No Pseudo-Selectors or Media Queries**

Inline styles in React **do not support**:

* `:hover`, `:focus`, etc.
* `@media` queries

To handle these, you should:

* Use **CSS Modules**, **Styled Components**, or **external stylesheets**
* Or add logic in React like `onMouseEnter` / `onMouseLeave` for hover effects.

---

### ✅ 5. **Use JavaScript Variables**

You can dynamically apply styles using variables:

```jsx
const isActive = true;

<div style={{ color: isActive ? 'green' : 'gray' }}>
  Status
</div>
```

---

### ✅ 6. **No Class Selectors – Use `className` Instead**

In JSX, use `className` instead of `class`:

```jsx
<div className="my-class"></div>
```

If you’re still using external or SCSS files, just switch `class` → `className`.

---

### ✅ Summary Table

| CSS Syntax         | React (Inline Style) Equivalent              |
| ------------------ | -------------------------------------------- |
| `background-color` | `backgroundColor`                            |
| `font-size`        | `fontSize`                                   |
| `margin: 10px`     | `margin: '10px'`                             |
| `z-index: 5`       | `zIndex: 5`                                  |
| `:hover`           | ❌ Not supported (use `onMouseEnter` instead) |
| `class`            | `className`                                  |
| `@media`           | ❌ Not supported                              |

---

Would you like a quick side-by-side example converting full CSS to inline React style?


Absolutely! Here's a complete and organized **CSS specificity and precedence list**, including **selector types, CSS sources, and their priorities** — from weakest to strongest:

---

## ✅ 1. **CSS Selector Specificity (Low ➡ High)**

| Rank | Selector Type                                | Specificity Value | Example                  |
| ---- | -------------------------------------------- | ----------------- | ------------------------ |
| 1️⃣  | Universal selector                           | `0,0,0,0`         | `*`                      |
| 2️⃣  | Element / Tag selector                       | `0,0,0,1`         | `div`, `h1`, `p`         |
| 3️⃣  | Pseudo-elements                              | `0,0,0,1`         | `::before`, `::after`    |
| 4️⃣  | Class selector                               | `0,0,1,0`         | `.box`, `.active`        |
| 5️⃣  | Attribute selector                           | `0,0,1,0`         | `[type="text"]`          |
| 6️⃣  | Pseudo-classes                               | `0,0,1,0`         | `:hover`, `:nth-child()` |
| 7️⃣  | ID selector                                  | `0,1,0,0`         | `#header`, `#main`       |
| 8️⃣  | Inline style                                 | `1,0,0,0`         | `style="..."`            |
| 🔝   | `!important` (not specificity, but forceful) | Overrides all     | `color: red !important`  |

---

## ✅ 2. **CSS Source Precedence Order**

| Rank | Source Type                | Priority         | Example                                    |
| ---- | -------------------------- | ---------------- | ------------------------------------------ |
| 1️⃣  | External styles (imported) | Lowest           | `@import "theme.css"`                      |
| 2️⃣  | External stylesheet        | Slightly higher  | `<link rel="stylesheet" href="style.css">` |
| 3️⃣  | Internal `<style>` tag     | Higher           | `<style>...</style>` in HTML `<head>`      |
| 4️⃣  | Inline style attribute     | High             | `<div style="color: red;">`                |
| 🔝   | `!important` rule          | Highest override | `color: red !important;`                   |

---

## ✅ 3. **Combined Priority: Source + Selector**

| Priority Order (Strongest at bottom)                |
| --------------------------------------------------- |
| Universal selector (`*`)                            |
| Element selector (`div`, `p`, etc.)                 |
| Class / Attribute / Pseudo-class (`.box`, `:hover`) |
| ID selector (`#main`)                               |
| Inline style (`style="..."`)                        |
| `!important` (overrides everything unless tied)     |

---

## 🧠 Bonus: Specificity Examples

| Selector                  | Specificity (a,b,c,d) |
| ------------------------- | --------------------- |
| `*`                       | `0,0,0,0`             |
| `div`                     | `0,0,0,1`             |
| `.box`                    | `0,0,1,0`             |
| `#main`                   | `0,1,0,0`             |
| `style="color: red;"`     | `1,0,0,0`             |
| `p#main.box.active:hover` | `0,1,3,1`             |
| `color: red !important`   | Overrides everything  |

---

Let me know if you'd like a **printable cheat sheet** or a **PDF** version of this table — I can generate one for you!

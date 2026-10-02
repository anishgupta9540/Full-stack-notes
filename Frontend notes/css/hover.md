Here is a comprehensive list of **pseudo-classes** and **pseudo-elements** in CSS as of 2025:

---

## 🟢 **Pseudo-Classes (`:pseudo-class`)**

Pseudo-classes select elements based on their state or position in the DOM.

### 🔹 **User Action Pseudo-Classes**

| Pseudo-Class     | Description                                        |
| ---------------- | -------------------------------------------------- |
| `:hover`         | When the user hovers over an element               |
| `:active`        | When an element is being activated (e.g., clicked) |
| `:focus`         | When an element gains focus                        |
| `:focus-visible` | Focused element with visible indicator             |
| `:focus-within`  | When element or its child has focus                |

### 🔹 **Structural Pseudo-Classes**

| Pseudo-Class           | Description                                  |
| ---------------------- | -------------------------------------------- |
| `:first-child`         | First child of its parent                    |
| `:last-child`          | Last child of its parent                     |
| `:nth-child(n)`        | nth child (e.g., `:nth-child(2)`)            |
| `:nth-last-child(n)`   | nth child from the end                       |
| `:only-child`          | Only child of its parent                     |
| `:nth-of-type(n)`      | nth of its type (e.g., `div:nth-of-type(2)`) |
| `:nth-last-of-type(n)` | nth of its type from the end                 |
| `:first-of-type`       | First of its type among siblings             |
| `:last-of-type`        | Last of its type among siblings              |
| `:only-of-type`        | Only one of its type among siblings          |
| `:empty`               | Element has no children (including text)     |

### 🔹 **Form-Related Pseudo-Classes**

| Pseudo-Class         | Description                               |
| -------------------- | ----------------------------------------- |
| `:enabled`           | Selects enabled form elements             |
| `:disabled`          | Selects disabled form elements            |
| `:checked`           | Checked checkbox/radio                    |
| `:indeterminate`     | Checkbox state is indeterminate           |
| `:default`           | Default form element (like default radio) |
| `:valid`             | Input is valid                            |
| `:invalid`           | Input is invalid                          |
| `:in-range`          | Input value in range                      |
| `:out-of-range`      | Input value out of range                  |
| `:required`          | Field marked as required                  |
| `:optional`          | Field not marked as required              |
| `:read-only`         | Element is read-only                      |
| `:read-write`        | Element is editable                       |
| `:placeholder-shown` | Input shows placeholder                   |

### 🔹 **Other Useful Pseudo-Classes**

| Pseudo-Class       | Description                                               |                        |
| ------------------ | --------------------------------------------------------- | ---------------------- |
| `:root`            | Selects the root element (`<html>`)                       |                        |
| `:not(selector)`   | Excludes elements matching selector                       |                        |
| `:is(selector)`    | Matches if element is any of the selectors                |                        |
| `:where(selector)` | Same as `:is()` but with 0 specificity                    |                        |
| `:has(selector)`   | Matches if element contains selector (**new & powerful**) |                        |
| `:lang(language)`  | Matches language (e.g., `:lang(en)`)                      |                        |
| \`:dir(ltr         | rtl)\`                                                    | Matches text direction |
| `:target`          | Matches element with matching `id` in URL                 |                        |

---

## 🟣 **Pseudo-Elements (`::pseudo-element`)**

Pseudo-elements style parts of elements.

| Pseudo-Element           | Description                                       |
| ------------------------ | ------------------------------------------------- |
| `::before`               | Insert content before element                     |
| `::after`                | Insert content after element                      |
| `::first-letter`         | Style first letter of element                     |
| `::first-line`           | Style first line of element                       |
| `::selection`            | Style text selected by user                       |
| `::placeholder`          | Style placeholder text                            |
| `::marker`               | Style list item markers (`<li>`)                  |
| `::file-selector-button` | Style file upload button in `<input type="file">` |

---

## ✅ Example:

```css
/* Pseudo-class */
input:focus {
  border: 2px solid blue;
}

/* Pseudo-element */
p::first-line {
  font-weight: bold;
}
```

---

Let me know if you want a **visual chart**, **browser support table**, or **practice examples**!

## `async` and `defer` in JavaScript (simple explanation)

When you include JavaScript using the `<script>` tag, **`async`** and **`defer`** control **how and when** the script is downloaded and executed relative to HTML parsing.

---

## 🔹 Normal `<script>`

```html
<script src="app.js"></script>
```

* Browser **stops HTML parsing**
* Downloads the script
* Executes it
* Then continues parsing HTML
  ❌ This can slow page loading

---

## 🔹 `async`

```html
<script src="app.js" async></script>
```

![Image](https://www.growingwiththeweb.com/images/2014/02/26/async-vs-defer-twitter.png?utm_source=chatgpt.com)

![Image](https://www.keycdn.com/img/support/prefer-async-script-loading.png?utm_source=chatgpt.com)

![Image](https://www.corewebvitals.io/static/img/s/defer-vs-async-vs-sync-script-timelines.png?utm_source=chatgpt.com)

### How it works

* Script downloads **in parallel** with HTML parsing
* Executes **as soon as it finishes downloading**
* HTML parsing **pauses during execution**

### Key points

✔ Faster loading
❌ Execution order is **not guaranteed**
❌ Not good if script depends on DOM or another script

### Best use case

* Independent scripts
* Analytics, ads, tracking scripts

---

## 🔹 `defer`

```html
<script src="app.js" defer></script>
```

![Image](https://www.growingwiththeweb.com/images/2014/02/26/async-vs-defer-twitter.png?utm_source=chatgpt.com)

![Image](https://cdn.hashnode.com/res/hashnode/image/upload/v1628778723488/4u3BlRkTl.jpeg?utm_source=chatgpt.com)

![Image](https://www.corewebvitals.io/static/img/s/defer-vs-async-vs-sync-script-timelines.png?utm_source=chatgpt.com)

### How it works

* Script downloads **in parallel**
* Executes **after HTML parsing is complete**
* Executes **in order**

### Key points

✔ DOM is fully ready
✔ Execution order preserved
✔ Best for main JS files

### Best use case

* Scripts that interact with DOM
* Multiple dependent scripts

---

## 🔹 `async` vs `defer` (Quick Comparison)

| Feature          | async                      | defer              |
| ---------------- | -------------------------- | ------------------ |
| HTML parsing     | Continues                  | Continues          |
| Script execution | Immediately after download | After HTML parsing |
| Execution order  | ❌ Not guaranteed           | ✔ Guaranteed       |
| DOM ready        | ❌ Maybe not                | ✔ Yes              |
| Best for         | Analytics, ads             | Main app logic     |

---

## 🔹 Example

```html
<!-- Best practice -->
<script src="main.js" defer></script>

<!-- Analytics -->
<script src="analytics.js" async></script>
```

---

## 🔹 Easy rule to remember 🧠

* **Use `defer`** → When your JS uses HTML elements
* **Use `async`** → When your JS is independent

If you want, I can also explain this with a **real-life analogy**, **interview answer**, or **live code demo** 😊

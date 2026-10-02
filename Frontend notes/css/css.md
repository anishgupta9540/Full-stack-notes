position
center div 5 ways 
dipslay
animation 
css unit (absolute and relative)
opacity ranges => 0 to 1
grid
flexbox
what is margine and padding 
pseudo element and pseudo class
float 
new feature in css
display none and display hidden
-------------------------------------------------------------
diff between em and rem unit
em
1em = current element’s computed font-size (which may be inherited).
It's relative to the parent’s font size.
If nested deeply, em can cause compounding (each level multiplies font size if em is reused).

rem
1rem = root element’s font size (usually <html>).
It is consistent regardless of nesting.
| Feature       | `em`                             | `rem`                           |
| ------------- | -------------------------------- | ------------------------------- |
| Relative to   | Nearest parent’s font size       | Root (`html`) font size         |
| Inheritance   | Affected by nesting              | Not affected by nesting         |
| Use case      | Buttons, spacing inside elements | Global sizing, headings, layout |
| Can compound? | Yes                              | No                              |
------------------------------------------------------------- 
all selctor 
media query
-------------------------------------------------------------
audio
<audio controls>
  <source src="audiofile.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
-------------------------------------------------------------
video
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
-------------------------------------------------------------
iframe
<iframe src="https://www.example.com" width="800" height="400">
  Your browser does not support iframes.
</iframe>
-------------------------------------------------------------
precedent order inline tag class import css //good question

important>inline>internal>external
-------------------------------------------------------------
image fit to box how you can achive

object-fit  => fill,contain,cover,none,scale-down
selector {
  object-fit: value;
}
-------------------------------------------------------------
boxsizing 

by default box-sizing: content-box
//border-box
-------------------------------------------------------------
Format:
margin: value; (all sides)
margin: value1 value2; (top/bottom, left/right)
margin: value1 value2 value3; (top, left/right, bottom)
margin: value1 value2 value3 value4; (top, right, bottom, left)
-------------------------------------------------------------
CSS3 introduced **major new features and modules** that expanded the capabilities of CSS significantly compared to CSS2. Here's a breakdown of the most important and commonly used additions in CSS3:

---

## 🌟 **Major New Features in CSS3**

### 1. 🎨 **Selectors Enhancements**

* **Attribute selectors**: `[type="text"]`, `[href^="https"]`, `[class$="btn"]`
* **Pseudo-classes**: `:nth-child()`, `:last-child`, `:not()`, `:checked`, etc.
* **Pseudo-elements**: `::before`, `::after`

---

### 2. 🧱 **Box Model Improvements**

* **Box-sizing**: `box-sizing: border-box;`
* **Outline-offset**: Adds space between outline and element border.

---

### 3. 💠 **Borders and Backgrounds**

* **Border-radius**: Rounded corners → `border-radius: 10px;`
* **Multiple backgrounds**: `background-image: url(...), url(...);`
* **Background-size**: Resize backgrounds → `cover`, `contain`
* **Border-image**: Use images for borders.

---

### 4. 🌈 **Colors and Transparency**

* **RGBA** and **HSLA** color values → `rgba(255, 0, 0, 0.5)`
* **Opacity**: Set transparency → `opacity: 0.7;`

---

### 5. 🎬 **Transitions and Animations**

* **Transitions**: Smooth property changes → `transition: all 0.3s ease;`
* **Animations**: Keyframe animations → `@keyframes slide { ... }`
* **Transformations**: `rotate()`, `scale()`, `translate()`, `skew()`

---

### 6. 📐 **2D and 3D Transforms**

* 2D: `transform: rotate(45deg);`
* 3D: `transform: rotateY(180deg);`, `perspective`, `transform-style`

---

### 7. 🖼️ **Flexbox Layout**

* A powerful layout model for one-dimensional layouts.
* Example:

  ```css
  display: flex;
  justify-content: space-between;
  align-items: center;
  ```

---

### 8. 🎯 **Media Queries (Responsive Design)**

* Enables responsive design based on screen size.

  ```css
  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }
  ```

---

### 9. 🧩 **Custom Fonts with `@font-face`**

* Load custom fonts:

  ```css
  @font-face {
    font-family: 'MyFont';
    src: url('myfont.woff');
  }
  ```

---

### 10. 🧬 **Grid Layout** *(technically CSS3+ / CSS4 module)*

> Not in original CSS3 spec but built on its modular system.

* For two-dimensional layouts.
* Example:

  ```css
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  ```

---

## 🧩 CSS3 Modularization

CSS3 is split into **modules**, each developed independently. Some of the key modules:

* Selectors Module
* Backgrounds and Borders
* Text Effects
* Media Queries
* Transforms
* Transitions
* Animations
* Flexbox
* Grid (newer but part of same modular architecture)

---

Would you like examples or a mini-project using these CSS3 features?
-----------------------------------------------------------------------------------------------------------
| Tag        | Purpose                         | Media Type | Controls | Can Embed External Sites? |
| ---------- | ------------------------------- | ---------- | -------- | ------------------------- |
| `<audio>`  | Embed audio/sound files         | Audio      | ✅ Yes    | ❌ No                      |
| `<video>`  | Embed video files               | Video      | ✅ Yes    | ❌ No                      |
| `<iframe>` | Embed another webpage (or site) | Any (HTML) | ❌ No     | ✅ Yes                     |

-----------------------------------------------------------------------------------------------------------

| Pseudo-Class     | Description                           | Example                                        |
| ---------------- | ------------------------------------- | ---------------------------------------------- |
| `:hover`         | When mouse pointer is over an element | `a:hover { color: red; }`                      |
| `:focus`         | When element has keyboard focus       | `input:focus { outline: none; }`               |
| `:active`        | While element is being activated      | `button:active { opacity: 0.5; }`              |
| `:visited`       | Links already visited                 | `a:visited { color: purple; }`                 |
| `:first-child`   | First child of parent                 | `p:first-child { font-weight: bold; }`         |
| `:last-child`    | Last child of parent                  | `li:last-child { color: green; }`              |
| `:nth-child(n)`  | nth child of parent                   | `tr:nth-child(odd) { background: #eee; }`      |
| `:checked`       | Checked radio/checkbox                | `input:checked + label { font-weight: bold; }` |
| `:disabled`      | Disabled form elements                | `input:disabled { background: #ccc; }`         |
| `:not(selector)` | Selects elements that don't match     | `div:not(.active) { opacity: 0.5; }`           |

-----------------------------------------------------------------------------------------------------------

| Feature         | HTML                     | React                      |
| --------------- | ------------------------ | -------------------------- |
| Syntax          | `style="color: red;"`    | `style={{ color: 'red' }}` |
| Value format    | String                   | JavaScript object          |
| Property format | kebab-case (`font-size`) | camelCase (`fontSize`)     |
-----------------------------------------------------------------------------------------------------------

| Feature                           | `inline`                       | `inline-block`               | `block`                         |
| --------------------------------- | ------------------------------ | ---------------------------- | ------------------------------- |
| **Starts on a new line**          | ❌ No                           | ❌ No                         | ✅ Yes                           |
| **Width and height controllable** | ❌ No                           | ✅ Yes                        | ✅ Yes                           |
| **Margins/padding respected**     | ➖ Horizontal only              | ✅ Yes                        | ✅ Yes                           |
| **Content flow**                  | Flows within text              | Flows within text            | Takes full width                |
| **Can contain block elements**    | ❌ No                           | ❌ No                         | ✅ Yes                           |
| **Takes full width by default**   | ❌ No (fits content)            | ❌ No (fits content)          | ✅ Yes                           |
| **Use case**                      | Text elements (`<span>`, etc.) | Buttons, images, form fields | Divisions, sections, containers |


| Value      | In Flow? | Keeps Space? | Moves with `top/left`? | Sticks on Scroll?      |
| ---------- | -------- | ------------ | ---------------------- | ---------------------- |
| `static`   | ✅ Yes    | ✅ Yes        | ❌ No                   | ❌ No                   |
| `relative` | ✅ Yes    | ✅ Yes        | ✅ Yes                  | ❌ No                   |
| `absolute` | ❌ No     | ❌ No         | ✅ Yes                  | ❌ No                   |
| `fixed`    | ❌ No     | ❌ No         | ✅ Yes                  | ✅ Yes (to viewport)    |
| `sticky`   | ✅ Yes    | ✅ Yes        | ✅ Yes                  | ✅ Yes (when scrolling) |

Here's a **tabular column** that explains **CSS pseudo-elements** with key details:

| **Pseudo-element**       | **Syntax**                                 | **Description**                                                        | **Common Use Cases**                                  |
| ------------------------ | ------------------------------------------ | ---------------------------------------------------------------------- | ----------------------------------------------------- |
| `::before`               | `selector::before`                         | Inserts content **before** an element's actual content.                | Add icons, decorative content before text.            |
| `::after`                | `selector::after`                          | Inserts content **after** an element's actual content.                 | Add quotes, symbols, or clear floats.                 |
| `::first-letter`         | `selector::first-letter`                   | Styles the **first letter** of a block-level element.                  | Drop caps, emphasize the first letter in a paragraph. |
| `::first-line`           | `selector::first-line`                     | Styles the **first line** of a block-level element.                    | Style intro text differently (e.g., bold or larger).  |
| `::selection`            | `selector::selection`                      | Styles the portion of an element that is **selected** by the user.     | Change text/background color on selection.            |
| `::marker`               | `li::marker`                               | Styles the **bullet or number** in lists (`<ul>`, `<ol>`).             | Custom list item markers.                             |
| `::placeholder`          | `input::placeholder`                       | Styles the **placeholder text** in form inputs.                        | Custom font, color, or size for placeholders.         |
| `::backdrop`             | `::backdrop`                               | Styles the **background layer** behind elements in fullscreen mode.    | Customize modal/video backgrounds.                    |
| `::cue`                  | `::cue`                                    | Styles **WebVTT** text tracks (captions/subtitles) in HTML5 `<video>`. | Style video captions with color, font, etc.           |
| `::file-selector-button` | `input[type="file"]::file-selector-button` | Styles the button in file input controls.                              | Custom design for file upload buttons.                |

> ✅ Note: Double colons (`::`) are the current standard (CSS3+), but some older browsers may still support single colons (`:`) for `:before`, `:after`, etc.

Would you like an example code snippet for each of these?
----------------------------------------------------------------------------------------------------------------
selector

| **Selector Type**    | **Syntax Example**   | **What it Selects**                         |
| -------------------- | -------------------- | ------------------------------------------- |
| **Universal**        | `*`                  | All elements                                |
| **Type (Element)**   | `p`                  | All `<p>` tags                              |
| **Class**            | `.card`              | Elements with `class="card"`                |
| **ID**               | `#header`            | Element with `id="header"`                  |
| **Attribute**        | `input[type="text"]` | `<input>` elements with `type="text"`       |
| **Group**            | `h1, h2, p`          | All `<h1>`, `<h2>`, and `<p>` elements      |
| **Descendant**       | `div p`              | All `<p>` inside a `<div>` (any level deep) |
| **Child**            | `ul > li`            | Direct `<li>` children of a `<ul>`          |
| **Adjacent Sibling** | `h1 + p`             | First `<p>` immediately after an `<h1>`     |
| **General Sibling**  | `h1 ~ p`             | All `<p>` after an `<h1>` (same parent)     |
| **Pseudo-class**     | `a:hover`            | `<a>` when hovered                          |
| **Pseudo-element**   | `p::first-line`      | First line of a `<p>`                       |

----------------------------------------------------------------------------------------------------------------
css unit

| **Category**          | **Unit** | **Description**                                          |
| --------------------- | -------- | -------------------------------------------------------- |
| 🟩 **Absolute Units** |          | Fixed size, not affected by user settings or screen size |
|                       | `px`     | Pixels (most commonly used unit)                         |
|                       | `cm`     | Centimeters                                              |
|                       | `mm`     | Millimeters                                              |
|                       | `in`     | Inches (1in = 96px)                                      |
|                       | `pt`     | Points (1pt = 1/72 inch)                                 |
|                       | `pc`     | Picas (1pc = 12pt)                                       |
|                       | `Q`      | Quarter-millimeters (1Q = 1/40 cm)                       |

| 🟨 **Relative Units** |       | Scales relative to other values like font size, parent size, or viewport |
| --------------------- | ----- | ------------------------------------------------------------------------ |
|                       | `em`  | Relative to the **font-size of the element**                             |
|                       | `rem` | Relative to the **root element's font-size** (`html`)                    |
|                       | `%`   | Relative to **parent** element’s value (width, height, etc.)             |
|                       | `ex`  | Height of the lowercase `x` in the current font                          |
|                       | `ch`  | Width of the `0` (zero) character in the font                            |
|                       | `lh`  | Relative to the **line height** of the element                           |
|                       | `rlh` | Relative to the **line height of the root** element                      |

| 🟦 **Viewport Units** |             | Relative to the **size of the browser window (viewport)** |
| --------------------- | ----------- | --------------------------------------------------------- |
|                       | `vw`        | 1% of viewport **width**                                  |
|                       | `vh`        | 1% of viewport **height**                                 |
|                       | `vmin`      | 1% of the **smaller** of `vw` or `vh`                     |
|                       | `vmax`      | 1% of the **larger** of `vw` or `vh`                      |
|                       | `svw`/`svh` | Small viewport width/height (for mobile UI safe areas)    |
|                       | `lvw`/`lvh` | Large viewport width/height                               |
|                       | `dvw`/`dvh` | Dynamic viewport width/height                             |

| 🟧 **Time Units** |      | Used for animations and transitions |
| ----------------- | ---- | ----------------------------------- |
|                   | `s`  | Seconds                             |
|                   | `ms` | Milliseconds                        |

| 🟥 **Angle Units** |        | Used for rotation, gradients, etc. |
| ------------------ | ------ | ---------------------------------- |
|                    | `deg`  | Degrees (0° to 360°)               |
|                    | `rad`  | Radians                            |
|                    | `grad` | Gradians                           |
|                    | `turn` | Turns (1 turn = 360 degrees)       |

----------------------------------------------------------------------------------------------------------------


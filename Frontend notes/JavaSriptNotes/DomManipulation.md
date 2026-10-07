
DOM(Document Object Model) manipulation in JavaScript allows you to ** interact with and change ** the structure, style, and content of a web page ** dynamically **.It is one of the core parts of working with JavaScript in the browser.

---

## 🧠 What is the DOM ?

* The DOM represents the HTML of your page as a ** tree structure ** of objects.
* Each HTML element becomes a ** node ** in this tree.
* JavaScript can access and modify these nodes.

---

## 🔧 Common DOM Manipulation Tasks in JavaScript

### 1. ** Accessing Elements **

#### 📌 By ID:

```javascript
const heading = document.getElementById("main-title");
```

#### 📌 By Class:

```javascript
const items = document.getElementsByClassName("item");
```

#### 📌 By Tag:

```javascript
const paragraphs = document.getElementsByTagName("p");
```

#### 📌 Using CSS Selectors:

```javascript
const firstItem = document.querySelector(".item");      // First match
const allItems = document.querySelectorAll(".item");    // All matches
```

---

### 2. ** Changing Content **

#### 🔄 `textContent`, `innerHTML`, `innerText`:

```html
<p id="demo">Hello</p>
```

    ```javascript
document.getElementById("demo").textContent = "Hi there!";      // Changes text only
document.getElementById("demo").innerHTML = "<b>Bold text</b>"; // Parses HTML
```

---

### 3. ** Changing Styles **

    ```javascript
const box = document.getElementById("box");
box.style.backgroundColor = "blue";
box.style.fontSize = "20px";
```

---

### 4. ** Adding / Removing Classes **

    ```javascript
box.classList.add("highlight");
box.classList.remove("highlight");
box.classList.toggle("highlight"); // Adds if not present, removes if present
```

---

### 5. ** Creating and Inserting Elements **

    ```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "I'm a new div!";
document.body.appendChild(newDiv);
```

Insert before a certain element:

```javascript
const container = document.getElementById("container");
const newP = document.createElement("p");
newP.textContent = "Inserted before!";
container.insertBefore(newP, container.firstChild);
```

---

### 6. ** Removing Elements **

    ```javascript
const item = document.getElementById("remove-me");
item.remove();
```

Or:

```javascript
item.parentNode.removeChild(item);
```

---

### 7. ** Handling Events **

    ```html
<button id="clickMe">Click Me</button>
```

        ```javascript
const btn = document.getElementById("clickMe");
btn.addEventListener("click", function () {
  alert("Button clicked!");
});
```

---

### 8. ** Reading and Changing Attributes **

    ```html
<img id="myImg" src="image.jpg" alt="Image">
```

        ```javascript
const img = document.getElementById("myImg");
img.getAttribute("src"); // "image.jpg"
img.setAttribute("alt", "New description");
```

---

### ✅ Full Example

    ```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight { color: red; font-weight: bold; }
  </style>
</head>
<body>

<h1 id="main-title">Hello DOM</h1>
<button id="changeBtn">Change Text</button>

<ul id="list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
</ul>

<script>
  const title = document.getElementById("main-title");
  const button = document.getElementById("changeBtn");

  button.addEventListener("click", () => {
    title.textContent = "DOM Changed!";
    title.classList.toggle("highlight");

    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    document.getElementById("list").appendChild(newItem);
  });
</script>

</body>
</html>
```

---

## 🏁 Summary

    | Task | Method / Property |
| -------------------- | --------------------------------------- |
| Select element | `getElementById`, `querySelector` |
| Read / Change content | `textContent`, `innerHTML`, `innerText` |
| Modify style | `.style.property` |
| Add / Remove class     | `.classList.add/remove/toggle` |
| Create element | `document.createElement()` |
| Insert element | `appendChild()`, `insertBefore()` |
| Remove element | `element.remove()` |
| Handle events | `addEventListener()` |
| Work with attributes | `getAttribute()`, `setAttribute()` |

---

Would you like me to create an interactive DOM manipulation playground or quiz to practice ?
-----------------------------------------------------------------------------------------------------------
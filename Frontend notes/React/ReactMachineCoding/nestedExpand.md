
import React, { useState } from 'react';

// Sample nested data
const data = [
  {
    id: 1,
    title: 'Parent 1',
    children: [
      { id: 11, title: 'Child 1-1' },
      { id: 12, title: 'Child 1-2' },
    ],
  },
  {
    id: 2,
    title: 'Parent 2',
    children: [
      {
        id: 21,
        title: 'Child 2-1',
        children: [
          {
            id: 211,
            title: 'Grandchild 2-1-1',
            children: [
              { id: 11, title: 'Child 1-1' },
              { id: 12, title: 'Child 1-2' },
            ],
          },
        ],
      },
    ],
  },
];

// Recursive expandable item component
const ExpandableItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div style={{ marginLeft: '20px', marginTop: '5px' }}>
      <div
        onClick={() => hasChildren && setIsOpen(!isOpen)}
        style={{
          cursor: hasChildren ? 'pointer' : 'default',
          fontWeight: 'bold',
        }}
      >
        {hasChildren ? (isOpen ? '▼ ' : '▶ ') : '• '} {item.title}
      </div>

      {isOpen &&
        hasChildren &&
        item.children.map((child) => (
          <ExpandableItem key={child.id} item={child} />
        ))}
    </div>
  );
};

// Main component rendering all top-level items
const NestedExpand = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Nested Expandable List</h2>
      {data.map((item) => (
        <ExpandableItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default NestedExpand;
---------------------------------------------------------------------------------------


To create a nested expandable (accordion-style) component in ReactJS for the provided data structure, we can use a recursive component to handle the nested children. Below is a complete example using React, with Tailwind CSS for styling (you can replace it with your preferred styling method).

### Solution

This example creates a `NestedExpand` component that renders the data hierarchically, allowing each item with children to be expanded or collapsed. Each item is clickable to toggle its children's visibility, and the component handles arbitrary levels of nesting.

```jsx
import React, { useState } from 'react';

// Recursive component to render nested items
const NestedItem = ({ item, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle expansion state
  const toggleExpand = () => {
    if (item.children && item.children.length > 0) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div style={{ marginLeft: `${level * 20}px` }}>
      <div
        className={`p-2 cursor-pointer flex items-center gap-2 ${
          item.children && item.children.length > 0
            ? 'bg-gray-100 hover:bg-gray-200'
            : 'bg-white'
        }`}
        onClick={toggleExpand}
      >
        {/* Expand/Collapse icon for items with children */}
        {item.children && item.children.length > 0 && (
          <span className="text-lg">
            {isExpanded ? '▼' : '▶'}
          </span>
        )}
        {/* Item title */}
        <span>{item.title}</span>
      </div>
      {/* Render children if expanded and item has children */}
      {isExpanded && item.children && (
        <div>
          {item.children.map((child) => (
            <NestedItem key={child.id} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

// Main component to render the data
const NestedExpand = ({ data }) => {
  return (
    <div className="p-4">
      {data.map((item) => (
        <NestedItem key={item.id} item={item} />
      ))}
    </div>
  );
};

// Sample usage
const App = () => {
  const data = [
    {
      id: 1,
      title: 'Parent 1',
      children: [
        { id: 11, title: 'Child 1-1' },
        { id: 12, title: 'Child 1-2' },
      ],
    },
    {
      id: 2,
      title: 'Parent 2',
      children: [
        {
          id: 21,
          title: 'Child 2-1',
          children: [
            {
              id: 211,
              title: 'Grandchild 2-1-1',
              children: [
                { id: 2111, title: 'Great Grandchild 2-1-1-1' },
                { id: 2112, title: 'Great Grandchild 2-1-1-2' },
              ],
            },
          ],
        },
        { id: 22, title: 'Child 2-2' },
      ],
    },
    {
      id: 3,
      title: 'Parent 3 (No children)',
    },
  ];

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Nested Expandable List</h1>
      <NestedExpand data={data} />
    </div>
  );
};

export default App;
```

### Explanation

1. **NestedItem Component**:
   - This is a recursive component that renders a single item and its children.
   - It maintains an `isExpanded` state to track whether the item's children are visible.
   - The `toggleExpand` function toggles `isExpanded` only if the item has children.
   - The component renders:
     - An item title with a clickable area to toggle expansion.
     - An expand/collapse icon (`▶` or `▼`) for items with children.
     - A nested list of children (if expanded) by recursively rendering `NestedItem` for each child.
   - The `level` prop is used to indent child items (20px per level) for visual hierarchy.

2. **NestedExpand Component**:
   - This component maps over the top-level data array and renders a `NestedItem` for each item.
   - It serves as the entry point for rendering the entire nested structure.

3. **Styling**:
   - Tailwind CSS is used for basic styling (e.g., padding, background colors, hover effects).
   - Inline `marginLeft` is used for indentation based on the nesting level.
   - You can replace Tailwind with CSS modules, styled-components, or plain CSS.

4. **Features**:
   - Handles arbitrary levels of nesting (parent → child → grandchild, etc.).
   - Only items with children are expandable.
   - Each item is uniquely identified by its `id` for proper React key management.
   - Clean and minimal UI with visual cues for expandability.

### How to Run

1. Create a new React project if you don't have one:
   ```bash
   npx create-react-app nested-expand
   cd nested-expand
   ```

2. Install Tailwind CSS (optional, if you want to use the provided styling):
   ```bash
   npm install -D tailwindcss
   npx tailwindcss init
   ```

   - Update `tailwind.config.js`:
     ```js
     /** @type {import('tailwindcss').Config} */
     module.exports = {
       content: ['./src/**/*.{js,jsx,ts,tsx}'],
       theme: { extend: {} },
       plugins: [],
     };
     ```

   - Add to `src/index.css`:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

3. Replace `src/App.js` with the provided code.

4. Run the app:
   ```bash
   npm start
   ```

### Output

The app will render a nested list where:
- Clicking "Parent 1" reveals "Child 1-1" and "Child 1-2".
- Clicking "Parent 2" reveals "Child 2-1" and "Child 2-2".
- Clicking "Child 2-1" reveals "Grandchild 2-1-1".
- Clicking "Grandchild 2-1-1" reveals "Great Grandchild 2-1-1-1" and "Great Grandchild 2-1-1-2".
- "Parent 3 (No children)" is not expandable.
- Items are indented based on their nesting level, and expandable items show a toggle icon.

### Customization

- **Styling**: Modify the Tailwind classes or replace with your own CSS.
- **Icons**: Use an icon library like `@heroicons/react` for better expand/collapse icons.
- **Default Expanded**: Initialize `isExpanded` to `true` for specific items.
- **Animations**: Add CSS transitions for smooth expand/collapse effects.
- **Data Fetching**: Replace the static `data` with a fetch from an API.

### Notes

- The component is efficient as it only renders children when expanded.
- It handles edge cases like items without children (e.g., "Parent 3").
- For very large datasets, consider memoizing the `NestedItem` component with `React.memo` to optimize performance.

If you need additional features (e.g., animations, search, or multi-select), let me know!
what is snapshot testing 
what is shallow rendering 
what is spy and mock in unit test cases
what is describe, it and test in jest unit test
what are mock and stub in jest
what is fire event
----------------------------------------------------------------------------------------------------
| Concept           | Purpose                                 | Tool / API                 |
| ----------------- | --------------------------------------- | -------------------------- |
| Snapshot Testing  | Save and compare rendered output        | `toMatchSnapshot()`        |
| Shallow Rendering | Render only the component, not children | `shallow()` (Enzyme)       |
| Mock              | Replace function/module with fake       | `jest.fn()`, `jest.mock()` |
| Spy               | Track calls to existing function        | `jest.spyOn()`             |

| Function           | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| `describe()`       | Groups related tests                            |
| `it()` or `test()` | Defines individual test cases (they're aliases) |


| `jest.fn()`   | Creates a mock function            |
| ------------- | ---------------------------------- |
| `jest.mock()` | Automatically mocks a whole module |

beforeEach(() => { /* setup */ });
afterEach(() => { /* teardown */ });
Runs code before/after each test in a suite.


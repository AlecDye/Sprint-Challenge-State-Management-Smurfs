1. What problem does the context API help solve?

A: Context API allows us to pass data from a parent to a grandchild component without 'prop drilling' through the child component which doesn't need access to that specific data.
2. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A: The state of the entire application lives inside the "store" as an object.
State in redux is read-only. We use "actions" to describe how the state should change, but instead of mutating the original state, we create a clone and use that. This gives us previous versions of state we can revisit.
"Reducers" take in the previous (original) state along with an action and return the next (new) state.
3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

A: Component state lives within one component and can only be updated in that same component with being passed down to its children with props.
Application state is global, in redux state lives in the store which is created either in the index or app file. All components have access to that data because they are all children.
The use cases for these two types of state depend on the size and complexity of your app. If its small or limited in complexity I would use component state and vise versa.
4. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

A:Redux-thunk is middleware that is inserted in the redux loop between an action and the reducer. Thunk looks at every action that passes through it (actions are just objects) and if it sees a function, it calls that function (reducers are not supposed to change anything outside their scope so we can't do this in the reducers). This allows us to perform async functions like API calls with the middleware. Without that, redux normally runs synchronously.
5. What is your favorite state management system you've learned and this sprint? Please explain why!

A: Both have their strengths, Redux is great for large applications where state needs to be passed to the majority of components. Context is great for passing state to isolated components without connecting every component, this is useful for UI / UX theming. I'm more comfortable with Context at the moment.
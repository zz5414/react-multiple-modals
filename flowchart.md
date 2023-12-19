```mermaid
flowchart  TD;
    App.js -- MyModal.js --> useModal.js
    useModal.js -- open --> ModalsProvider::ModalsDispatchContext.js
    ModalsProvider::ModalsDispatchContext.js -->ModalsProvider::ModalsStateContext
    ModalsProvider::ModalsStateContext -- openModals --> Modals.js
    Modals.js --> Rendering
```

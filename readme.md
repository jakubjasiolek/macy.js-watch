## Macy - watchCSS
Adds `watchCSS` option to Macy.js

### Usage
Use Macy.js as normal with one additional parameter in options array - `watchCSS`.

If `watchCSS` is set to `true`, you can enable and disable Macy with CSS. 
watchCSS option watches the content of :after of the carousel element.
Macy is enabled if :after content is `macy`.

```javascript
    var macy = new Macy({
        container: '#macy-container',
        trueOrder: false,
        waitForImages: false,
        margin: 24,
        columns: 6,
        breakAt: {
            1200: 5,
            940: 3,
            520: 2,
            400: 1
        },
        watchCSS: true,
    });
```
```css
    #macy-container::after {
        content: 'macy',
        display: none,
    }
```
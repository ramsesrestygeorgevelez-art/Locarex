# Locarex

A module that locates anything to make location apps.

## Use this code in HTML to import it:

```html
<script src="https://locarex.net"></script>
```
# To use the Location to make location apps:
```javascript

const user = new locarex.UserProvider("Ramses")
const location = new locarex.LocateFromUser(user)

location.getLocation(user)
```

# Using the camera to get the country? Use the ```Recordanex``` module!
### Use the import:
```javascript
import { Record } from "https://recordanex/js/v1"

Record.play()

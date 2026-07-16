## Image Optimization
Wrong Approach is
```
<link

href="google-font-url"

/>
```
- Correct Approach
```
import { Inter } from "next/font/google";

const inter=Inter({

subsets:["latin"]

});
```
### Benifit
```
No layout shift.
```

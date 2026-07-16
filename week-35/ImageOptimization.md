## Image Optimization
Wrong Approach is
```
<img

src="/employee.png"

/>
```
- Correct Approach
```
import Image from "next/image";
<Image

src="/employee.png"

width={400}

height={300}

alt="Employee"
/>
```
### Benifit
```
Responsive

↓

Lazy Loading

↓

Compression

↓

Fast
```

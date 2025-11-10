### ASCII Pepero Day — Console Animation

> self-celebrating `pepero-day` with Typescript practice  <br/>
> watch ascii animals eat pepero in your console

![pepero-gif](https://github.com/user-attachments/assets/d70e4d23-1928-48d0-bdea-04a483109c4d)

> simply implemented: <br/>
> each frame shortens the pepro-stick to create a behavior of 'eating' sequence <br/>
> rendered with ansi-escape codes. [ANSI excape code - Wikipedia](https://en.wikipedia.org/wiki/ANSI_escape_code)

### Run Locally
> Node.js (v20 or higher) <br/>
> npm

```bash
# 1. Install dependencies
npm install

# 2. Build TypeScript
npm run build

# 3. Run the animation
npm start
```

> To run directly without build
```bash
npx ts-node src/main.ts
```

### Add Your Own Animal
> 1. Open `src/models/face.ts`
> 2. Create a new Animal Face
```typescript
const DRAGON: Animal = {
  name: "DRAGON",
  face: {
    ears: "  /\\ ",
    eyes: "( @_@ )",
  },
};
```
> 3. Add to export list
```typescript

export const ANIMALS: Animal[] = [CAT, TIGER, RABBIT, PIG, DRAGON]; // dragon added
```

### Add Your Own Pepero Flavor
> 1. Open `src/const/color.ts`
> 2. Modify of Create new Color
```typescript
export const FLAVORS_COLOR = [
  // ...
  {
    name: "BASE",
    code: "\x1b[38;5;94m",
  },
  // ...
  {
    name: "NEW_COLOR",
    code: "\x1b[38;5;{COLOR_CODE}m",
    // {color_code} --> find code from following reference
  },
  
];
```
> table from [ANSI excape code - Wikipedia:COLORS](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors)

> <img width="800" height="284" alt="image" src="https://github.com/user-attachments/assets/7790f936-88c2-4960-b0b6-5f2eead5f9a4" />


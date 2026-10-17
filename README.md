# Prince Portfolio (React + Tailwind CSS)

## Chalane ka tarika
```bash
npm install
npm run dev        # http://localhost:5173
```

## Apni details kaise daalein
Sirf **`src/data.js`** edit karo. Jahan `REPLACE` likha hai wahan apna email, GitHub, LinkedIn, project live links, aur college ka naam daalo.

- **Project screenshot:** image `public/` folder me rakho aur `data.js` me `image: "/masaba.png"` likho.
- **Apni photo:** photo ko `public/photo.jpg` naam se rakh do (square ya portrait, face center me). Photo nahi milegi to tumhare naam ka pehla letter dikhega.
- **Resume:** apna PDF `public/resume.pdf` naam se rakh do. Download button wahi file dega.
- **Colors:** `tailwind.config.js` me `cobalt`, `sun`, `paper`, `ink`.

## Deploy (free)
1. Code GitHub par push karo.
2. Vercel ya Netlify par repo import karo. Build command `npm run build`, output folder `dist`.
3. Jo link mile wo resume me daal do.

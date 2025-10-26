# 💧 Liquid / Gooey Effect

A smooth, futuristic **liquid blob animation** built using pure **HTML, CSS, and SVG filters**.
This mini project demonstrates how to use the `feGaussianBlur` and `feColorMatrix` filters to create a realistic **gooey merging effect** between animated blobs.

---

## 🚀 Demo

🔗 **Live Preview:** [Liquid / Gooey Effect](https://deegemini.github.io/Liquid-Gooey-Effect/)

*(If you haven’t deployed it yet, you can host it easily using GitHub Pages or Vercel.)*

---

## 🌈 Preview

![Liquid/Gooey Effect Preview](assets/preview.svg)

*(If you have a GIF or animated preview you prefer, replace `assets/preview.svg` with `assets/preview.gif` or update the link accordingly.)*

---

## 🧪 Features

- 💧 Realistic merging gooey blobs
- 🎨 Gradient-based blob design
- ⚙️ 100% Pure CSS + SVG (no JavaScript required)
- 🪄 Easy customization for colors, sizes, and movement
- 🌐 Fully responsive and lightweight

---

## 🧰 Technologies Used

- **HTML5**
- **CSS3** (Animations, Gradients, Filters)
- **SVG Filters** (`feGaussianBlur` + `feColorMatrix`)

---

## 🧭 Getting Started

1. Clone this repository:

```bash
git clone https://github.com/DeeGemini/Liquid-Gooey-Effect.git
```

2. Open the project:

Open the `index.html` file directly in your browser — no build or server required.

---

## 🎨 Customization Tips

Change blob colors (example CSS):

```css
/* example blob gradient */
background: linear-gradient(135deg, #7f00ff, #e100ff);
```

Add more blobs:

Duplicate one of the blob elements in the `.gooey` container, for example:

```html
<div class="gooey">
   <div class="blob"></div>
   <div class="blob"></div>
   <!-- add more -->
</div>
```

Adjust gooey strength (SVG filter):

Inside the SVG filter's `feColorMatrix` values you may see something like `0 0 0 20 -10` — increasing the `20` will make blobs merge more strongly; the `-10` affects transparency. Be careful: large blur values increase rendering cost.

---

## 🧠 How it works

- feGaussianBlur: blurs the elements to create soft edges. The `stdDeviation` controls the blur radius — bigger values produce more blending but cost more to render.
- feColorMatrix: when used with a matrix like `0 0 0 20 -10` it amplifies alpha values so blurred shapes' alpha channels merge and produce the gooey "neck" between blobs. The last row of the 4x5 matrix affects alpha output.
- Combined: blur first, then amplify alpha (color-matrix), and composite the original graphic on top. That order makes the shapes visually merge while preserving their colors.

Tip: tweak `stdDeviation` and the color-matrix's multiplier to balance the merging strength and performance.

---

## 📂 Project Structure

```bash
Liquid-Gooey-Effect/
├── index.html       # Main file with HTML, CSS, and SVG filter
└── README.md        # Project documentation
```

---

## 💡 Inspiration

Inspired by liquid UI and blob morphing effects seen in creative portfolios and futuristic web design.

---

## 👩‍💻 Author

Nicsady Andiana (DeeGemini)
Frontend Developer | Creative Coder

Based in Durban, South Africa

---

## 📜 License

This project is open-source and available under the MIT License.


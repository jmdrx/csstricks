import './App.scss';
import img1 from './assets/pic1.jpg';
import img2 from './assets/pic2.jpg';
import img3 from './assets/pic3.jpg';

import ExampleTemplate from './components/ExampleTemplate';
import ObjectFit from './components/ObjectFit';

const content = [
  {
    title: "Object Fit",
    key: 1,
    html: `<div class="object-fit">\n    <img src="${img1}" />\n</div>`,
    css: `.object-fit {
  width: 100%;
  height: 200px;
}
.object-fit img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 70%;
}`
  },
  {
    title: "Place Items Center",
    key: 2,
    html: `<div class="place-items-center">
  <div>
    <h3>Mount Cook National Park Travel Guide</h3>
    <p>Glacier Hiking, Star Gazing, Walking Trails, and a whole lot more!</p>
    <button>Read More</button>
  </div>
</div>`,
    css: `.place-items-center {
  display: grid;
  place-items: center;
  width: 100%;
  height: 300px;
  padding: 20px;
  background: url('${img1}') center center / cover;
  text-align: center;
}

.place-items-center h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-weight: 700;
}

.place-items-center button {
  margin-top: 20px;
}
`
  },
  {
    title: "Background Blend Mode",
    key: 3,
    html: `<div class="bg-blend-mode">
  <div>
    <h3>Mount Cook National Park Travel Guide</h3>
    <p>Glacier Hiking, Star Gazing, Walking Trails, and a whole lot more!</p>
    <button>Read More</button>
  </div>
</div>`,
    css: `.bg-blend-mode {
  display: grid;
  place-items: center;
  width: 100%;
  height: 300px;
  padding: 20px;
  background: url('${img1}') center center / cover;
  background-color: gray;
  background-blend-mode: screen;
  text-align: center;
}

.bg-blend-mode h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-weight: 700;
}

.bg-blend-mode button {
  margin-top: 20px;
}
`
  },
  {
    title: "Min and Max Width",
    key: 4,
    html: `<div class="min-max-width">
  <div>
    <h3>Mount Cook National Park Travel Guide</h3>
    <p>Glacier Hiking, Star Gazing, Walking Trails, and a whole lot more!</p>
    <button>Read More</button>
  </div>
</div>`,
    css: `.min-max-width {
  display: grid;
  place-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  height: 300px;
  padding: 20px;
  background: url('${img1}') center center / cover;
  background-color: gray;
  background-blend-mode: screen;
  text-align: center;
}

.min-max-width h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-weight: 700;
}

.min-max-width button {
  margin-top: 20px;
}
`
  },
  {
    title: "Circle Mask",
    key: 5,
    html: `<div class="circle-mask">
  <div>
    <h3>Mount Cook National Park Travel Guide <span class="new">NEW</span></h3>
    <p>Glacier Hiking, Star Gazing, Walking Trails, and a whole lot more!</p>
    <button>Read More</button>
  </div>
</div>`,
    css: `.new {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: 700;
  transform: translateY(-7px);
}
.circle-mask {
  display: grid;
  place-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  height: 300px;
  padding: 20px;
  background: url('${img1}') center center / cover;
  background-color: gray;
  background-blend-mode: screen;
  text-align: center;
}

.circle-mask h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-weight: 700;
}

.circle-mask button {
  margin-top: 20px;
}
`
  },
  {
    title: "Postition Relative + Absolute",
    key: 6,
    html: `<div class="relative-absolute">
  <div class="trending">trending</div>
  <div>
    <h3>Mount Cook National Park Travel Guide <span class="new">NEW</span></h3>
    <p>Glacier Hiking, Star Gazing, Walking Trails, and a whole lot more!</p>
    <button>Read More</button>
  </div>
</div>`,
    css: `.relative-absolute {
  display: grid;
  place-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  height: 300px;
  padding: 20px;
  background: url('${img1}') center center / cover;
  background-color: gray;
  background-blend-mode: screen;
  text-align: center;
  position: relative;
}

.relative-absolute .trending {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  border-radius: 0 0 5px 0;
  background: gray;
  color: white;
  font-size: 12px;
}

.relative-absolute .new {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: 700;
  transform: translateY(-7px);
}

.relative-absolute h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-weight: 700;
}

.relative-absolute button {
  margin-top: 20px;
}
`
  },
  {
    title: "Transform",
    key: 7,
    html: `<div class="transform">
  <div class="trending">trending</div>
  <div>
    <h3>Mount Cook National Park Travel Guide <span class="new">NEW</span></h3>
    <p>Glacier Hiking, Star Gazing, Walking Trails, and a whole lot more!</p>
    <button>Read More</button>
  </div>
</div>`,
    css: `.transform {
  display: grid;
  place-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  height: 300px;
  padding: 20px;
  background: url('${img1}') center center / cover;
  background-color: gray;
  background-blend-mode: screen;
  text-align: center;
  position: relative;
  transition: all 0.6s ease;
}
.transform:hover {
  transform: scale(1.05);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.transform .trending {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  border-radius: 0 0 5px 0;
  background: gray;
  color: white;
  font-size: 12px;
}

.transform .new {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: 700;
  transform: translateY(-7px);
}

.transform h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-weight: 700;
}

.transform button {
  margin-top: 20px;
}
`
  },
  {
    title: "Fluid Height Transition",
    key: 8,
    html: `<div class="fluid-height">
  <div class="trending">trending</div>
  <div>
    <h3>Mount Cook National Park Travel Guide <span class="new">NEW</span></h3>
    <p class="snippet">Glacier Hiking, Star Gazing, Walking Trails. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
    <button>Read More</button>
  </div>
</div>`,
    css: `.fluid-height .snippet {
  max-height: 20px;
  white-space: pre-wrap;
  text-overflow: ellipsis;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.fluid-height:hover .snippet {
  white-space: inherit;
  max-height: 200px;
}

.fluid-height {
  display: grid;
  place-items: center;
  width: 100%;
  min-width: 300px;
  max-width: 500px;
  min-height: 300px;
  padding: 70px 20px;
  background: url('${img1}') center center / cover;
  background-color: gray;
  background-blend-mode: screen;
  text-align: center;
  position: relative;
  transition: all 0.6s ease;
}
.fluid-height:hover {
  transform: scale(1.05);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.fluid-height .trending {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  border-radius: 0 0 5px 0;
  background: gray;
  color: white;
  font-size: 12px;
}

.fluid-height .new {
  display: inline-grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: 700;
  transform: translateY(-7px);
}

.fluid-height h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 35px;
  font-weight: 700;
}

.fluid-height button {
  margin-top: 20px;
}
`
  },
  {
    title: "Stacking Tiles",
    key: 9,
    html: `<div class="stacking-tiles-container">
  <div class="stacking-tiles tile-1">
    <div class="trending">trending</div>
    <div>
      <h3>Mount Cook National Park Travel Guide <span class="new">NEW</span></h3>
      <p>Glacier Hiking, Star Gazing, Walking Trails, and a whole lot more!</p>
      <button>Read More</button>
    </div>
  </div>

  <div class="stacking-tiles tile-2">
    <div class="trending">trending</div>
    <div>
      <h3>Exploring Jaipur by Foot <span class="new">NEW</span></h3>
      <p>The Pink city is a lot more colorful than you think</p>
      <button>Read More</button>
    </div>
  </div>

  <div class="stacking-tiles tile-3">
    <div class="trending">trending</div>
    <div>
      <h3>Scooter your Way Around Bagan</h3>
      <p>Rent a cheap scooter and explore the temple at your own pace</p>
      <button>Read More</button>
    </div>
  </div>
</div>
`,
    css: `.stacking-tiles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.stacking-tiles {
  flex-grow: 1;
  flex-basis: 200px;
//  flex: 1 1 200px;
  display: grid;
  place-items: center;
  margin: 10px;
  padding: 70px 20px;
  background-blend-mode: screen;
  text-align: center;
  position: relative;
  transition: all 0.6s ease;
}
.stacking-tiles:hover {
  transform: scale(1.05);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.stacking-tiles.tile-1 {
  background: url('${img1}') gray center center / cover;
}

.stacking-tiles.tile-2 {
  background: url('${img2}') gray center center / cover;
}

.stacking-tiles.tile-3 {
  background: url('${img3}') gray center center / cover;
}

.stacking-tiles .trending {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  border-radius: 0 0 5px 0;
  background: gray;
  color: white;
  font-size: 12px;
}

.stacking-tiles .new {
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 8px;
  transform: translateY(-5px);
}

.stacking-tiles h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.stacking-tiles p {
  font-size: 12px;
}

.stacking-tiles button {
  margin-top: 20px;
}
`
  },
  {
    title: "Counter",
    key: 10,
    html: `<div class="counter-container">
  <div class="counter tile-1">
    <div class="trending">trending</div>
    <div>
      <h3>Mount Cook National Park Travel Guide <span class="new">NEW</span></h3>
      <p>Glacier Hiking, Star Gazing, Walking Trails, and a whole lot more!</p>
      <button>Read More</button>
    </div>
  </div>

  <div class="counter tile-2">
    <div class="trending">trending</div>
    <div>
      <h3>Exploring Jaipur by Foot <span class="new">NEW</span></h3>
      <p>The Pink city is a lot more colorful than you think</p>
      <button>Read More</button>
    </div>
  </div>

  <div class="counter tile-3">
    <div class="trending">trending</div>
    <div>
      <h3>Scooter your Way Around Bagan</h3>
      <p>Rent a cheap scooter and explore the temple at your own pace</p>
      <button>Read More</button>
    </div>
  </div>
</div>
`,
    css: `.counter-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  counter-reset: trending-counter
}
.counter {
  flex-grow: 1;
  flex-basis: 200px;
//  flex: 1 1 200px;
  display: grid;
  place-items: center;
  margin: 10px;
  padding: 70px 20px;
  background: url('${img1}') center center / cover;
  background-color: gray;
  background-blend-mode: screen;
  text-align: center;
  position: relative;
  transition: all 0.6s ease;
}
.counter:hover {
  transform: scale(1.05);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.counter.tile-1 {
  background: url('${img1}') gray center center / cover;
}

.counter.tile-2 {
  background: url('${img2}') gray center center / cover;
}

.counter.tile-3 {
  background: url('${img3}') gray center center / cover;
}

.counter .trending {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  border-radius: 0 0 5px 0;
  background: gray;
  color: white;
  font-size: 12px;
}

.counter .trending::after {
  counter-increment: trending-counter;
  content: " #" counter(trending-counter);
}

.counter .new {
  display: inline-grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: red;
  color: white;
  font-size: 8px;
  transform: translateY(-5px);
}

.counter h3 {
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 700;
}

.counter p {
  font-size: 12px;
}

.counter button {
  margin-top: 20px;
}
`
  }
]

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>CSS Tricks That Are Actually Useful</h1>
        <p>by jim diaz</p>
      </header>
      
      <div className="content">
        {content.map( item => {
          return <ExampleTemplate {...item} />
        })}
      </div>

      <footer>
        <p>photos from <a href="https://eatandrun.asia/">eatandrun.asia</a></p>
      </footer>
    </div>
  );
}

export default App;

import { render } from "solid-js/web";

import "./index.scss";

const App = () => (
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: solid-remote</div>
    <div>Framework: solid-js</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
  </div>
);

export default function SolidWrapper({ ref }) {
  render(App, ref);
}

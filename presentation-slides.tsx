import {
  ArrowRight,
  LayoutGrid,
  AlignJustify,
  CheckCircle2,
  History,
  Smartphone,
  Code,
  Lightbulb,
  ExternalLink,
  Zap,
} from "lucide-react";

export default function CSSLayoutsExtendedPresentation() {
  return (
    <div className="font-sans">
      {/* Slide 1: Title */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-12 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Modern CSS Layouts</h1>
        <h2 className="text-2xl mb-6">
          Layout Smarter, Not Harder – CSS Flex & Grid 101
        </h2>
      </div>

      {/* Slide 2: Introduction */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          CSS Layout Evolution
        </h2>
        <div className="flex items-center gap-4 mb-6">
          <History className="text-gray-600 w-8 h-8" />
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3 py-1 bg-gray-200 rounded">Tables</span>
            <ArrowRight className="text-gray-400" />
            <span className="px-3 py-1 bg-gray-200 rounded">Floats</span>
            <ArrowRight className="text-gray-400" />
            <span className="px-3 py-1 bg-gray-200 rounded">Positioning</span>
            <ArrowRight className="text-gray-400" />
            <span className="px-3 py-1 bg-purple-100 font-semibold rounded">
              Flexbox
            </span>
            <ArrowRight className="text-gray-400" />
            <span className="px-3 py-1 bg-indigo-100 font-semibold rounded">
              Grid
            </span>
          </div>
        </div>
        <p className="mb-4">
          <strong>The Problem:</strong> Creating responsive, flexible layouts
          that adapt to different screen sizes and content
        </p>
        <p className="mb-4">
          <strong>The Solution:</strong> Modern layout systems that give us
          precise control with less code
        </p>
        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 flex items-start gap-2">
          <Lightbulb className="text-yellow-500 w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">
            Before Flexbox and Grid, developers had to use complex hacks and
            workarounds to create layouts that are now simple to implement.
          </p>
        </div>
      </div>

      {/* NEW: Slide 3: The Layout Problem */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          The Layout Problem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-red-700 mb-2">
              Old Approach Challenges
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Floats were designed for text wrapping, not layouts</li>
              <li>Vertical centering was unnecessarily complex</li>
              <li>Equal height columns required hacks</li>
              <li>Responsive designs needed media query overload</li>
              <li>Nested elements created specificity nightmares</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-green-700 mb-2">Modern Solutions</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Purpose-built for creating layouts</li>
              <li>Simple vertical and horizontal alignment</li>
              <li>Equal heights by default</li>
              <li>Intrinsically responsive capabilities</li>
              <li>Cleaner, more maintainable code</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Code className="text-gray-700 w-5 h-5" />
            <h3 className="font-bold">Before vs After</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold mb-1 text-red-600">
                Old Way (Floats)
              </p>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
                {`.container {
  width: 100%;
}
.container::after {
  content: "";
  display: table;
  clear: both;
}
.column {
  float: left;
  width: 33.33%;
}`}
              </pre>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1 text-green-600">
                New Way (Grid)
              </p>
              <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs overflow-x-auto">
                {`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 4: Flexbox Basics */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-700">Flexbox Basics</h2>
          <AlignJustify className="text-purple-700 w-8 h-8" />
        </div>

        <p className="mb-4 font-semibold">
          One-dimensional layout system (row OR column)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold mb-2">Container Properties:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <code className="bg-gray-100 px-1">display: flex</code>
              </li>
              <li>
                <code className="bg-gray-100 px-1">flex-direction</code>: row |
                column
              </li>
              <li>
                <code className="bg-gray-100 px-1">justify-content</code>:
                space-between | center
              </li>
              <li>
                <code className="bg-gray-100 px-1">align-items</code>: center |
                stretch
              </li>
              <li>
                <code className="bg-gray-100 px-1">flex-wrap</code>: wrap |
                nowrap
              </li>
              <li>
                <code className="bg-gray-100 px-1">gap</code>: spacing between
                items
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Item Properties:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <code className="bg-gray-100 px-1">flex-grow</code>: how much
                item can grow
              </li>
              <li>
                <code className="bg-gray-100 px-1">flex-shrink</code>: how much
                item can shrink
              </li>
              <li>
                <code className="bg-gray-100 px-1">flex-basis</code>: initial
                size
              </li>
              <li>
                <code className="bg-gray-100 px-1">flex</code>: shorthand (grow,
                shrink, basis)
              </li>
              <li>
                <code className="bg-gray-100 px-1">align-self</code>: override
                alignment
              </li>
              <li>
                <code className="bg-gray-100 px-1">order</code>: change visual
                order
              </li>
            </ul>
          </div>
        </div>

        {/* Flexbox Example */}
        <div className="border border-dashed border-purple-300 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-2">
            Example: Navigation Bar with Flexbox
          </p>
          <div className="bg-purple-100 p-3 rounded flex justify-between items-center">
            <div className="font-bold">Logo</div>
            <div className="flex gap-4">
              <div>Home</div>
              <div>About</div>
              <div>Services</div>
              <div>Contact</div>
            </div>
          </div>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs mt-3 overflow-x-auto">
            {`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links {
  display: flex;
  gap: 1rem;
}`}
          </pre>
        </div>
      </div>

      {/* NEW: Slide 5: Flexbox in Action */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          Flexbox in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold mb-3">Card Layout</h3>
            <div className="border border-dashed border-purple-300 p-3 rounded-lg">
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="bg-purple-100 p-3 rounded flex-1 min-w-[120px] flex flex-col"
                  >
                    <div className="bg-purple-200 h-20 rounded mb-2"></div>
                    <h4 className="font-bold mb-1">Card Title</h4>
                    <p className="text-xs mb-2">
                      Card description goes here with some text.
                    </p>
                    <button className="bg-purple-500 text-white rounded px-2 py-1 text-xs mt-auto">
                      Action
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
              {`.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
.card {
  flex: 1;
  min-width: 120px;
  display: flex;
  flex-direction: column;
}
.card button {
  margin-top: auto;
}`}
            </pre>
          </div>

          <div>
            <h3 className="font-bold mb-3">Holy Grail Layout</h3>
            <div className="border border-dashed border-purple-300 p-3 rounded-lg">
              <div className="bg-purple-100 p-2 rounded flex flex-col h-[250px]">
                <div className="bg-purple-200 p-2 rounded mb-2">Header</div>
                <div className="flex gap-2 flex-1 mb-2">
                  <div className="bg-purple-200 p-2 rounded w-[80px]">
                    Sidebar
                  </div>
                  <div className="bg-purple-300 p-2 rounded flex-1">
                    Main Content
                  </div>
                  <div className="bg-purple-200 p-2 rounded w-[80px]">
                    Sidebar
                  </div>
                </div>
                <div className="bg-purple-200 p-2 rounded">Footer</div>
              </div>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
              {`.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.middle {
  display: flex;
  flex: 1;
  gap: 0.5rem;
}
.content {
  flex: 1;
}`}
            </pre>
          </div>
        </div>

        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 flex items-start gap-2">
          <Zap className="text-yellow-500 w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">
            <strong>Pro Tip:</strong> Use{" "}
            <code className="bg-yellow-100 px-1">margin-top: auto</code> to push
            elements to the bottom of flex containers!
          </p>
        </div>
      </div>

      {/* Slide 6: Grid Basics */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-indigo-700">Grid Basics</h2>
          <LayoutGrid className="text-indigo-700 w-8 h-8" />
        </div>

        <p className="mb-4 font-semibold">
          Two-dimensional layout system (rows AND columns)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold mb-2">Container Properties:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <code className="bg-gray-100 px-1">display: grid</code>
              </li>
              <li>
                <code className="bg-gray-100 px-1">grid-template-columns</code>
              </li>
              <li>
                <code className="bg-gray-100 px-1">grid-template-rows</code>
              </li>
              <li>
                <code className="bg-gray-100 px-1">grid-template-areas</code>
              </li>
              <li>
                <code className="bg-gray-100 px-1">gap</code> (row-gap,
                column-gap)
              </li>
              <li>
                <code className="bg-gray-100 px-1">justify-items</code> /{" "}
                <code className="bg-gray-100 px-1">align-items</code>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Item Properties:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <code className="bg-gray-100 px-1">grid-column</code>: start /
                end
              </li>
              <li>
                <code className="bg-gray-100 px-1">grid-row</code>: start / end
              </li>
              <li>
                <code className="bg-gray-100 px-1">grid-area</code>: named area
              </li>
              <li>
                <code className="bg-gray-100 px-1">justify-self</code> /{" "}
                <code className="bg-gray-100 px-1">align-self</code>
              </li>
            </ul>
            <div className="mt-3 bg-indigo-50 p-2 rounded">
              <h4 className="font-semibold text-sm mb-1">Special Units:</h4>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>
                  <code className="bg-gray-100 px-1">fr</code> - fraction of
                  available space
                </li>
                <li>
                  <code className="bg-gray-100 px-1">minmax(min, max)</code> -
                  size constraints
                </li>
                <li>
                  <code className="bg-gray-100 px-1">auto-fit</code> /{" "}
                  <code className="bg-gray-100 px-1">auto-fill</code> -
                  responsive columns
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Grid Example */}
        <div className="border border-dashed border-indigo-300 p-4 rounded-lg">
          <p className="text-sm text-gray-500 mb-2">
            Example: Image Gallery with Grid
          </p>
          <div className="bg-indigo-100 p-3 rounded grid grid-cols-3 gap-2">
            <div className="bg-indigo-200 aspect-square rounded"></div>
            <div className="bg-indigo-300 aspect-square rounded"></div>
            <div className="bg-indigo-200 aspect-square rounded"></div>
            <div className="bg-indigo-300 aspect-square rounded"></div>
            <div className="bg-indigo-200 aspect-square rounded"></div>
            <div className="bg-indigo-300 aspect-square rounded"></div>
          </div>
          <pre className="bg-gray-800 text-gray-100 p-3 rounded text-xs mt-3 overflow-x-auto">
            {`.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}`}
          </pre>
        </div>
      </div>

      {/* NEW: Slide 7: Grid in Action */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">
          Grid in Action
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold mb-3">Dashboard Layout</h3>
            <div className="border border-dashed border-indigo-300 p-3 rounded-lg">
              <div className="bg-indigo-100 p-2 rounded grid grid-cols-4 grid-rows-[auto_1fr_1fr] gap-2 h-[250px]">
                <div className="bg-indigo-200 p-2 rounded col-span-4">
                  Header
                </div>
                <div className="bg-indigo-300 p-2 rounded col-span-2 row-span-2">
                  Main Chart
                </div>
                <div className="bg-indigo-200 p-2 rounded">Stats 1</div>
                <div className="bg-indigo-200 p-2 rounded">Stats 2</div>
                <div className="bg-indigo-200 p-2 rounded col-span-2">
                  Data Table
                </div>
              </div>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
              {`.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr 1fr;
  gap: 0.5rem;
  height: 100vh;
}
.chart {
  grid-column: span 2;
  grid-row: span 2;
}
.table {
  grid-column: span 2;
}`}
            </pre>
          </div>

          <div>
            <h3 className="font-bold mb-3">Responsive Grid</h3>
            <div className="border border-dashed border-indigo-300 p-3 rounded-lg">
              <div className="bg-indigo-100 p-2 rounded grid grid-cols-[repeat(auto-fit,minmax(80px,1fr))] gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="bg-indigo-200 p-2 rounded h-16 flex items-center justify-center"
                  >
                    Item {i}
                  </div>
                ))}
              </div>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
              {`.responsive-grid {
  display: grid;
  grid-template-columns: 
    repeat(auto-fit, minmax(80px, 1fr));
  gap: 0.5rem;
}`}
            </pre>
            <p className="text-sm mt-2 text-gray-600">
              <strong>auto-fit</strong>: Creates as many columns as can fit
              based on the minmax() function
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 flex items-start gap-2">
          <Zap className="text-yellow-500 w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">
            <strong>Pro Tip:</strong> Use{" "}
            <code className="bg-yellow-100 px-1">grid-template-areas</code> for
            named template areas that make your layout more readable!
          </p>
        </div>
      </div>

      {/* Slide 8: When to Use Each */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          When to Use Each
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <AlignJustify className="text-purple-700 w-6 h-6" />
              <h3 className="font-bold text-purple-700">Flexbox</h3>
            </div>
            <p className="mb-2">When content should dictate layout</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Unknown or dynamic content sizes</li>
              <li>Single row or column layouts</li>
              <li>Alignment and distribution needs</li>
              <li>When you need to reorder content easily</li>
              <li>Navigation menus, card layouts</li>
              <li>When you need to center something perfectly</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <LayoutGrid className="text-indigo-700 w-6 h-6" />
              <h3 className="font-bold text-indigo-700">Grid</h3>
            </div>
            <p className="mb-2">When layout should dictate content</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Known layout structure</li>
              <li>Two-dimensional control needed</li>
              <li>Overlapping elements</li>
              <li>Complex track sizing (minmax, auto-fit)</li>
              <li>Page layouts, dashboards, galleries</li>
              <li>When you need precise placement</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="text-green-600 w-5 h-5" />
            <h3 className="font-bold">Best Practice: Combine Both!</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="mb-2">
                Use Grid for page structure, Flexbox for components
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Grid for the overall layout framework</li>
                <li>Flexbox for UI components within grid areas</li>
                <li>Leverage the strengths of both systems</li>
              </ul>
            </div>
            <div className="bg-white p-2 rounded border">
              <div className="bg-gray-100 p-2 rounded grid grid-cols-[200px_1fr] grid-rows-[auto_1fr_auto] h-[150px] gap-2 text-xs">
                <div className="bg-gray-200 p-1 rounded col-span-2 flex justify-between items-center">
                  <div>Logo</div>
                  <div className="flex gap-2">
                    <div>Link</div>
                    <div>Link</div>
                    <div>Link</div>
                  </div>
                </div>
                <div className="bg-gray-200 p-1 rounded">Sidebar</div>
                <div className="bg-gray-300 p-1 rounded">
                  <div className="flex flex-wrap gap-1 h-full">
                    <div className="bg-gray-200 p-1 rounded flex-1 min-w-[40px]">
                      Card
                    </div>
                    <div className="bg-gray-200 p-1 rounded flex-1 min-w-[40px]">
                      Card
                    </div>
                    <div className="bg-gray-200 p-1 rounded flex-1 min-w-[40px]">
                      Card
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 p-1 rounded col-span-2">Footer</div>
              </div>
              <p className="text-xs text-center mt-1">
                Grid for layout, Flexbox for components
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* NEW: Slide 9: Common Patterns */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Common Patterns
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="font-bold mb-2 text-center">Holy Grail Layout</h3>
            <div className="bg-gray-100 p-2 rounded grid grid-rows-[auto_1fr_auto] grid-cols-[150px_1fr_150px] h-[150px] gap-1 text-xs">
              <div className="bg-gray-300 p-1 rounded col-span-3">Header</div>
              <div className="bg-gray-300 p-1 rounded">Left Sidebar</div>
              <div className="bg-gray-300 p-1 rounded">Main Content</div>
              <div className="bg-gray-300 p-1 rounded">Right Sidebar</div>
              <div className="bg-gray-300 p-1 rounded col-span-3">Footer</div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="font-bold mb-2 text-center">Card Grid</h3>
            <div className="bg-gray-100 p-2 rounded grid grid-cols-2 auto-rows-fr gap-1 h-[150px] text-xs">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-300 p-1 rounded flex flex-col">
                  <div className="bg-gray-400 h-8 rounded mb-1"></div>
                  <div className="text-[10px]">Card content</div>
                  <button className="bg-gray-400 rounded mt-auto text-[10px] p-0.5">
                    Button
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="font-bold mb-2 text-center">Masonry-like Layout</h3>
            <div className="bg-gray-100 p-2 rounded grid grid-cols-3 gap-1 h-[150px] text-xs">
              <div className="bg-gray-300 p-1 rounded row-span-2"></div>
              <div className="bg-gray-300 p-1 rounded"></div>
              <div className="bg-gray-300 p-1 rounded row-span-3"></div>
              <div className="bg-gray-300 p-1 rounded col-span-2"></div>
              <div className="bg-gray-300 p-1 rounded"></div>
              <div className="bg-gray-300 p-1 rounded"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="font-bold mb-2 text-center">Sticky Footer</h3>
            <div className="bg-gray-100 p-2 rounded flex flex-col h-[150px] gap-1 text-xs">
              <div className="bg-gray-300 p-1 rounded">Header</div>
              <div className="bg-gray-300 p-1 rounded flex-1">
                <p className="text-[10px]">Content that can grow</p>
              </div>
              <div className="bg-gray-300 p-1 rounded">
                Footer (always at bottom)
              </div>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
              {`.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.content {
  flex: 1;
}
/* Footer will always be at bottom */`}
            </pre>
          </div>

          <div className="border border-gray-200 rounded-lg p-3">
            <h3 className="font-bold mb-2 text-center">
              Responsive Navigation
            </h3>
            <div className="bg-gray-100 p-2 rounded flex justify-between items-center h-[40px] text-xs">
              <div className="font-bold">Logo</div>
              <div className="hidden md:flex gap-2">
                <div>Home</div>
                <div>About</div>
                <div>Services</div>
                <div>Contact</div>
              </div>
              <div className="md:hidden">☰</div>
            </div>
            <pre className="bg-gray-800 text-gray-100 p-2 rounded text-xs mt-2 overflow-x-auto">
              {`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links {
  display: none; /* On mobile */
}
@media (min-width: 768px) {
  .nav-links {
    display: flex;
    gap: 0.5rem;
  }
  .menu-icon {
    display: none;
  }
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Slide 10: Quick Demo */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Live Demo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-purple-700 mb-2">Flexbox Layout</h3>
            <div className="border border-dashed border-purple-300 p-3 rounded-lg">
              <div className="bg-purple-100 p-4 rounded flex flex-col gap-2">
                <div className="bg-purple-200 p-2 rounded">Header</div>
                <div className="flex gap-2">
                  <div className="bg-purple-200 p-2 rounded w-1/3">Sidebar</div>
                  <div className="bg-purple-300 p-2 rounded flex-1">
                    Main Content
                  </div>
                </div>
                <div className="bg-purple-200 p-2 rounded">Footer</div>
              </div>
            </div>
            <p className="text-sm mt-2 text-gray-600">Nested flex containers</p>
          </div>

          <div>
            <h3 className="font-bold text-indigo-700 mb-2">Grid Layout</h3>
            <div className="border border-dashed border-indigo-300 p-3 rounded-lg">
              <div className="bg-indigo-100 p-4 rounded grid grid-cols-3 grid-rows-[auto_1fr_auto] gap-2">
                <div className="bg-indigo-200 p-2 rounded col-span-3">
                  Header
                </div>
                <div className="bg-indigo-200 p-2 rounded">Sidebar</div>
                <div className="bg-indigo-300 p-2 rounded col-span-2">
                  Main Content
                </div>
                <div className="bg-indigo-200 p-2 rounded col-span-3">
                  Footer
                </div>
              </div>
            </div>
            <p className="text-sm mt-2 text-gray-600">Defined grid areas</p>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-6 text-gray-600">
          <Smartphone className="w-5 h-5" />
          <p>Both are responsive, but handle resizing differently</p>
        </div>
      </div>

      {/* NEW: Slide 11: Browser Support */}
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Browser Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="text-green-600 w-5 h-5" />
              Current Support
            </h3>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="mb-3">
                Both Flexbox and Grid are well-supported in all modern browsers:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Chrome: Full support</li>
                <li>Firefox: Full support</li>
                <li>Safari: Full support</li>
                <li>Edge: Full support</li>
                <li>Opera: Full support</li>
                <li>iOS Safari: Full support</li>
                <li>Android Browser: Full support</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Legacy Browser Fallbacks</h3>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="mb-3">For IE11 and older browsers:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Use feature detection with{" "}
                  <code className="bg-yellow-100 px-1">@supports</code>
                </li>
                <li>Consider polyfills for older browsers</li>
                <li>Provide simple fallback layouts</li>
                <li>Use autoprefixer in your build process</li>
              </ul>
              <pre className="bg-gray-800 text-gray-100 p-2 rounded text-xs mt-3 overflow-x-auto">
                {`@supports (display: grid) {
  .container {
    display: grid;
    /* grid styles */
  }
} 

@supports not (display: grid) {
  .container {
    /* fallback styles */
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 12: Conclusion */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Flexbox for one-dimensional layouts (row OR column)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Grid for two-dimensional layouts (rows AND columns)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Combine both for optimal layouts</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>Modern browsers fully support both</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <span>
              These technologies dramatically simplify responsive design
            </span>
          </li>
        </ul>

        <div className="bg-white/10 p-4 rounded-lg mb-6">
          <h3 className="font-bold mb-2">Resources to Learn More</h3>
          <ul className="space-y-1">
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
              <span>CSS-Tricks: A Complete Guide to Flexbox</span>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
              <span>CSS-Tricks: A Complete Guide to Grid</span>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
              <span>MDN Web Docs: Flexbox & Grid</span>
            </li>
            <li className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4 flex-shrink-0" />
              <span>Flexbox Froggy & Grid Garden (games)</span>
            </li>
          </ul>
        </div>

        <p className="text-lg">Questions?</p>
      </div>
    </div>
  );
}

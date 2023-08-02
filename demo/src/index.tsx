import * as React from "react";
import { render } from "react-dom";

import "./style.css";

import { Circle, Line, Square, Rectangle } from "../../src";

const Demo = () => {
  return (
    <main>
      <h1>react-fake-content</h1>

      <section>
        <h1>Rectangle</h1>
        <Rectangle width="500px" height="50px" />
        <pre>
          <code>
            {`
<Rectangle width="500px" height="50px" />
          `}
          </code>
        </pre>
      </section>

      <section>
        <h1>Square</h1>
        <Square size="80px" />
        <pre>
          <code>
            {`
<Square size="80px" />
          `}
          </code>
        </pre>
      </section>

      <section>
        <h1>Circle</h1>

        <Circle
          size="60px"
          primaryColor="blue"
          secondaryColor="red"
          animationDuration={700}
        />
        <pre>
          <code>
            {`
<Circle
size="60px"
primaryColor="blue"
secondaryColor="red"
animationDuration={700}
/>
          `}
          </code>
        </pre>
      </section>

      <section>
        <h1>Animation disabled</h1>

        <Circle size="120px" animation={false} />
        <pre>
          <code>
            {`
<Circle size="120px" animation={false} />
          `}
          </code>
        </pre>
      </section>

      <section>
        <h1>Line</h1>

        <Line />
        <Line width="90%" height="30px" />
        <Line />
        <Line />
        <pre>
          <code>
            {`
<Line />
<Line width="90%" height="30px" />
<Line />
<Line />
          `}
          </code>
        </pre>
      </section>

      <section>
        <h1>Custom styles & events</h1>

        <Rectangle
          width="500px"
          height="50px"
          style={{
            borderRadius: "20px",
            border: "2px solid #ccc",
            cursor: "pointer",
          }}
          onClick={() => window.alert("Hey!")}
        />
        <pre>
          <code>
            {`
<Rectangle
width="500px"
height="50px"
style={{
  borderRadius: '20px',
  border: '2px solid #ccc',
  cursor: 'pointer'
}}
onClick={() => alert('Hey!')}
/>
          `}
          </code>
        </pre>
      </section>

      <section>
        <h1>Polymorphic components (rendering as span)</h1>

        <Rectangle width="320px" height="100px" as="span" />
        <pre>
          <code>
            {`
<Rectangle width="320px" height="100px" as="span" />
          `}
          </code>
        </pre>
      </section>
    </main>
  );
};

render(<Demo />, document.querySelector("#demo"));

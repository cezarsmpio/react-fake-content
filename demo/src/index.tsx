import * as React from "react";
import { render } from "react-dom";

import "./style.css";

import { Circle, Line, Square, Rectangle } from "../../src";

const Demo = () => {
  return (
    <main>
      <h1>react-fake-content</h1>

      <section>
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

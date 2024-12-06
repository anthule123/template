---
title: "Math"
date: "2023-11-01"
slug: ["math"]
highlight: false
---
# Hello
<pre className="mermaid">
journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
</pre>
<pre className="mermaid">

flowchart TD
    subgraph Go to work
    A[Make tea] --> B[Go upstairs]
    B --> C[Do work]
    end

    subgraph Go home
    C --> D[Go downstairs]
    D --> E[Sit down]
    end
</pre>

<pre className="mermaid">

flowchart LR
    subgraph Go to work
    A[Make tea] --> B[Go upstairs]
    B --> C[Do work]
    end

    subgraph Go home
    C --> D[Go downstairs]
    D --> E[Sit down]
    end
</pre>

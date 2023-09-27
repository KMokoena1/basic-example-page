import React from 'react';
import { Graph } from 'react-d3-graph';

const Graph2 = () => {
  const data = {
    nodes: [
      { id: 'Node A' },
      { id: 'Node B' },
      { id: 'Node C' },
      { id: 'Node D' },
      { id: 'Node E' },
      { id: 'Node F' },
      { id: 'Node G' },
      { id: 'Node H' },
    ],
    links: [
      { source: 'Node A', target: 'Node B' },
      { source: 'Node A', target: 'Node C' },
      { source: 'Node B', target: 'Node D' },
      { source: 'Node B', target: 'Node E' },
      { source: 'Node C', target: 'Node F' },
      { source: 'Node C', target: 'Node G' },
      { source: 'Node D', target: 'Node H' },
      { source: 'Node E', target: 'Node H' },
    ],
  };

  const myConfig = {
    node: {
      color: 'lightgreen',
    },
    link: {
      color: 'gray',
    },
  };

  return <Graph id="graph2" data={data} config={myConfig} />;
};

export default Graph2;

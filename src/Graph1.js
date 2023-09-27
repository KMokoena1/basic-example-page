import React from 'react';
import { Graph } from 'react-d3-graph';

const Graph1 = () => {
  const data = {
    nodes: [
      { id: 'Node 1', btcBalance: '0.5' },
      { id: 'Node 2', btcBalance: '0.8' },
      { id: 'Node 3', btcBalance: '1.2' },
      { id: 'Node 4', btcBalance: '0.7' },
      { id: 'Node 5', btcBalance: '0.9' },
      { id: 'Node 6', btcBalance: '1.5' },
      { id: 'Node 7', btcBalance: '1.0' },
      { id: 'Node 8', btcBalance: '2.0' },
      { id: 'Node 9', btcBalance: '2.3' },
    ],
    links: [
      { source: 'Node 1', target: 'Node 2', label: 'Tx1' },
      { source: 'Node 1', target: 'Node 3', label: 'Tx2' },
      { source: 'Node 3', target: 'Node 4', label: 'Tx3' },
      { source: 'Node 3', target: 'Node 5', label: 'Tx4' },
      { source: 'Node 4', target: 'Node 6', label: 'Tx5' },
      { source: 'Node 4', target: 'Node 7', label: 'Tx6' },
      { source: 'Node 6', target: 'Node 8', label: 'Tx7' },
      { source: 'Node 6', target: 'Node 9', label: 'Tx8' },
    ],
  };    

  const myConfig = {
    node: {
      renderLabel: true,
      renderLabel: (node) => `<tspan y="2">${node.btcBalance} BTC</tspan>`,
      fontColor: 'black',
      fontSize: 12,
      labelPosition: 'top',
    },
    link: {
      renderLabel: true,
      fontSize: 12,
    },
    layout: {
      hierarchical: {
        enabled: true,
        direction: 'LR',
        sortMethod: 'directed',
      },
    },
  };

  return <Graph id="graph1" data={data} config={myConfig} />;
};

export default Graph1;

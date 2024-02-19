import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CytoscapeComponent from 'react-cytoscapejs';
import "../styles/CytoscapeVisualization.css";

const CytoscapeVisualization = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const address = queryParams.get('address');
    const [isLoading, setIsLoading] = useState(true);
    const [graphElements, setGraphElements] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            const dummyData = generateDummyData();
            const elements = transformDataToElements(dummyData);
            setGraphElements(elements);
            setIsLoading(false);
        }, 2000);
    }, []);

    const generateDummyData = () => {
        const dummyData = {
            nodes: [
                { data: { id: 'node1', shape: 'ellipse' } },
                { data: { id: 'node2', shape: 'rectangle' } },
                { data: { id: 'node3', shape: 'triangle' } },
                { data: { id: 'node4', shape: 'pentagon' } },
                { data: { id: 'node5', shape: 'hexagon' } },
                { data: { id: 'node6', shape: 'heptagon' } },
                { data: { id: 'node7', shape: 'star' } },
                { data: { id: 'node8', shape: 'diamond' } },
                { data: { id: 'node9', shape: 'vee' } },
                { data: { id: 'node10', shape: 'rhomboid' } },
                { data: { id: 'node11', shape: 'triangle-back' } },
            ],
            edges: [
                { data: { id: 'edge1', source: 'node1', target: 'node2' } },
                { data: { id: 'edge2', source: 'node2', target: 'node3' } },
                { data: { id: 'edge3', source: 'node3', target: 'node4' } },
                { data: { id: 'edge4', source: 'node4', target: 'node5' } },
                { data: { id: 'edge5', source: 'node5', target: 'node6' } },
                { data: { id: 'edge6', source: 'node6', target: 'node7' } },
                { data: { id: 'edge7', source: 'node7', target: 'node8' } },
                { data: { id: 'edge8', source: 'node8', target: 'node9' } },
                { data: { id: 'edge9', source: 'node9', target: 'node10' } },
                { data: { id: 'edge10', source: 'node10', target: 'node11' } },
            ],
        };
        return dummyData;
    };

    const transformDataToElements = (data) => {
        const nodes = data.nodes.map(node => ({ data: { id: node.data.id } }));
        const edges = data.edges.map(edge => ({ data: { id: edge.data.id, source: edge.data.source, target: edge.data.target } }));
        return [...nodes, ...edges];
    };

    return (
        <div className="second-page-container">
            <h1 className="visualization-header">Cytoscape Visualization</h1>
            {isLoading ? (
                <div className="loading-text">Loading...</div>
            ) : (
                <div className="visualization-container">
                    <CytoscapeComponent elements={graphElements} style={{ width: '100%', height: '100%' }} />
                </div>
            )}
        </div>
    );
};

export default CytoscapeVisualization;

import {
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import { create } from "zustand";

export type RFState = {
  nodes: Node[];
  edges: Edge[];
  viewport: {
    x: number;
    y: number;
    zoom: number;
  };
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  addNode: (newNode: Node) => void;
  updateNodeData: (nodeId: string, newData: any) => void;
  removeNode: (widgetId: string) => void;
  addEdge: (sourceNodeId: string, targetNodeId: string) => void;
  removeEdge: (sourceNodeId: string, targetNodeId: string) => void;
  restoreFlow: (savedState: {
    nodes: Node[];
    edges: Edge[];
    viewport: {
      x: number;
      y: number;
      zoom: number;
    };
  }) => void;
};

const useStore = create<RFState>((set, get) => ({
  nodes: [
    {
      id: "dial",
      type: "mindmap",
      dragHandle: ".custom-drag-handle",
      data: {
        component: "Dial",
        widgetData: {
          id: "dial1",
          value: 45,
        },
      },
      position: { x: 300, y: 400 },
    },
    {
      id: "knob",
      type: "mindmap",
      dragHandle: ".custom-drag-handle",
      data: {
        component: "Knob",
        widgetData: {
          id: "knob1",
          value: 1.9,
        },
      },
      position: { x: 550, y: 450 },
    },
    {
      id: "tank",
      type: "mindmap",
      dragHandle: ".custom-drag-handle",
      data: {
        component: "Tank",
        widgetData: {
          id: "tank1",
          level: 40,
        },
      },
      position: { x: 700, y: 500 },
    },
    {
      id: "startStop",
      type: "mindmap",
      dragHandle: ".custom-drag-handle",
      data: {
        component: "StartStop",
        widgetData: {
          id: "startStop1",
          value: 40,
        },
      },
      position: { x: 750, y: 700 },
    },
  ],
  edges: [],
  viewport: { x: 0.5, y: 0.5, zoom: 0.5 },
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  addNode: (newNode: Node) => {
    set((state) => ({
      nodes: [...state.nodes, newNode],
    }));
  },
  updateNodeData: (widgetId: string, newData: any) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.data.widgetData.id === nodeId
          ? {
              ...node,
              data: {
                ...node.data,
                widgetData: { ...node.data.widgetData, ...newData },
              },
            }
          : node
      ),
    }));
  },
  removeNode: (widgetId: string) => {
    set((state) => ({
      nodes: state.nodes.filter(
        (node) => !(node.data.widgetData.id === widgetId)
      ),
    }));
  },
  addEdge: (sourceNodeId: string, targetNodeId: string) => {
    set((state) => ({
      edges: [
        ...state.edges,
        {
          id: `${sourceNodeId}-${targetNodeId}`,
          source: sourceNodeId,
          target: targetNodeId,
          animated: true,
        },
      ],
    }));
  },
  removeEdge: (sourceNodeId: string, targetNodeId: string) => {
    set((state) => ({
      edges: state.edges.filter(
        (edge) =>
          !(edge.source === sourceNodeId && edge.target === targetNodeId)
      ),
    }));
  },
  restoreFlow: (savedState) => {
    set({
      nodes: savedState.nodes || [],
      edges: savedState.edges || [],
      viewport: {
        x: savedState.viewport?.x || 0,
        y: savedState.viewport?.y || 0,
        zoom: savedState.viewport?.zoom || 1,
      },
    });
  },
}));

export default useStore;

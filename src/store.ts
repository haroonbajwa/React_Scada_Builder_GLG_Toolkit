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
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  addNode: (newNode: Node) => void;
  updateNodeData: (nodeId: string, newData: any) => void;
  addEdge: (sourceNodeId: string, targetNodeId: string) => void;
  removeEdge: (sourceNodeId: string, targetNodeId: string) => void;
};

const useStore = create<RFState>((set, get) => ({
  nodes: [
    {
      id: "dial",
      type: "mindmap",
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
      data: {
        component: "Tank",
        widgetData: {
          id: "tank1",
          level: 40,
        },
      },
      position: { x: 700, y: 500 },
    },
  ],
  edges: [],
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
  updateNodeData: (nodeId: string, newData: any) => {
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId
          ? { ...node, data: { ...node.data, ...newData } }
          : node
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
}));

export default useStore;

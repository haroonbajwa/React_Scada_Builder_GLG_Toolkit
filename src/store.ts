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
  updateNodeData: (widgetId: string, newData: any) => void;
  updateZIndex: (widgetId: string, direction: string) => void;
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
  nodes: [],
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
        node.data.widgetData.id === widgetId
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
  updateZIndex: (widgetId: string, direction: string) => {
    set((state) => ({
      nodes: state.nodes.map((node) => {
        console.log(node, "widget to update");
        return node.data.widgetData.id === widgetId
          ? {
              ...node,
              zIndex:
                direction === "back"
                  ? Number(node.zIndex - 1)
                  : Number(node.zIndex + 1),
            }
          : node;
      }),
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

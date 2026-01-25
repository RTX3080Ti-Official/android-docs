import React, { useState } from 'react';

interface FileNode {
  name: string;
  type: 'file' | 'folder';
  children?: FileNode[];
}

interface NodeProps {
  node: FileNode;
  depth: number;
}

const TreeNode: React.FC<NodeProps> = ({ node, depth }) => {
  const [isOpen, setIsOpen] = useState(true);
  const isFolder = node.type === 'folder';

  return (
    <div style={{ marginLeft: `${depth * 20}px`, userSelect: 'none' }}>
      <div 
        onClick={() => isFolder && setIsOpen(!isOpen)}
        style={{ 
          cursor: isFolder ? 'pointer' : 'default',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '2px 0'
        }}
      >
        <span>{isFolder ? (isOpen ? '📂' : '📁') : '📜'}</span>
        <span style={{ fontWeight: isFolder ? 'bold' : 'normal' }}>{node.name}</span>
      </div>
      
      {isFolder && isOpen && node.children && (
        <div>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree = ({ data }: { data: FileNode }) => {
  return (
    <div style={{ 
      padding: '1rem', 
      backgroundColor: 'var(--ifm-color-emphasis-100)', 
      borderRadius: '8px',
      border: '1px solid var(--ifm-contents-border-color)' 
    }}>
      <TreeNode node={data} depth={0} />
    </div>
  );
};
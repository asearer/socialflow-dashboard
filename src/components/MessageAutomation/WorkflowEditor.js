import React from 'react';
import './WorkflowEditor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

const WorkflowEditor = () => {
  return (
    <div className="workflow-editor">
      <h1><FontAwesomeIcon icon={faCogs} /> Workflow Editor</h1>
      <p>Manage and edit your workflow here.</p>
    </div>
  );
};

export default WorkflowEditor;


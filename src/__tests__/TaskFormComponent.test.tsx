import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskFormComponent from '../components/task/TaskFormComponent';

describe('TaskFormComponent', () => {
  test('renders a form with input fields', () => {
    render(<TaskFormComponent />);

    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Due Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Current State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Notes/i)).toBeInTheDocument();
  });

  // Add more tests as needed...
});
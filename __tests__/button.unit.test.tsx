import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button'; // Adjust import path if necessary

describe('Button', () => {
  it('renders a button with default variant and size', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary'); // Check for default variant class
    expect(button).toHaveClass('h-10'); // Check for default size class
  });

  it('renders a button with a custom variant', () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole('button', { name: /secondary/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-secondary');
  });

  it('renders a button as a child component', () => {
    render(<Button asChild><a href="/test">Link</a></Button>);
    const link = screen.getByRole('link', { name: /link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });
});
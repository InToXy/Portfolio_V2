import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page'; // Adjust import path if necessary

// Mock the TypingAnimation component as it might cause issues in Jest DOM environment
jest.mock('@/components/typing-animation', () => ({
  TypingAnimation: ({ texts }: { texts: string[] }) => <span>{texts[0]}</span>,
}));

// Mock the AnimatedBackground component
jest.mock('@/components/animated-background', () => ({
  AnimatedBackground: () => <div data-testid="animated-background" />,
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('Home Page Integration', () => {
  it('renders the main heading and a project card', () => {
    render(<Home />);

    // Check for main heading
    expect(screen.getByRole('heading', { name: /matheo pinget/i })).toBeInTheDocument();

    // Check for the TypingAnimation mock output
    expect(screen.getByText(/étudiant en réseaux et télécommunication/i)).toBeInTheDocument();

    // Check for "Mes Projets" heading
    expect(screen.getByRole('heading', { name: /mes projets/i })).toBeInTheDocument();

    // Check for at least one project card title
    expect(screen.getByRole('heading', { name: /pentesting/i })).toBeInTheDocument();

    // Check for a button to view a project
    expect(screen.getByRole('link', { name: /voir le projet/i })).toBeInTheDocument();

    // Check for social media links
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument();
  });
});
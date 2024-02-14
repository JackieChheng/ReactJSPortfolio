import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from '../components/Portfolio'; 


global.open = jest.fn();

describe('Portfolio Component', () => {
  it('renders correctly', () => {
    render(<Portfolio />);
    expect(screen.getByText('🎨 Portfolio')).toBeInTheDocument();
    expect(screen.getByText('')).toBeInTheDocument();
  });

  it('displays portfolio items with correct title and description', () => {
    render(<Portfolio />);
    const portfolioTitles = [
    ];

    const portfolioDescriptions = [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitI",
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ];

    portfolioTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    portfolioDescriptions.forEach((description) => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it('opens correct URLs when demo and code buttons are clicked', () => {
    render(<Portfolio />);
    const demoButtons = screen.getAllByText('Demo');
    const codeButtons = screen.getAllByText('Code');

    fireEvent.click(demoButtons[0]);
    expect(global.open).toHaveBeenCalledWith('https://github.com/JackieChheng/NoteTaker', '_blank');

    fireEvent.click(codeButtons[0]);
    expect(global.open).toHaveBeenCalledWith('https://github.com/JackieChheng/NoSQL_API', '_blank');
  });
});
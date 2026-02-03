import React, { useRef } from 'react';
import Macwindow from './Macwindow';
import Terminal from 'react-console-emulator';
import './cli.scss';

const Cli = ({ windowName, setWindowsState }) => {
  const terminalRef = useRef(null); // Create a ref to access the terminal instance

  const commands = {
    help: {
      description: 'List all available commands',
      usage: 'help',
      fn: () => `
        Available commands:
        - help: List all available commands
        - about: Display information about me
        - projects: List my projects
        - contact: Show my contact information
        - clear: Clear the terminal
      `,
    },
    about: {
      description: 'Display information about me',
      usage: 'about',
      fn: () => 'Hi! I am Keshav, a passionate developer with a love for building creative and functional applications.',
    },
    projects: {
      description: 'List my projects',
      usage: 'projects',
      fn: () => `
        Projects:
        1. Portfolio Website - A showcase of my work and skills.
        2. Task Manager App - A productivity tool for managing tasks.
        3. Weather App - A simple app to check the weather in your city.
      `,
    },
    contact: {
      description: 'Show my contact information',
      usage: 'contact',
      fn: () => `
        Contact Information:
        - Email: keshav@example.com
        - GitHub: https://github.com/keshav
        - LinkedIn: https://linkedin.com/in/keshav
      `,
    },
    clear: {
      description: 'Clear the terminal',
      usage: 'clear',
      fn: () => {
        if (terminalRef.current) {
          terminalRef.current.clearConsole(); // Call the clearConsole method
        }
        return null; // Return null to avoid printing anything in the terminal
      },
    },
  };

  return (
    <Macwindow windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          ref={terminalRef} // Attach the ref to the Terminal component
          commands={commands}
          welcomeMessage={`
            Welcome to my CLI Portfolio!
            Type 'help' to see available commands.
          `}
          promptLabel={'keshav:~$'}
          noDefaults={true} // Disable default commands to avoid conflicts
        />
      </div>
    </Macwindow>
  );
};

export default Cli;
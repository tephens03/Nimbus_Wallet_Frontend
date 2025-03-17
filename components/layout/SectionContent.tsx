import React, { ReactNode } from 'react';

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default SectionContainer;

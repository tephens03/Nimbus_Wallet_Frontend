import React, { ReactNode } from 'react';

interface SectionContainerProps {
    children: ReactNode;
    className?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = '' }) => {
    return (
        <div className={`border rounded-2xl px-4 py-6 ${className}`}>
            {children}
        </div>
    );
};

export default SectionContainer;

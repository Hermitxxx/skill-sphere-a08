import React from 'react';

const Spinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-2">
                <Spinner className="text-accent" size="xl" />
                <span className="text-sm text-surface-alt">Loading content...</span>
            </div>
        </div>
    );
};

export default Spinner;
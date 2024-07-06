import React from 'react';
import QuoteForm from './QuoteForm';

interface IframeOverlayProps {
    isVisible: boolean;
    onClose: () => void;
}

const IframeOverlay: React.FC<IframeOverlayProps> = ({isVisible, onClose}) => {
    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 w-full h-full z-50 overflow-hidden bg-black bg-opacity-50 flex justify-center items-center">
            <div
                className="relative w-full sm:w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 h-full bg-white shadow-lg overflow-y-auto max-w-2xl">
                <div className="sticky top-0 bg-white p-4 border-b flex justify-end items-center">
                    <button onClick={onClose} className="text-2xl font-bold">&times;</button>
                </div>
                <div className="p-4 flex justify-center items-center h-[calc(100%-64px)]">
                    <QuoteForm onClose={onClose}/>
                </div>
            </div>
            <style jsx>{`
                @media (min-width: 1024px) {
                    .relative {
                        margin-left: 400px;
                    }
                }
            `}</style>
        </div>
    );
};

export default IframeOverlay;
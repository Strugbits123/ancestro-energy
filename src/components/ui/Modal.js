'use client';

export default function Modal({ isOpen, onClose, width = 'auto', height = 'auto', children }) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]"
            onClick={onClose}
        >
            <div
                className="rounded-lg overflow-hidden flex items-center justify-center"
                style={{
                    width: width,
                    maxWidth: '90vw',
                    height: height,
                    maxHeight: '90vh',
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

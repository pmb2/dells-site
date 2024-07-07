import React, {useState, useEffect} from 'react';

interface VehicleSize {
    name: string;
    image: string;
    price: number;
}

interface SoilingLevel {
    name: string;
    image: string;
    price: number;
}

interface QuoteFormProps {
    onClose: () => void;
}

const vehicleSizes: VehicleSize[] = [
    {name: 'Small', image: '/small.png', price: 100},
    {name: 'Medium', image: '/medium.png', price: 150},
    {name: 'Large', image: '/large.png', price: 200},
    {name: 'Extra Large', image: '/ex-large.png', price: 250},
];

const soilingLevels: SoilingLevel[] = [
    {name: 'Light', image: '/dirty.png', price: 50},
    {name: 'Moderate', image: '/dirtier.png', price: 100},
    {name: 'Heavy', image: '/dirtiest.png', price: 150},
];

const QuoteForm: React.FC<QuoteFormProps> = ({onClose}) => {
    const [step, setStep] = useState(0);
    const [vehicleSize, setVehicleSize] = useState<VehicleSize | null>(null);
    const [soilingLevel, setSoilingLevel] = useState<SoilingLevel | null>(null);
    const [specialNotes, setSpecialNotes] = useState('');
    const [quote, setQuote] = useState<number | null>(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleVehicleSizeSelect = (size: VehicleSize) => {
        setVehicleSize(size);
        setStep(1);
    };

    const handleSoilingLevelSelect = (level: SoilingLevel) => {
        setSoilingLevel(level);
        setStep(2);
    };

    const handleSpecialNotesSubmit = () => {
        const basePrice = (vehicleSize?.price || 0) + (soilingLevel?.price || 0);
        setQuote(basePrice);
        setStep(3);
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return (
                    <div className="space-y-4 flex flex-col items-center w-full max-w-xs" align="center">
                        <h2 className="text-lg font-bold mb-2">Select Vehicle Size</h2>
                        <div className="grid grid-cols-2 gap-2 w-full">
                            {vehicleSizes.map((size) => (
                                <button
                                    key={size.name}
                                    onClick={() => handleVehicleSizeSelect(size)}
                                    className={`p-1 border rounded-md ${
                                        vehicleSize === size ? 'border-blue-500' : 'border-gray-300'
                                    } flex flex-col items-center justify-center overflow-hidden`}
                                    style={{width: '100px', height: '100px'}}
                                >
                                    <img
                                        src={size.image}
                                        alt={size.name}
                                        className="w-full h-auto object-contain mb-1"
                                        style={{maxHeight: '70px'}}
                                    />
                                    <p className="text-xs font-medium truncate w-full text-center">
                                        {size.name}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-4 flex flex-col items-center w-full max-w-sm" align="center">
                        <h2 className="text-xl font-bold mb-2">Select Soiling Level</h2>
                        <div className="grid grid-cols-3 gap-3 w-full">
                            {soilingLevels.map((level) => (
                                <button
                                    key={level.name}
                                    onClick={() => handleSoilingLevelSelect(level)}
                                    className={`p-2 border rounded-md ${
                                        soilingLevel === level ? 'border-blue-500' : 'border-gray-300'
                                    } flex flex-col items-center justify-center overflow-hidden`}
                                    style={{width: '100px', height: '100px'}}
                                >
                                    <img src={level.image} alt={level.name}
                                         className="w-full h-auto object-contain mb-1"
                                         style={{maxHeight: '70px'}}/>
                                    <p className="text-xs font-medium truncate w-full text-center">{level.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4 flex flex-col items-center w-full max-w-sm" align="center">
                        <h2 className="text-xl font-bold mb-2">Special Notes</h2>
                        <textarea
                            value={specialNotes}
                            onChange={(e) => setSpecialNotes(e.target.value)}
                            className="w-full h-64 p-2 border rounded-lg text-sm" style={{ height: '100px', width: '100%'}}
                            placeholder="Any special requests or notes?"
                        />
                        <button
                            onClick={handleSpecialNotesSubmit}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
                        >
                            Get Quote
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4 flex flex-col items-center w-full max-w-sm" align="center">
                        <h2 className="text-xl font-bold mb-2">Your Quote</h2>
                        <p className="text-lg">Estimated Price: ${quote}</p>
                        <p className="text-sm">Please select a date and time for your appointment:</p>
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/backusagency/30min"
                            style={{minWidth: '100%', height: '450px'}}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="space-y-4 flex flex-col items-center">
            {renderStep()}
        </div>
    );
};

export default QuoteForm;
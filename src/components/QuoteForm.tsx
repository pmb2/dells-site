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
    {name: 'Small', image: '/api/placeholder/200/150', price: 100},
    {name: 'Medium', image: '/api/placeholder/200/150', price: 150},
    {name: 'Large', image: '/api/placeholder/200/150', price: 200},
    {name: 'Extra Large', image: '/api/placeholder/200/150', price: 250},
];

const soilingLevels: SoilingLevel[] = [
    {name: 'Light', image: '/api/placeholder/200/150', price: 50},
    {name: 'Moderate', image: '/api/placeholder/200/150', price: 100},
    {name: 'Heavy', image: '/api/placeholder/200/150', price: 150},
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
                    <div className="space-y-4 flex flex-col items-center">
                        <h2 className="text-2xl font-bold">Select Vehicle Size</h2>
                        <div className="grid grid-cols-2 gap-4" align="center">
                            {vehicleSizes.map((size) => (
                                <button
                                    key={size.name}
                                    onClick={() => handleVehicleSizeSelect(size)}
                                    className={`p-4 border rounded-lg ${
                                        vehicleSize === size ? 'border-blue-500' : 'border-gray-300'
                                    }`}
                                >
                                    <img src={size.image} alt={size.name} className="w-full h-auto mb-2"/>
                                    <p>{size.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-4 flex flex-col items-center">
                        <h2 className="text-2xl font-bold">Select Soiling Level</h2>
                        <div className="grid grid-cols-3 gap-4" align="center">
                            {soilingLevels.map((level) => (
                                <button
                                    key={level.name}
                                    onClick={() => handleSoilingLevelSelect(level)}
                                    className={`p-4 border rounded-lg ${
                                        soilingLevel === level ? 'border-blue-500' : 'border-gray-300'
                                    }`}
                                >
                                    <img src={level.image} alt={level.name} className="w-full h-auto mb-2"/>
                                    <p>{level.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4" align="center">
                        <h2 className="text-2xl font-bold">Special Notes</h2>
                        <textarea
                            value={specialNotes}
                            onChange={(e) => setSpecialNotes(e.target.value)}
                            className="w-full h-32 p-2 border rounded-lg"
                            placeholder="Any special requests or notes?"
                        />
                        <button
                            onClick={handleSpecialNotesSubmit}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                        >
                            Get Quote
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4" align="center">
                        <h2 className="text-2xl font-bold">Your Quote</h2>
                        <p className="text-xl">Estimated Price: ${quote}</p>
                        <p>Please select a date and time for your appointment:</p>
                        <div
                            className="calendly-inline-widget"
                            data-url="https://calendly.com/your-account"
                            style={{minWidth: '320px', height: '630px'}}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="p-8" align="center">
            {renderStep()}
        </div>
    );
};

export default QuoteForm;
import React, { useState } from "react";

interface SelectorProps {
    options: string[];
    onChange: (value: string) => void; // Изменено здесь
    className?: string;
    value?: string;
}

const Selector: React.FC<SelectorProps> = ({ options, onChange, className, value }) => {
    const [active, setActive] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>(value || options[0]);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setActive(false);
        onChange(option);
    }

    const handleSelectorClick = () => {
        setActive(!active);
    }

    const renderOptions = () => {
        return options.map((option) => {
            return (
                <div
                    className="px-2 py-1 rounded-md hover:bg-acd cursor-pointer"
                    key={option}
                    onClick={() => handleOptionClick(option)}
                >
                    {option}
                </div>
            );
        });
    }


    return (
        <div className={`${className ? className : ''} bg-ac text-tx rounded-md m-2`}>
            <div
                className="px-2 py-1 rounded-md hover:bg-acl cursor-pointer"
                onClick={handleSelectorClick}
            >
                <div>
                    {selectedOption} ▼
                </div>
                {active && <div className="fixed bg-ac text-tx rounded-md box-content">{renderOptions()}</div>}
            </div>
        </div>
    );
};

export default Selector;
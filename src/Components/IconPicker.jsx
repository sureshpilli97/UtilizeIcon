import React, { useState } from 'react';
import * as Icons from 'react-feather';
import '../Styles/IconPickerStyle.css';

const IconPicker = ({
    rowsInOnePage,
    columnsInOnePage,
    iconHeight,
    iconWidth,
    pickerHeight = '500px',
    pickerWidth = '500px',
    onSelectIcon
}) => {
    const iconsPerPage = rowsInOnePage * columnsInOnePage;
    const iconNames = Object.keys(Icons);
    const totalPages = Math.ceil(iconNames.length / iconsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const handleIconClick = (iconName) => {
        onSelectIcon(iconName);
    };

    const handleNext = () => {
        if ((currentPage + 1) * iconsPerPage < iconNames.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const iconsList = iconNames.slice(currentPage * iconsPerPage, (currentPage + 1) * iconsPerPage);

    return (
        <div className="icon-picker"
            style={{ width: pickerWidth, height: pickerHeight }}
        >
            <div className="icons"
                style={{ gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)` }}
            >
                {iconsList.map((i) => {
                    const IconComponent = Icons[i];
                    return (
                        <div key={i} className="icon"
                            style={{ width: iconWidth, height: iconHeight }}
                            onClick={() => handleIconClick(i)}>
                            <IconComponent />
                        </div>
                    );
                })}
            </div>
            <div className="pagination">
                <button onClick={handlePrev} disabled={currentPage === 0}>Prev</button>
                <span>{currentPage + 1} ... {totalPages}</span>
                <button onClick={handleNext} 
                disabled={(currentPage + 1) * iconsPerPage >= iconNames.length}>Next</button>
            </div>
        </div>
    );
};

export default IconPicker;

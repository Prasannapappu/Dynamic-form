import React, { useState } from 'react'
import { ReactComponent as Icon } from './info-icon-svgrepo-com.svg';

interface InfoProps {
children:any
}

export const Info: React.FC<InfoProps> = ({children}) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
      <div className="relative inline-block">
        <div
          className="text-gray-600 hover:text-gray-800 cursor-pointer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
         <Icon/>
        </div>
        {isHovering && (
          <div className="absolute bottom-9 w-60 -left-44 sm:-left-20 bg-blue-500 text-white font-semibold p-2 rounded mt-1">
            {children}
          </div>
        )}
      </div>
    );
}
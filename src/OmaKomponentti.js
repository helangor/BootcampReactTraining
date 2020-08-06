import React from 'react';
import OmaInnerKomponentti from './OmaInnerKomponentti';
import TestiKomponentti from './TestiKomponentti';

function OmaKomponentti() 
{
    return (
        <div>
            <h1>Tässä omaa komponenttia</h1>
            <OmaInnerKomponentti />
            <OmaInnerKomponentti />
            <TestiKomponentti />
        </div>
    );
}

export default OmaKomponentti;

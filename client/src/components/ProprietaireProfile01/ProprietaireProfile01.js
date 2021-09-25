import React from 'react';
import styles from './ProprietaireProfile01.module.css';

import MenuLeftSide from './MenuLeftSide/MenuLeftSide';
import ProprietaireProfile01Form from './ProprietaireProfile01Form/ProprietaireProfile01Form';

const ProprietaireProfile01 = () => {
    return (
        <div className={styles.main}>
            <MenuLeftSide />
            <ProprietaireProfile01Form />
        </div>
    )
};

export default ProprietaireProfile01;
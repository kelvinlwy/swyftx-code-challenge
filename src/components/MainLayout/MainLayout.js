import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss'

const MainLayout = ({children}) => {

  return (
    <div className={styles.main}>
      {children}
    </div>
  )

}

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout

import React from 'react';
import PropTypes from 'prop-types'

import styles from './Pagination.module.scss'

const Pagination = ({ onPrevClick, onNextClick, isFirstPage, isLastPage }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={onPrevClick} disabled={isFirstPage}>prev</button>
      <button onClick={onNextClick} disabled={isLastPage}>next</button>
    </div>
  )
}

Pagination.propTypes = {
  onPrevClick: PropTypes.func,
  onNextClick: PropTypes.func,
  isFirstPage: PropTypes.bool,
  isLastPage: PropTypes.bool,
}

Pagination.defaultProps = {
  isFirstPage: true,
  isLastPage: false
}

export default Pagination

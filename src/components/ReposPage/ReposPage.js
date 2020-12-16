import React, { useEffect, useMemo, useState } from 'react'
import useFetchGet from "../../hooks/useFetch/useFetchGet";
import { DEFAULT_ITEMS_PER_PAGE } from '../../configs/configs'
import useAppAction from "../../store/actions/useAppAction";
import Pagination from "../Pagination/Pagination";

import styles from './ReposPage.module.scss'
import { timeago } from "../../utils/date";

/**
 * This page display a list of Spotify Github public repositories
 *
 * A api link to get organization public repo: https://docs.github.com/en/free-pro-team@latest/rest/reference/repos#list-organization-repositories
 */
const ReposPage = ({ history }) => {
  const { response, fetch } = useFetchGet();
  const { response: nextPageResult, fetch: fetchNextPage } = useFetchGet();
  const { appState, setCurrentReposList } = useAppAction()
  const [currentPage, setCurrentPage] = useState(1)

  const { repos } = appState;

  useEffect(() =>
      fetch(`https://api.github.com/orgs/spotify/repos?type=all&per_page=${DEFAULT_ITEMS_PER_PAGE}&page=${currentPage}`)
    , [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  // TODO look for the api to get total number of repos instead
  useEffect(() =>
      fetchNextPage(`https://api.github.com/orgs/spotify/repos?type=all&per_page=${DEFAULT_ITEMS_PER_PAGE}&page=${currentPage + 1}`)
    , [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => setCurrentReposList(response), [response])

  const handlePrevClick = () => setCurrentPage(currentPage - 1)

  const handleNextClick = () => setCurrentPage(currentPage + 1)

  const handleRepoClick = (fullName) => {
    history.push(`/${fullName}`)
    return false;
  }

  const renderTableHead = useMemo(() => (
    <tr className={styles.item}>
      <th className={styles.col}>
        Name
      </th>
      <th className={styles.col}>
        Fork Repo
      </th>
      <th className={styles.col}>
        Numbers of fork
      </th>
      <th className={styles.col}>
        Number of PR
      </th>
      <th className={styles.col}>
        Last Updated
      </th>
    </tr>
  ), [])


  return (
    <div className={styles['page-wrapper']}>
      <table className={styles.list}>
        {renderTableHead}

        {
          ( repos || [] ).map(repo => (
            <tr className={styles.item} key={repo.id}>
              <td className={styles.col}>
                <a className={styles.link} onClick={() => handleRepoClick(repo['full_name'])}>{repo.name}</a>
              </td>
              <td className={styles.col}>
                {repo.fork ? '✔' : '✖️'}
              </td>
              <td className={styles.col}>
                {repo.forks_count}
              </td>
              <td>
                {0} {/* should create a component to fetch the repo and retrieve the number */}
              </td>
              <td>
                {timeago(repo.updated_at)}
              </td>
            </tr>
          ))
        }
      </table>

      <Pagination
        isFirstPage={currentPage === 1}
        isLastPage={!nextPageResult || nextPageResult.length === 0}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
      />
    </div>

  )
}

export default ReposPage

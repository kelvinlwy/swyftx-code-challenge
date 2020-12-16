import React, { useEffect, useMemo, useState } from 'react'
import useFetchGet from "../../hooks/useFetch/useFetchGet";

import styles from './Detail.module.scss'

const DetailPage = ({ history, match }) => {
  const fullName = `${match.params.owner}/${match.params.repo}`
  const { response, fetch } = useFetchGet();
  const { response: issues, fetch: fetchIssues } = useFetchGet()
  const [repo, setRepo] = useState({})

  useEffect(() =>
      fetch(`https://api.github.com/repos/${fullName}`)
    , [fullName]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (response) setRepo(response)
  }, [response]);

  useEffect(() =>
      fetchIssues(`https://api.github.com/repos/${fullName}/issues`)
    , [fullName]);

  const topIssue = useMemo(() => {
    if (issues) {
      const compare = (a, b) => {
        return a.comments > b.comments
      }

      return issues.sort(compare).pop();
    }

    return null
  }, [issues])

  return (
    <div className={styles.detail}>
      <h1>{repo.name}</h1>
      <p>Number of watchers: <span>{repo.watchers_count}</span></p>
      {
        topIssue && (
          <p>
            <a href={`https://github.com/spotify/scio/issues/${topIssue.number}`}
               target={'_blank'}>{topIssue.title} - {topIssue.comments}</a>
          </p>
        )
      }

      <button className={styles['back-button']} onClick={() => history.goBack()}>Back</button>
    </div>
  )
}

export default DetailPage

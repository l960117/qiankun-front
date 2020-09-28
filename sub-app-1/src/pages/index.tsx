import React from 'react';
import { history } from 'umi'
import styles from './index.less';

export default () => {

  const goTo = () => {
    history.push({
      pathname: "/first"
    })
  }
  return (
    <div>
      <h1 className={styles.title}>Page index 1</h1>
      <div onClick={goTo}>
        跳转
      </div>
    </div>
  );
}

import React from 'react';
import { Button } from 'antd';

import styles from './index.module.less';

const MyComponent1: React.FC = () => {
  const onButtonClick = () => {};

  const onButton2Click = () => {};

  return (
    <div className={styles.clsDiv}>
      <div className={styles.clsDiv2}>
        <div className={styles.clsDiv3}>
          <img
            alt=""
            src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
            className={styles.clsImage}
          />
          <span className={styles.clsSpan}>我是 DeepSeek,很高兴见到你！</span>
        </div>
        <span className={styles.clsSpan2}>
          我可以帮你写代码、 读文件、 写作各种创意内容， 请把你的任务交给我吧~
        </span>
        <div className={styles.clsDiv4}>
          <span className={styles.clsSpan3}>给 DeepSeek 发送消息</span>
          <div className={styles.clsDiv5}>
            <div className={styles.clsDiv6}>
              <div className={styles.clsDiv7}>
                <Button
                  shape="round"
                  size="small"
                  onClick={onButtonClick}
                  className={styles.clsButton}
                >
                  <div className={styles.clsDiv8}>
                    <img
                      alt=""
                      src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
                      className={styles.clsImage2}
                    />
                    <span className={styles.clsSpan4}>深度思考（R1）</span>
                  </div>
                </Button>
                <Button
                  shape="round"
                  size="small"
                  onClick={onButton2Click}
                  className={styles.clsButton2}
                >
                  <div className={styles.clsDiv8}>
                    <img
                      alt=""
                      src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
                      className={styles.clsImage2}
                    />
                    <span className={styles.clsSpan5}>联网搜索</span>
                  </div>
                </Button>
              </div>
            </div>
            <div className={styles.clsDiv9}>
              <img
                alt=""
                src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
                className={styles.clsImage3}
              />
              <img
                alt=""
                src="https://lark-app.oss-cn-beijing.aliyuncs.com/fecodex/fallback-images/04.jpeg"
                className={styles.clsImage4}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent1;

import styles from "./loading.module.css";
const Loading = () => {
  return (
    <svg
      className={styles.LoadingSVG}
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={styles.LoadingPath}
        d="M53.5 27.5C53.5 30.9144 52.8275 34.2953 51.5209 37.4498C50.2142 40.6042 48.2991 43.4705 45.8848 45.8848C43.4705 48.2991 40.6042 50.2142 37.4498 51.5209C34.2953 52.8275 30.9144 53.5 27.5 53.5C24.0856 53.5 20.7047 52.8275 17.5502 51.5209C14.3958 50.2142 11.5295 48.2991 9.11522 45.8848C6.7009 43.4705 4.78575 40.6042 3.47913 37.4498C2.17251 34.2953 1.5 30.9144 1.5 27.5C1.5 24.0856 2.17251 20.7047 3.47913 17.5502C4.78576 14.3958 6.7009 11.5295 9.11523 9.11522C11.5295 6.7009 14.3958 4.78575 17.5502 3.47913C20.7047 2.17251 24.0856 1.5 27.5 1.5C30.9144 1.5 34.2953 2.17251 37.4498 3.47913C40.6042 4.78576 43.4705 6.7009 45.8848 9.11523C48.2991 11.5296 50.2142 14.3958 51.5209 17.5502C52.8275 20.7047 53.5 24.0856 53.5 27.5L53.5 27.5Z"
        stroke="#FF5722"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Loading;
import { useEffect } from 'react';

const useDocumentTitle = (pageTitle) => {
  return (
    useEffect(() => {
      document.title = 'Todo App · ' + pageTitle;
    }, [])
  );
};

export default useDocumentTitle;
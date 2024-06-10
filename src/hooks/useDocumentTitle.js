import { useEffect } from 'react';

const useDocumentTitle = (pageTitle) => {
  return (
    useEffect(() => {
      document.title = 'TodoApp App · ' + pageTitle;
    })
  );
};

export default useDocumentTitle;